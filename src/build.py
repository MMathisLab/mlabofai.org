import re, sys
import os
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P=os.path.join(ROOT,'src','partials')+'/'; OUT=ROOT+'/'
head=open(P+'head.html').read(); foot=open(P+'foot.html').read()
pages={
 'people.html':('People · M-Lab of Adaptive Intelligence','Meet the M-Lab team at EPFL: Prof. Mackenzie Weygandt Mathis, postdocs, PhD students, engineers and alumni.','people.html'),
 'publications.html':('Publications · M-Lab of Adaptive Intelligence','Publications from the M-Lab of Adaptive Intelligence at EPFL, across machine learning, computer vision and neuroscience.','publications.html'),
 'news.html':('News · M-Lab of Adaptive Intelligence','News from the M-Lab of Adaptive Intelligence: papers, awards, grants and people since 2017.','news.html'),
 'join.html':('Join us · M-Lab of Adaptive Intelligence','Open positions at the M-Lab of Adaptive Intelligence at EPFL: PhD, postdoc, engineering, master\'s and internship opportunities.','join.html'),
 'software.html':('Software · M-Lab of Adaptive Intelligence','Open-source software from the M-Lab of Adaptive Intelligence at EPFL: DeepLabCut, CEBRA, LLaVAction, AmadeusGPT, FMPose3D, CellSeg3D and more.','software.html'),
 'deeplabcut.html':('DeepLabCut · M-Lab of Adaptive Intelligence','DeepLabCut: markerless 2D and 3D pose estimation for any species, with the SuperAnimal Model Zoo. Open source, from the M-Lab of Adaptive Intelligence at EPFL.','deeplabcut.html'),
 '404.html':('Page not found · M-Lab of Adaptive Intelligence','Page not found.','404.html'),
}
for f,(title,desc,path) in pages.items():
    h=head
    h=re.sub(r'<title>.*?</title>',f'<title>{title}</title>',h)
    h=re.sub(r'(<meta name="description" content=")[^"]*',r'\g<1>'+desc.replace('\\','\\\\'),h)
    h=re.sub(r'(<meta property="og:description" content=")[^"]*',r'\g<1>'+desc.replace('\\','\\\\'),h)
    h=re.sub(r'(<meta property="og:title" content=")[^"]*',r'\g<1>'+title,h)
    h=h.replace('href="https://mlabofai.org/"',f'href="https://mlabofai.org/{path}"').replace('content="https://mlabofai.org/"',f'content="https://mlabofai.org/{path}"')
    h=h.replace(f'<a href="{f}">',f'<a href="{f}" aria-current="page">')
    body=open(P+f).read()
    html=h+body+foot
    if f=='404.html':
        html=re.sub(r'(href|src)="(?!https?:|/|#|mailto:)(\./)?',r'\1="/',html)
        html=html.replace('<meta property="og:url"','<meta name="robots" content="noindex">\n  <meta property="og:url"')
    open(OUT+f,'w').write(html)
    print('wrote',f)
