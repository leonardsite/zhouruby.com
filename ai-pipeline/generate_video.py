#!/usr/bin/env python3
"""
Generate animated GIF from logo using Google Veo API.
Creates short looping animations for website decorative elements.
"""

import os
import time
from pathlib import Path

from google import genai
from google.genai import types

API_KEY = os.environ.get("GEMINI_API_KEY", "")
OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images" / "animated"


def generate_video(client: genai.Client, prompt: str, filename: str) -> dict:
    """Generate a short video clip and save it."""
    result = {"filename": filename, "success": False, "error": None}

    try:
        operation = client.models.generate_videos(
            model="veo-2.0-generate-001",
            prompt=prompt,
            config=types.GenerateVideosConfig(
                number_of_videos=1,
                duration_seconds=5,
                aspect_ratio="16:9",
            ),
        )

        # Poll for completion
        while not operation.done:
            print(f"  Waiting for video generation... ({filename})")
            time.sleep(10)
            operation = client.operations.get(operation)

        if operation.result and operation.result.generated_videos:
            video = operation.result.generated_videos[0]
            OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
            output_path = OUTPUT_DIR / filename
            video.video.save(str(output_path))
            result["success"] = True
            print(f"  OK  {filename}")
        else:
            result["error"] = "No video data returned"
            print(f"  FAIL  {filename}: No video data")

    except Exception as exc:
        result["error"] = str(exc)
        print(f"  FAIL  {filename}: {exc}")

    return result


def main():
    client = genai.Client(api_key=API_KEY)

    animations = [
        {
            "filename": "logo-float.mp4",
            "prompt": "A cute cartoon frog mascot logo gently floating up and down with small musical notes appearing around it, soft watercolor style animation, green and blue tones, seamless loop, white background, simple and elegant motion",
        },
        {
            "filename": "musical-notes-float.mp4",
            "prompt": "Colorful watercolor musical notes (treble clef, eighth notes, quarter notes) gently floating and swaying in the air, soft pastel green and blue tones, dreamy bokeh particles, seamless loop animation, white background",
        },
        {
            "filename": "leaves-sway.mp4",
            "prompt": "Tropical monstera leaves and small vines gently swaying in a soft breeze, watercolor illustration style, light green and teal tones, small sparkle particles, calming seamless loop, white background",
        },
    ]

    print(f"\n{'='*60}")
    print(f"  Generating {len(animations)} animated video(s)")
    print(f"  Output directory: {OUTPUT_DIR}")
    print(f"{'='*60}\n")

    results = []
    for i, anim in enumerate(animations):
        if i > 0:
            print("  Waiting 15s between requests...")
            time.sleep(15)
        results.append(generate_video(client, anim["prompt"], anim["filename"]))

    success = sum(1 for r in results if r["success"])
    print(f"\n{'='*60}")
    print(f"  Done: {success}/{len(results)} succeeded")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
