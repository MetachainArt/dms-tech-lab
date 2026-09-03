"""future-arts 18화 "글리프가 없는 글자" 커버.

실행: python scripts/gen_typeface_boundary_cover.py
출력: public/images/posts/hangul-latin-typeface-boundary.png (1600x1200)

위줄은 지정한 서체에 글리프가 있는 라틴 문자, 아래줄은 글리프가 없어
비어 있는 칸. 빈 칸에서 점선이 내려가 폴백으로 밀려난 한글이 다른 얼굴로 앉는다.
Paperfolio 팔레트(크림 바탕 · 잉크 · 코랄).
"""

import os

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public", "images", "posts")
os.makedirs(OUT_DIR, exist_ok=True)

W, H = 1600, 1200

BG = (247, 243, 234)
SURFACE = (255, 253, 248)
INK = (31, 41, 55)
MUTED = (150, 156, 166)
LINE = (216, 210, 198)
CORAL = (201, 111, 74)

FONT_DIR = os.path.join(os.environ.get("SystemRoot", r"C:\Windows"), "Fonts")


def font(name, size):
    return ImageFont.truetype(os.path.join(FONT_DIR, name), size)


def center(d, box, text, fnt, fill):
    x0, y0, x1, y1 = box
    left, top, right, bottom = d.textbbox((0, 0), text, font=fnt)
    d.text(((x0 + x1 - (right - left)) / 2 - left,
            (y0 + y1 - (bottom - top)) / 2 - top), text, font=fnt, fill=fill)


def dashed_rect(d, box, color, width=3, dash=14):
    x0, y0, x1, y1 = box
    for i in range(int(x0), int(x1), dash * 2):
        d.line((i, y0, min(i + dash, x1), y0), fill=color, width=width)
        d.line((i, y1, min(i + dash, x1), y1), fill=color, width=width)
    for j in range(int(y0), int(y1), dash * 2):
        d.line((x0, j, x0, min(j + dash, y1)), fill=color, width=width)
        d.line((x1, j, x1, min(j + dash, y1)), fill=color, width=width)


img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

CELL, GAP = 244, 26
latin = font("arialbd.ttf", 138)
kr = font("malgunbd.ttf", 110)

# ── 상단 라벨 ────────────────────────────────────────────
grid_w = 4 * CELL + 3 * GAP
x0 = (W - grid_w) // 2

d.text((x0, 118), "GLYPH NOT FOUND", font=font("arialbd.ttf", 24), fill=CORAL)
d.line((x0, 162, x0 + 236, 162), fill=CORAL, width=3)
d.text((x0, 178), "없는 글자는 에러를 내지 않는다", font=font("malgun.ttf", 32), fill=MUTED)

# ── 윗줄: 글리프가 있는 라틴 ──────────────────────────────
top_y = 256
for i, ch in enumerate("TYPE"):
    x = x0 + i * (CELL + GAP)
    box = (x, top_y, x + CELL, top_y + CELL)
    d.rounded_rectangle(box, radius=8, fill=SURFACE, outline=LINE, width=2)
    for k in range(1, 4):
        d.line((x + k * CELL // 4, top_y + 12, x + k * CELL // 4, top_y + CELL - 12),
               fill=(241, 237, 227), width=1)
    center(d, box, ch, latin, INK)

d.text((x0, top_y + CELL + 22), "지정한 서체에 있는 글자",
       font=font("malgun.ttf", 24), fill=MUTED)

# ── 아랫줄: 글리프가 없는 빈 칸 ───────────────────────────
bot_y = top_y + CELL + 92
hangul = ["한", "글", "은"]
empties = []
for i in range(3):
    x = x0 + i * (CELL + GAP)
    box = (x, bot_y, x + CELL, bot_y + CELL)
    dashed_rect(d, box, CORAL)
    empties.append(x + CELL // 2)

d.text((x0, bot_y + CELL + 22), "없는 글자",
       font=font("malgun.ttf", 24), fill=CORAL)

# ── 폴백으로 떨어지는 한글 ────────────────────────────────
fall_top = bot_y + CELL + 70
fall_y = fall_top + 74
for cx, ch in zip(empties, hangul):
    for t in range(6):
        yy = fall_top + t * 11
        d.ellipse((cx - 2, yy, cx + 2, yy + 4), fill=CORAL)
    left, top, right, bottom = d.textbbox((0, 0), ch, font=kr)
    d.text((cx - (right - left) / 2 - left, fall_y - top), ch, font=kr, fill=MUTED)

# ── 하단 캡션 ────────────────────────────────────────────
d.text((x0, H - 78),
       "브라우저는 경고 없이 다음 서체로 넘어간다",
       font=font("malgun.ttf", 26), fill=MUTED)

path = os.path.join(OUT_DIR, "hangul-latin-typeface-boundary.png")
img.save(path, optimize=True)
print("saved", path, os.path.getsize(path) // 1024, "KB")
