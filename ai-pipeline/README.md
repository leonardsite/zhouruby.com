# AI Image Generation Pipeline

Generate watercolor-style images for zhouruby.com using Google Gemini.

## Setup

```bash
cd ai-pipeline
uv sync
```

## Usage

Generate all images:

```bash
uv run python generate.py --all
```

Generate a single category:

```bash
uv run python generate.py --category hero
uv run python generate.py --category courses
uv run python generate.py --category methods
uv run python generate.py --category decorative
```

Generate from a custom prompt:

```bash
uv run python generate.py --prompt "A watercolor monstera leaf" --filename leaf.png
```

### Options

| Flag            | Description                              |
|-----------------|------------------------------------------|
| `--all`         | Generate every image in prompts.json     |
| `--category`    | Generate one category (hero, courses, methods, decorative) |
| `--prompt`      | Generate a single image from a custom prompt |
| `--filename`    | Output filename for `--prompt` (default: custom.png) |
| `--output-dir`  | Override the output directory            |
| `--workers`     | Number of parallel threads (default: 3)  |
| `--model`       | Override the Gemini model                |

## Output

Images are saved to `../public/images/generated/` by default.

## Prompts

All predefined prompts live in `prompts.json`, organised by category:

- **hero** -- hero section backgrounds and studio scenes
- **courses** -- course card background illustrations
- **methods** -- teaching method icons
- **decorative** -- dividers, leaves, and decorative elements
