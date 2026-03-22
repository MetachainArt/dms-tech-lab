from PIL import Image, ImageDraw, ImageFilter
import math, os
os.makedirs('public/blog', exist_ok=True)
files = [
    ('today_me_gate_protocol_01.jpg', (20,28,48), (46,204,113)),
    ('today_me_gate_protocol_02.jpg', (18,24,40), (52,152,219)),
    ('today_me_gate_protocol_03.jpg', (28,22,36), (241,196,15)),
]
for idx,(name,bg,accent) in enumerate(files,1):
    w,h=1600,900
    img=Image.new('RGB',(w,h),bg)
    d=ImageDraw.Draw(img)
    for i in range(0,w,40):
        alpha=int(40+30*math.sin(i/120.0+idx))
        col=(min(255,bg[0]+alpha),min(255,bg[1]+alpha),min(255,bg[2]+alpha))
        d.line([(i,0),(i,h)],fill=col,width=1)
    for r in range(120,700,120):
        bbox=(w//2-r,h//2-r,w//2+r,h//2+r)
        c=(min(255,accent[0]+r//10),min(255,accent[1]+r//12),min(255,accent[2]+r//14))
        d.arc(bbox,start=20*idx,end=300+20*idx,fill=c,width=6)
    for y in [220,340,460,580]:
        d.rounded_rectangle((260,y,1340,y+52),radius=18,outline=(180,190,210),width=2)
        d.rectangle((280,y+16,280+idx*180,y+36),fill=accent)
    img=img.filter(ImageFilter.SMOOTH_MORE)
    img.save(os.path.join('public/blog',name),quality=92)
