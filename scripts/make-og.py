#!/usr/bin/env python3
"""Generate public/og.png (1200x630) for Belajar CPNS — brand style: white bg,
ink #131316, warm gradient orange->amber->pink accent. DejaVu Sans (bundled)."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
INK = (19, 19, 22)
MUTED = (115, 115, 115)
ORANGE = (249, 115, 22)
AMBER = (245, 158, 11)
PINK = (236, 72, 153)
WHITE = (255, 255, 255)
BORDER = (229, 229, 229)

FB = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FR = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def font(path, size):
    return ImageFont.truetype(path, size)

img = Image.new("RGB", (W, H), WHITE)
d = ImageDraw.Draw(img)

# Top gradient bar
for x in range(W):
    t = x / W
    if t < 0.5:
        r = int(ORANGE[0] + (AMBER[0] - ORANGE[0]) * (t / 0.5))
        g = int(ORANGE[1] + (AMBER[1] - ORANGE[1]) * (t / 0.5))
        b = int(ORANGE[2] + (AMBER[2] - ORANGE[2]) * (t / 0.5))
    else:
        u = (t - 0.5) / 0.5
        r = int(AMBER[0] + (PINK[0] - AMBER[0]) * u)
        g = int(AMBER[1] + (PINK[1] - AMBER[1]) * u)
        b = int(AMBER[2] + (PINK[2] - AMBER[2]) * u)
    d.line([(x, 0), (x, 10)], fill=(r, g, b))

# Brand row: dark rounded square with a drawn graduation cap + wordmark
d.rounded_rectangle([72, 56, 132, 116], radius=16, fill=INK)
# Mortarboard: diamond + band, drawn (no emoji glyphs in PIL)
cx, cy = 102, 82
d.polygon([(cx - 20, cy), (cx, cy - 10), (cx + 20, cy), (cx, cy + 10)], fill=WHITE)
d.polygon([(cx - 11, cy + 2), (cx + 11, cy + 2), (cx + 11, cy + 10), (cx - 11, cy + 10)], fill=WHITE)
d.line([(cx + 20, cy), (cx + 20, cy + 14)], fill=WHITE, width=3)
d.ellipse([cx + 16, cy + 13, cx + 24, cy + 21], fill=ORANGE)
d.text((148, 86), "Belajar", font=font(FB, 44), fill=INK, anchor="lm")
w = d.textlength("Belajar", font=font(FB, 44))
d.text((148 + w, 86), "CPNS", font=font(FB, 44), fill=ORANGE, anchor="lm")

# Badge
badge = "CPNS 2026  •  GRATIS  •  TANPA LOGIN"
bw = d.textlength(badge, font=font(FB, 24)) + 48
d.rounded_rectangle([72, 168, 72 + bw, 214], radius=23, outline=(254, 215, 170), fill=(255, 247, 237))
d.text((72 + 24, 191), badge, font=font(FB, 24), fill=(194, 65, 12), anchor="lm")

# Headline (gradient simulated: line 1 ink, line 2 orange->pink via two tones)
d.text((72, 258), "Lulus SKD CPNS,", font=font(FB, 84), fill=INK)
d.text((72, 352), "mulai dari sini.", font=font(FB, 84), fill=ORANGE)

# Subcopy
d.text((72, 462), "Materi TWK, TIU, dan TKP  •  Kuis per bab  •  Tryout SKD 110 soal", font=font(FR, 28), fill=MUTED)

# Stats row: three bordered boxes
stats = [("15", "Materi ringkas"), ("150", "Soal kuis"), ("110", "Soal tryout SKD")]
x = 72
for num, label in stats:
    box_w = 330 if label != "Soal tryout SKD" else 360
    d.rounded_rectangle([x, 506, x + box_w, 600], radius=16, outline=BORDER, width=2)
    d.text((x + 24, 520), num, font=font(FB, 38), fill=INK, anchor="la")
    d.text((x + 24, 566), label, font=font(FR, 20), fill=MUTED, anchor="la")
    x += box_w + 20

img.save("/home/hatch/workspace/belajar-cpns/public/og.png")
print("saved public/og.png", img.size)
