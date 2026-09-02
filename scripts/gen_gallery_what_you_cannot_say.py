"""아이디어 페이지 "설명할 수 없는 일은 넘길 수 없다" 임시 대표 이미지.

실행: python scripts/gen_gallery_what_you_cannot_say.py
출력: public/gallery/what-you-cannot-say.png (1200x1400)

Paperfolio 팔레트(크림 바탕 + 잉크 선)로 그린 추상 이미지.
왼쪽 위는 이름 없는 손의 궤적, 아래로 내려오며 문장의 괘선으로 정리된다.
실제 사진이 준비되면 같은 경로에 덮어쓰거나
lib/gallery-data.ts 의 image 경로만 바꾸면 된다.
"""

import math
import os
import random

from PIL import Image, ImageDraw, ImageFilter

random.seed(20260902)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public", "gallery")
os.makedirs(OUT_DIR, exist_ok=True)

W, H = 1200, 1400

BG = (247, 243, 234)        # paperfolio-bg
INK = (31, 41, 55)          # paperfolio-text
MUTED = (107, 114, 128)     # paperfolio-text-muted
BLUE = (47, 93, 124)        # accent-blue
CORAL = (201, 111, 74)      # accent-coral

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# ── 종이 결 ──────────────────────────────────────────────
for _ in range(2600):
    x = random.randint(0, W - 1)
    y = random.randint(0, H - 1)
    tone = random.randint(-6, 4)
    d.point((x, y), fill=(BG[0] + tone, BG[1] + tone, BG[2] + tone))

# ── 상단: 이름 없는 손의 궤적 ─────────────────────────────
# 서로 얽힌 곡선 — 몸은 아는데 말로는 못 하는 순서
for i in range(11):
    pts = []
    phase = i * 0.55
    amp = 46 + i * 7
    for t in range(0, 101):
        u = t / 100
        x = 120 + u * (W - 240)
        y = 250 + i * 22 + amp * math.sin(u * 5.4 + phase) * (1 - u * 0.35)
        pts.append((x, y))
    shade = 150 - i * 6
    d.line(pts, fill=(shade, shade + 6, shade + 14), width=2)

# 궤적 위의 결절점 — 멈추고 되돌아가는 지점
for x, y in [(300, 300), (520, 372), (735, 296), (905, 405), (410, 470)]:
    d.ellipse((x - 6, y - 6, x + 6, y + 6), fill=INK)
    d.ellipse((x - 17, y - 17, x + 17, y + 17), outline=MUTED, width=1)

# ── 전환 구간: 곡선이 직선으로 풀린다 ─────────────────────
for i in range(9):
    y0 = 560 + i * 16
    pts = []
    for t in range(0, 101):
        u = t / 100
        x = 120 + u * (W - 240)
        wobble = math.sin(u * 4.2 + i * 0.7) * (34 * (1 - u) ** 2)
        pts.append((x, y0 + wobble))
    d.line(pts, fill=(168, 172, 178), width=2)

# ── 하단: 문장으로 옮겨 적힌 괘선 ─────────────────────────
LEFT, RIGHT = 150, W - 150
base = 800
line_gap = 44

random.seed(7)
for i in range(12):
    y = base + i * line_gap
    # 괘선
    d.line((LEFT, y, RIGHT, y), fill=(214, 208, 196), width=1)
    # 적힌 글줄 — 길이가 제각각이라 손으로 쓴 느낌
    if i in (3, 8):
        continue
    end = RIGHT - random.randint(40, 340)
    d.line((LEFT, y - 9, end, y - 9), fill=(126, 132, 142), width=7)

# 지워지고 다시 쓰인 줄
strike_y = base + 3 * line_gap
d.line((LEFT, strike_y - 9, RIGHT - 210, strike_y - 9), fill=(196, 192, 184), width=7)
d.line((LEFT - 8, strike_y - 12, RIGHT - 200, strike_y - 4), fill=CORAL, width=3)

# 새로 적힌 줄 — 강조
new_y = base + 8 * line_gap
d.line((LEFT, new_y - 9, RIGHT - 120, new_y - 9), fill=BLUE, width=8)
d.ellipse((LEFT - 34, new_y - 20, LEFT - 12, new_y + 2), outline=BLUE, width=3)

# ── 여백의 표식 ──────────────────────────────────────────
d.line((LEFT - 70, base - 40, LEFT - 70, base + 11 * line_gap), fill=(206, 200, 188), width=1)
d.line((LEFT - 84, base + 3 * line_gap - 9, LEFT - 56, base + 3 * line_gap - 9), fill=CORAL, width=3)

# 아래쪽 여백에 남은 한 점
d.ellipse((W // 2 - 4, H - 96, W // 2 + 4, H - 88), fill=INK)

img = img.filter(ImageFilter.GaussianBlur(0.3))

path = os.path.join(OUT_DIR, "what-you-cannot-say.png")
img.save(path, optimize=True)
print("saved", path, os.path.getsize(path) // 1024, "KB")
