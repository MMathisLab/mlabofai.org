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
AREAS={'cv':('Computer vision','markerless pose estimation, animal foundation models, 3D pose and action understanding'),
 'bio':('Biomechanics','musculoskeletal models across species and body-constrained 3D pose'),
 'neuro':('Neural dynamics','how the brain controls the body and adapts, with consistent latent embeddings of neural and behavioral data'),
 'ml':('Machine learning','consistent, robust and causal representations')}
for k,(n,d) in AREAS.items():
    open(P+f'research-{k}.html','w').write(open(P+'research.html').read().replace('__AREA__',k))
    pages[f'research-{k}.html']=(f'{n} · Research · M-Lab of Adaptive Intelligence',f'{n} at the M-Lab of Adaptive Intelligence, EPFL: {d}. People, key projects and papers.',f'research-{k}.html')

# Cache-busting: tag CSS/JS links with a short hash of their contents so browsers
# pick up new versions right after a push (GitHub Pages caches files for 10 minutes).
import hashlib, glob
def _v(f): return hashlib.md5(open(ROOT+'/'+f,'rb').read()).hexdigest()[:8]
VER={f:_v(f) for f in ['assets/css/style.css','assets/js/data.js','assets/js/main.js']}
def bust(html):
    for f,v in VER.items():
        html=re.sub(r'(["\'])(/?)'+re.escape(f)+r'(\?v=[0-9a-f]+)?(["\'])', lambda m: m.group(1)+m.group(2)+f+'?v='+v+m.group(4), html)
    return html
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
    open(OUT+f,'w').write(bust(html))
    print('wrote',f)

# index.html is edited by hand; just refresh its asset versions
_idx=open(OUT+'index.html').read()
open(OUT+'index.html','w').write(bust(_idx))
print('versioned', VER)
