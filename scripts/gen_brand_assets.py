"""브랜드 고정 자산 생성 (Paperfolio 팔레트 기준).

실행: python scripts/gen_brand_assets.py

출력
  public/logo.png       512x512  — schema.org Organization.logo 용
  public/og-default.png 1200x630 — 기본 Open Graph / Twitter 카드

기존 og-image.png 는 1024x1024 정사각형이라 og:image 규격(1.91:1)과
맞지 않아 카카오톡·슬랙 미리보기에서 잘렸다. 이 스크립트가 규격에 맞는
대체본을 만든다.
"""

import os

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public")

BG = (247, 243, 234)        # paperfolio-bg
SURFACE = (255, 253, 248)   # paperfolio-surface
TEXT = (31, 41, 55)         # paperfolio-text
MUTED = (107, 114, 128)     # paperfolio-text-muted
CORAL = (201, 111, 74)      # accent-coral
BLUE = (47, 93, 124)        # accent-blue
YELLOW = (210, 167, 95)     # accent-yellow

FONT_DIR = os.path.join(os.environ.get("SystemRoot", r"C:\Windows"), "Fonts")


def font(name, size):
    return ImageFont.truetype(os.path.join(FONT_DIR, name), size)


def center_text(d, box, text, fnt, fill):
    x0, y0, x1, y1 = box
    left, top, right, bottom = d.textbbox((0, 0), text, font=fnt)
    d.text(((x0 + x1 - (right - left)) / 2 - left,
            (y0 + y1 - (bottom - top)) / 2 - top), text, font=fnt, fill=fill)


# ── logo.png : 512x512 모노그램 ─────────────────────────────────────
S = 512
logo = Image.new("RGB", (S, S), BG)
d = ImageDraw.Draw(logo)

d.rounded_rectangle((40, 40, S - 40, S - 40), radius=44, fill=SURFACE,
                    outline=TEXT, width=4)
d.line((40, 150, S - 40, 150), fill=TEXT, width=3)

center_text(d, (40, 150, S - 40, 400), "R", font("georgiab.ttf" if os.path.exists(
    os.path.join(FONT_DIR, "georgiab.ttf")) else "arialbd.ttf", 220), TEXT)

center_text(d, (40, 92, S - 40, 150), "DMS.LABS", font("arialbd.ttf", 30), MUTED)

for i, col in enumerate((CORAL, YELLOW, BLUE)):
    d.rounded_rectangle((176 + i * 56, 410, 216 + i * 56, 422), radius=6, fill=col)

logo.save(os.path.join(OUT, "logo.png"), optimize=True)
print("saved public/logo.png", os.path.getsize(os.path.join(OUT, "logo.png")) // 1024, "KB")


# ── og-default.png : 1200x630 ──────────────────────────────────────
W, H = 1200, 630
og = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(og)

d.rectangle((0, 0, W, 10), fill=CORAL)
d.rounded_rectangle((48, 48, W - 48, H - 48), radius=28, fill=SURFACE,
                    outline=(31, 41, 55), width=3)

kr_bold = font("malgunbd.ttf", 62)
kr_reg = font("malgun.ttf", 27)
label = font("arialbd.ttf", 22)

d.text((104, 116), "DMS.LABS", font=label, fill=MUTED)
d.line((104, 158, 268, 158), fill=CORAL, width=4)

d.text((104, 204), "자동화 · 설계 · 교육", font=kr_bold, fill=TEXT)
d.text((104, 300), "복잡한 일은 줄이고, 필요한 건 직접 만듭니다.", font=kr_reg, fill=MUTED)

chips = ("AI 자동화", "광통신 · FTTx", "3D 설계", "실무형 교육")
x = 104
chip_font = font("malgun.ttf", 22)
for i, chip in enumerate(chips):
    left, top, right, bottom = d.textbbox((0, 0), chip, font=chip_font)
    w = right - left + 44
    col = (CORAL, BLUE, YELLOW, MUTED)[i]
    d.rounded_rectangle((x, 390, x + w, 440), radius=25, outline=col, width=2)
    d.text((x + 22 - left, 404 - top), chip, font=chip_font, fill=col)
    x += w + 16

d.text((104, 502), "dmssolution.co.kr", font=font("arial.ttf", 24), fill=MUTED)

# 우측 기하 장식
d.arc((880, 150, 1120, 390), start=0, end=360, fill=BLUE, width=3)
d.arc((930, 200, 1070, 340), start=0, end=360, fill=YELLOW, width=3)
d.line((1000, 150, 1000, 390), fill=CORAL, width=3)
d.line((880, 270, 1120, 270), fill=CORAL, width=3)

og.save(os.path.join(OUT, "og-default.png"), optimize=True)
print("saved public/og-default.png",
      os.path.getsize(os.path.join(OUT, "og-default.png")) // 1024, "KB")
