"""업무 자동화 실험실 신규 카드 2종 커버 이미지.

실행: python scripts/gen_works_automation_covers.py
출력
  public/images/works/field-data-cover.png   1200x900
  public/images/works/trade-docs-cover.png   1200x900

카드 목록에서 aspect 4:3 박스에 object-cover 로 들어간다.
실제 사진이 준비되면 같은 경로에 덮어쓰면 된다.
"""

import math
import os

from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public", "images", "works")
os.makedirs(OUT_DIR, exist_ok=True)

W, H = 1200, 900


def gradient(top, bottom):
    img = Image.new("RGB", (W, H))
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        row = tuple(int(top[i] + (bottom[i] - top[i]) * t) for i in range(3))
        for x in range(W):
            px[x, y] = row
    return img


def save(img, name):
    img = img.filter(ImageFilter.GaussianBlur(0.35))
    path = os.path.join(OUT_DIR, name)
    img.save(path, optimize=True)
    print("saved", path, os.path.getsize(path) // 1024, "KB")


# ── 1. 현장 데이터: 흩어진 입력이 하나의 표로 모인다 ─────────────
img = gradient((10, 20, 34), (23, 51, 82))
d = ImageDraw.Draw(img)

# 배경 격자
for x in range(0, W + 1, 60):
    d.line((x, 0, x, H), fill=(24, 46, 74), width=1)
for y in range(0, H + 1, 60):
    d.line((0, y, W, y), fill=(24, 46, 74), width=1)

# 왼쪽: 현장에서 올라오는 흩어진 입력들 (사진 프레임 + 위치 핀)
frames = [(90, 180), (150, 350), (95, 520), (185, 660)]
for i, (x, y) in enumerate(frames):
    d.rounded_rectangle((x, y, x + 150, y + 110), radius=10,
                        fill=(16, 36, 58), outline=(125, 211, 252), width=3)
    d.line((x + 16, y + 84, x + 54, y + 46), fill=(94, 234, 212), width=3)
    d.line((x + 54, y + 46, x + 90, y + 84), fill=(94, 234, 212), width=3)
    d.ellipse((x + 104, y + 26, x + 124, y + 46), fill=(210, 167, 95))
    # 위치 핀
    px, py = x + 168, y + 30
    d.ellipse((px - 9, py - 9, px + 9, py + 9), outline=(248, 113, 113), width=3)
    d.line((px, py + 9, px, py + 26), fill=(248, 113, 113), width=3)

# 가운데: 측정 파형
wave = []
for t in range(0, 361):
    u = t / 360
    x = 400 + u * 230
    y = 450 + 78 * math.sin(u * 9.2) * (1 - u * 0.5) - 40 * u
    wave.append((x, y))
d.line(wave, fill=(94, 234, 212), width=4)
for wx, wy in [(455, 470), (540, 410), (610, 392)]:
    d.ellipse((wx - 7, wy - 7, wx + 7, wy + 7), fill=(224, 242, 254))

# 수렴선
for i, (x, y) in enumerate(frames):
    d.line((x + 195, y + 55, 690, 450), fill=(56, 130, 190), width=2)
d.line((640, 430, 700, 450), fill=(94, 234, 212), width=3)

# 오른쪽: 정리된 표 (리포트)
tx, ty = 730, 190
d.rounded_rectangle((tx, ty, tx + 380, ty + 520), radius=18,
                    fill=(247, 243, 234), outline=(148, 197, 253), width=3)
d.rectangle((tx, ty, tx + 380, ty + 62), fill=(47, 93, 124))
for i in range(3):
    d.rounded_rectangle((tx + 24 + i * 110, ty + 26, tx + 24 + i * 110 + 78, ty + 38),
                        radius=6, fill=(200, 222, 240))
for r in range(9):
    ry = ty + 92 + r * 48
    d.line((tx + 20, ry + 30, tx + 360, ry + 30), fill=(214, 208, 196), width=1)
    for c in range(3):
        w = (86, 62, 74)[c] - (r % 3) * 8
        d.rounded_rectangle((tx + 24 + c * 110, ry + 8, tx + 24 + c * 110 + w, ry + 22),
                            radius=6, fill=(120, 132, 148))
    if r in (2, 6):
        d.rounded_rectangle((tx + 244 + 0, ry + 8, tx + 244 + 58, ry + 22),
                            radius=6, fill=(94, 200, 180))

save(img, "field-data-cover.png")


# ── 2. 수출입 문서: 원본 하나에서 세 장이 나온다 ──────────────────
img = gradient((30, 16, 12), (74, 34, 22))
d = ImageDraw.Draw(img)

for x in range(0, W + 1, 60):
    d.line((x, 0, x, H), fill=(62, 32, 24), width=1)
for y in range(0, H + 1, 60):
    d.line((0, y, W, y), fill=(62, 32, 24), width=1)

# 왼쪽: 단일 원본 사양서
sx, sy = 110, 250
d.rounded_rectangle((sx, sy, sx + 250, sy + 400), radius=16,
                    fill=(247, 243, 234), outline=(210, 167, 95), width=4)
d.rectangle((sx, sy, sx + 250, sy + 54), fill=(201, 111, 74))
d.rounded_rectangle((sx + 20, sy + 20, sx + 140, sy + 34), radius=6, fill=(247, 227, 210))
for r in range(11):
    ry = sy + 82 + r * 28
    w = 200 - (r % 4) * 34
    d.rounded_rectangle((sx + 22, ry, sx + 22 + w, ry + 11), radius=5, fill=(150, 142, 130))
d.ellipse((sx + 176, sy + 322, sx + 232, sy + 378), outline=(201, 111, 74), width=4)
d.line((sx + 190, sy + 350, sx + 204, sy + 364), fill=(201, 111, 74), width=4)
d.line((sx + 204, sy + 364, sx + 220, sy + 336), fill=(201, 111, 74), width=4)

# 분기선
for i, ey in enumerate((215, 450, 685)):
    d.line((sx + 258, sy + 200, 660, ey + 90), fill=(196, 132, 96), width=3)
    d.ellipse((654, ey + 84, 666, ey + 96), fill=(210, 167, 95))

# 오른쪽: 세 장의 문서 (PI / CI / PL)
labels = [(0, (56, 132, 176)), (1, (94, 180, 150)), (2, (210, 167, 95))]
for idx, accent in labels:
    dx, dy = 700, 180 + idx * 235
    d.rounded_rectangle((dx, dy, dx + 330, dy + 195), radius=14,
                        fill=(252, 250, 245), outline=accent, width=3)
    d.rectangle((dx, dy, dx + 330, dy + 40), fill=accent)
    d.rounded_rectangle((dx + 18, dy + 14, dx + 96, dy + 26), radius=5, fill=(250, 248, 244))
    for r in range(4):
        ry = dy + 62 + r * 30
        w = 270 - (r % 3) * 60
        d.rounded_rectangle((dx + 20, ry, dx + 20 + w, ry + 11), radius=5, fill=(168, 160, 150))
    d.rounded_rectangle((dx + 224, dy + 152, dx + 310, dy + 172), radius=6, fill=accent)

save(img, "trade-docs-cover.png")
