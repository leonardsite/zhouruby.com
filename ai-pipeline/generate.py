#!/usr/bin/env python3
"""
AI Image Generation Pipeline for zhouruby.com
Uses Google Gemini API to generate watercolor-style images for the website.
"""

import argparse
import json
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from google import genai
from google.genai import types

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

API_KEY = os.environ.get("GEMINI_API_KEY", "")
MODEL = "imagen-4.0-ultra-generate-001"  # Best quality image generation model

PROMPTS_FILE = Path(__file__).parent / "prompts.json"
OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images" / "generated"

MAX_WORKERS = 3  # Parallel generation threads (keep moderate to respect rate limits)


# ---------------------------------------------------------------------------
# Core generation
# ---------------------------------------------------------------------------

def create_client() -> genai.Client:
    """Create and return a Google Gen AI client."""
    return genai.Client(api_key=API_KEY)


def generate_single_image(
    client: genai.Client,
    prompt: str,
    output_path: Path,
    aspect_ratio: str = "1:1",
) -> dict:
    """
    Generate a single image from a text prompt and save it to *output_path*.

    Returns a dict with status information.
    """
    result = {
        "path": str(output_path),
        "prompt": prompt[:80] + ("..." if len(prompt) > 80 else ""),
        "success": False,
        "error": None,
    }

    try:
        response = client.models.generate_images(
            model=MODEL,
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio=aspect_ratio,
            ),
        )

        image_saved = False
        for img in response.generated_images:
            output_path.parent.mkdir(parents=True, exist_ok=True)
            img.image.save(str(output_path))
            image_saved = True
            break

        if image_saved:
            result["success"] = True
        else:
            result["error"] = "No image data returned by the model."

    except Exception as exc:
        result["error"] = str(exc)

    return result


# ---------------------------------------------------------------------------
# Batch / parallel helpers
# ---------------------------------------------------------------------------

def load_prompts(categories: list[str] | None = None) -> list[dict]:
    """
    Load prompt definitions from prompts.json.

    If *categories* is provided, only prompts in those categories are returned.
    Each returned dict has keys: id, filename, prompt, aspect_ratio.
    """
    with open(PROMPTS_FILE, "r", encoding="utf-8") as f:
        data: dict[str, list[dict]] = json.load(f)

    prompts: list[dict] = []
    for category, items in data.items():
        if categories and category not in categories:
            continue
        for item in items:
            item["category"] = category
            prompts.append(item)
    return prompts


def generate_batch(prompts: list[dict], output_dir: Path) -> list[dict]:
    """
    Generate images for a list of prompt dicts in parallel.

    Returns a list of result dicts (one per prompt).
    """
    client = create_client()
    output_dir.mkdir(parents=True, exist_ok=True)

    results: list[dict] = []
    total = len(prompts)

    print(f"\n{'='*60}")
    print(f"  Generating {total} image(s) with model {MODEL}")
    print(f"  Output directory: {output_dir}")
    print(f"  Max parallel workers: {MAX_WORKERS}")
    print(f"{'='*60}\n")

    def _task(item: dict) -> dict:
        output_path = output_dir / item["filename"]
        aspect = item.get("aspect_ratio", "1:1")
        return generate_single_image(client, item["prompt"], output_path, aspect)

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        future_to_item = {
            pool.submit(_task, item): item for item in prompts
        }

        for idx, future in enumerate(as_completed(future_to_item), start=1):
            item = future_to_item[future]
            res = future.result()
            results.append(res)

            status = "OK" if res["success"] else "FAIL"
            tag = f"[{idx}/{total}]"
            print(f"  {tag:>8}  {status:4}  {item['id']}")
            if res["error"]:
                print(f"           Error: {res['error']}")

    return results


# ---------------------------------------------------------------------------
# Custom single-prompt generation
# ---------------------------------------------------------------------------

def generate_custom(prompt: str, filename: str, output_dir: Path) -> dict:
    """Generate a single image from a custom prompt string."""
    client = create_client()
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / filename

    print(f"\n  Generating custom image...")
    print(f"  Prompt : {prompt[:100]}{'...' if len(prompt) > 100 else ''}")
    print(f"  Output : {output_path}\n")

    result = generate_single_image(client, prompt, output_path)

    if result["success"]:
        print(f"  Done -- saved to {output_path}")
    else:
        print(f"  Failed -- {result['error']}")

    return result


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Generate AI images for zhouruby.com using Google Gemini.",
    )
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument(
        "--all",
        action="store_true",
        help="Generate all images defined in prompts.json.",
    )
    group.add_argument(
        "--category",
        type=str,
        choices=["hero", "courses", "methods", "decorative"],
        help="Generate images for a specific category only.",
    )
    group.add_argument(
        "--prompt",
        type=str,
        help="Generate a single image from a custom prompt.",
    )
    parser.add_argument(
        "--filename",
        type=str,
        default="custom.png",
        help="Output filename when using --prompt (default: custom.png).",
    )
    parser.add_argument(
        "--output-dir",
        type=str,
        default=None,
        help=f"Override the output directory (default: {OUTPUT_DIR}).",
    )
    parser.add_argument(
        "--workers",
        type=int,
        default=MAX_WORKERS,
        help=f"Number of parallel workers for batch generation (default: {MAX_WORKERS}).",
    )
    parser.add_argument(
        "--model",
        type=str,
        default=None,
        help=f"Override the Gemini model (default: {MODEL}).",
    )
    return parser


def main() -> None:
    global MAX_WORKERS, MODEL

    parser = build_parser()
    args = parser.parse_args()

    output_dir = Path(args.output_dir) if args.output_dir else OUTPUT_DIR
    MAX_WORKERS = args.workers

    if args.model:
        MODEL = args.model

    start = time.time()

    if args.all:
        prompts = load_prompts()
        results = generate_batch(prompts, output_dir)
    elif args.category:
        prompts = load_prompts(categories=[args.category])
        results = generate_batch(prompts, output_dir)
    else:
        result = generate_custom(args.prompt, args.filename, output_dir)
        results = [result]

    elapsed = time.time() - start
    success_count = sum(1 for r in results if r["success"])
    fail_count = len(results) - success_count

    print(f"\n{'='*60}")
    print(f"  Finished in {elapsed:.1f}s")
    print(f"  Success: {success_count}  |  Failed: {fail_count}")
    print(f"{'='*60}\n")

    if fail_count > 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
