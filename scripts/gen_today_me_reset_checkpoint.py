"""today-me 시리즈 14화(리셋 체크포인트) 커버/본문 이미지 3종 생성.

실행: python scripts/gen_today_me_reset_checkpoint.py
출력: public/blog/today_me_reset_checkpoint_0{1,2,3}.jpg (1600x900)

기존 scripts/gen_ch*.py 와 같은 Pillow 파이프라인이지만
출력 경로를 리포지터리 기준 상대 경로로 잡는다.
"""

from PIL import Image, ImageDraw, ImageFilter
import math
import os
import random

random.seed(20260312)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public", "blog")
os.makedirs(OUT_DIR, exist_ok=True)

W, H = 1600, 900


def vertical_gradient(top, bottom):
    img = Image.new("RGB", (W, H))
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        r = int(top[0] + (bottom[0] - top[0]) * t)
        g = int(top[1] + (bottom[1] - top[1]) * t)
        b = int(top[2] + (bottom[2] - top[2]) * t)
        for x in range(W):
            px[x, y] = (r, g, b)
    return img


def save(img, name):
    path = os.path.join(OUT_DIR, name)
    img.save(path, quality=92, optimize=True, progressive=True)
    print("saved", path, os.path.getsize(path) // 1024, "KB")


# ── 01. 미니멀 데스크: 체크리스트 카드 + 타이머 ──────────────────────
img = vertical_gradient((12, 16, 26), (26, 36, 56))
d = ImageDraw.Draw(img)

# 책상 표면
d.rectangle((0, 600, W, H), fill=(18, 24, 38))
d.line((0, 600, W, 600), fill=(96, 165, 250), width=2)

# 스탠드 조명 원뿔
glow = Image.new("RGB", (W, H), (0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.polygon([(800, 90), (1180, 640), (420, 640)], fill=(38, 52, 78))
glow = glow.filter(ImageFilter.GaussianBlur(90))
img = Image.composite(Image.blend(img, glow, 0.55), img, Image.new("L", (W, H), 90))
d = ImageDraw.Draw(img)

# 체크리스트 카드 3장
for i, (x, y, rows) in enumerate([(270, 300, 4), (620, 250, 5), (930, 320, 3)]):
    d.rounded_rectangle((x, y, x + 300, y + 320), radius=22,
                        fill=(20, 28, 44), outline=(125, 211, 252), width=3)
    for r in range(rows):
        ry = y + 70 + r * 52
        d.rounded_rectangle((x + 30, ry, x + 56, ry + 26), radius=6,
                            outline=(94, 234, 212), width=3)
        if r < rows - 1:
            d.line((x + 35, ry + 14, x + 44, ry + 21), fill=(94, 234, 212), width=4)
            d.line((x + 44, ry + 21, x + 52, ry + 6), fill=(94, 234, 212), width=4)
        d.rounded_rectangle((x + 74, ry + 6, x + 262 - r * 18, ry + 20), radius=7,
                            fill=(70, 100, 148))
    d.rounded_rectangle((x + 30, y + 28, x + 150, y + 42), radius=7, fill=(125, 211, 252))

# 타이머 다이얼
cx, cy, rad = 1400, 430, 112
d.ellipse((cx - rad, cy - rad, cx + rad, cy + rad), outline=(165, 243, 252), width=4)
d.ellipse((cx - rad + 26, cy - rad + 26, cx + rad - 26, cy + rad - 26),
          outline=(56, 189, 248), width=2)
for tick in range(12):
    a = math.radians(tick * 30 - 90)
    d.line((cx + math.cos(a) * (rad - 14), cy + math.sin(a) * (rad - 14),
            cx + math.cos(a) * (rad - 2), cy + math.sin(a) * (rad - 2)),
           fill=(148, 197, 253), width=3)
# 12분 구간 하이라이트
d.pieslice((cx - rad + 34, cy - rad + 34, cx + rad - 34, cy + rad - 34),
           start=-90, end=-18, fill=(45, 212, 191))
d.line((cx, cy, cx + math.cos(math.radians(-18)) * (rad - 40),
        cy + math.sin(math.radians(-18)) * (rad - 40)), fill=(224, 242, 254), width=5)
d.ellipse((cx - 8, cy - 8, cx + 8, cy + 8), fill=(224, 242, 254))

# 책상 위 반사선
for i in range(5):
    y = 640 + i * 52
    d.line((120, y, 1480, y), fill=(34, 48, 74), width=2)

img = img.filter(ImageFilter.GaussianBlur(0.4))
save(img, "today_me_reset_checkpoint_01.jpg")


# ── 02. 다크 작업 패널: 12분 타임 블록 + 3단계 리셋 ──────────────────
img = Image.new("RGB", (W, H), (10, 14, 22))
d = ImageDraw.Draw(img)

for i in range(14):
    y = 40 + i * 62
    pts = [(x, y + int(11 * math.sin(x / 110 + i * 0.7))) for x in range(0, W + 1, 20)]
    d.line(pts, fill=(20, 34 + i * 2, 54 + i * 3), width=2)

# 패널 프레임
d.rounded_rectangle((120, 110, 1480, 790), radius=30, fill=(14, 20, 32),
                    outline=(56, 189, 248), width=3)
d.line((120, 220, 1480, 220), fill=(56, 189, 248), width=2)
for i, w in enumerate((150, 96, 64)):
    d.rounded_rectangle((176 + i * 190, 158, 176 + i * 190 + w, 176), radius=9,
                        fill=(56, 189, 248) if i == 0 else (40, 72, 110))

# 12분 타임 블록 (12칸, 앞 3칸만 점등)
for i in range(12):
    x = 180 + i * 104
    lit = i < 3
    d.rounded_rectangle((x, 270, x + 84, 400), radius=14,
                        fill=(20, 78, 92) if lit else (18, 26, 40),
                        outline=(45, 212, 191) if lit else (44, 64, 96), width=3)
    d.rounded_rectangle((x + 18, 300, x + 66, 370), radius=8,
                        fill=(94, 234, 212) if lit else (30, 44, 68))

# 3단계 리셋 레인
labels_y = (470, 590, 700)
for i, y in enumerate(labels_y):
    d.rounded_rectangle((180, y, 1420, y + 82), radius=18, fill=(17, 24, 38),
                        outline=(99, 102, 241) if i == 1 else (37, 99, 235), width=2)
    d.ellipse((214, y + 21, 254, y + 61), fill=(129, 140, 248))
    d.rounded_rectangle((286, y + 26, 286 + 420 - i * 90, y + 44), radius=9,
                        fill=(71, 105, 160))
    d.rounded_rectangle((286, y + 54, 286 + 300 - i * 70, y + 66), radius=6,
                        fill=(44, 68, 106))
    # 진행 바
    d.rounded_rectangle((980, y + 34, 1380, y + 52), radius=9, fill=(26, 38, 60))
    d.rounded_rectangle((980, y + 34, 980 + (400 - i * 120), y + 52), radius=9,
                        fill=(45, 212, 191))

img = img.filter(ImageFilter.GaussianBlur(0.35))
save(img, "today_me_reset_checkpoint_02.jpg")


# ── 03. 체크포인트 3노드 + 종료 플래그 네온 라인 다이어그램 ───────────
img = vertical_gradient((8, 12, 24), (18, 30, 58))
d = ImageDraw.Draw(img)

for _ in range(160):
    x = random.randint(0, W - 1)
    y = random.randint(0, 320)
    s = random.choice((1, 1, 2))
    d.ellipse((x, y, x + s, y + s), fill=(190, 214, 245))

nodes = [(330, 620), (700, 430), (1070, 560)]
flag = (1400, 330)

# 연결선 (글로우)
line_layer = Image.new("RGB", (W, H), (0, 0, 0))
ld = ImageDraw.Draw(line_layer)
path = nodes + [flag]
for a, b in zip(path, path[1:]):
    ld.line((a[0], a[1], b[0], b[1]), fill=(56, 189, 248), width=14)
line_layer = line_layer.filter(ImageFilter.GaussianBlur(16))
img = Image.blend(img, Image.blend(img, line_layer, 0.75), 0.55)
d = ImageDraw.Draw(img)
for a, b in zip(path, path[1:]):
    d.line((a[0], a[1], b[0], b[1]), fill=(186, 230, 253), width=4)

# 노드
for i, (x, y) in enumerate(nodes):
    for r, col in ((78, (16, 44, 70)), (56, (22, 66, 96)), (36, (45, 212, 191))):
        d.ellipse((x - r, y - r, x + r, y + r), fill=col)
    d.ellipse((x - 78, y - 78, x + 78, y + 78), outline=(125, 211, 252), width=3)
    d.line((x - 16, y + 2, x - 4, y + 16), fill=(6, 20, 30), width=6)
    d.line((x - 4, y + 16, x + 18, y - 14), fill=(6, 20, 30), width=6)
    # 노드 번호 눈금
    d.rounded_rectangle((x - 46, y + 104, x + 46 - i * 12, y + 118), radius=7,
                        fill=(74, 110, 160))

# 종료 플래그
fx, fy = flag
d.line((fx, fy - 130, fx, fy + 70), fill=(226, 232, 240), width=6)
d.polygon([(fx, fy - 130), (fx + 150, fy - 92), (fx, fy - 54)], fill=(248, 113, 113))
d.ellipse((fx - 14, fy + 62, fx + 14, fy + 82), fill=(226, 232, 240))

# 바닥 그리드
for i in range(9):
    y = 700 + i * 26
    d.line((0, y, W, y), fill=(24, 40, 66), width=1)

img = img.filter(ImageFilter.GaussianBlur(0.4))
save(img, "today_me_reset_checkpoint_03.jpg")
