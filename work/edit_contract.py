import fitz
from pathlib import Path

SOURCE = Path(r"C:\Users\Gafur\Desktop\Urganch tumani\Abdullayev Mirjahon.pdf")
OUTPUT = Path(r"C:\Users\Gafur\Documents\Codex\2026-06-21\men\outputs\Abdullayev Mirjahon - tahrirlangan.pdf")
FONT = Path(r"C:\Windows\Fonts\segoepr.ttf")

doc = fitz.open(SOURCE)
page = doc[0]

# The source is a scanned form. These rectangles cover only the handwritten
# values inside the first data row and the repeated grand total.
blank_areas = [
    fitz.Rect(98, 270.8, 221, 296),   # course name
    fitz.Rect(225, 270.8, 327, 304.4),  # duration
    fitz.Rect(331, 270.8, 429, 296),  # monthly price
    fitz.Rect(433, 270.8, 538, 296),  # row total
    fitz.Rect(433, 343, 538, 356),  # grand total
]

paper = (0.985, 0.985, 0.975)
for area in blank_areas:
    page.draw_rect(area, color=None, fill=paper, overlay=True)

# Restore the row separator covered while removing low handwritten strokes.
page.draw_line(fitz.Point(97, 287.6), fitz.Point(539, 287.6), color=(0.15, 0.15, 0.15), width=0.65, overlay=True)
page.draw_line(fitz.Point(223, 304.5), fitz.Point(329, 304.5), color=(0.15, 0.15, 0.15), width=0.65, overlay=True)

page.insert_font(fontname="SegoePrint", fontfile=str(FONT))
page.insert_text(
    fitz.Point(101, 283.8),
    "Al-Xorazmiy vorislari",
    fontname="SegoePrint",
    fontsize=8.4,
    color=(0.08, 0.10, 0.28),
    overlay=True,
)

doc.save(OUTPUT, garbage=4, deflate=True)
doc.close()

check = fitz.open(OUTPUT)
pix = check[0].get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
pix.save(r"C:\Users\Gafur\Documents\Codex\2026-06-21\men\work\edited-page-1.png")
check.close()
print(OUTPUT)
