(function(){var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var bar=$('#bar'),up=$('.top');
function sc(){var h=document.documentElement,p=h.scrollTop/((h.scrollHeight-h.clientHeight)||1);if(bar)bar.style.width=(p*100)+'%';if(up)up.classList.toggle('on',h.scrollTop>700)}
addEventListener('scroll',sc,{passive:true});sc();
if(up)up.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
var bg=$('#burger'),mn=$('#menu');if(bg)bg.onclick=function(){var o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
$$('#menu a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('open')})});
function count(el){var t=parseFloat(el.dataset.n),d=+el.dataset.d||0,s=el.dataset.s||'',st=performance.now();(function f(n){var k=Math.min((n-st)/1400,1),v=t*(1-Math.pow(1-k,3));el.textContent=v.toFixed(d)+s;if(k<1)requestAnimationFrame(f)})(st)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);$$('[data-n]',e.target).forEach(count)}})},{threshold:.15});
$$('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
$$('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')})});
var art=$('#art img');if(art&&matchMedia('(pointer:fine)').matches){addEventListener('pointermove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;art.style.transform='rotateY('+x*14+'deg) rotateX('+(-y*14)+'deg)'})}
var lb=$('#lb');if(lb){var im=$('img',lb),bs=$$('#rail button'),ix=0;
function show(i){ix=(i+bs.length)%bs.length;var s=$('img',bs[ix]);im.src=s.src;im.alt=s.alt;lb.hidden=false}
bs.forEach(function(b,i){b.onclick=function(){show(i)}});
$('.x',lb).onclick=function(){lb.hidden=true};$('.p',lb).onclick=function(){show(ix-1)};$('.n',lb).onclick=function(){show(ix+1)};
lb.onclick=function(e){if(e.target===lb)lb.hidden=true};
addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')show(ix-1);if(e.key==='ArrowRight')show(ix+1)})}
var cp=$('#copy');if(cp)cp.onclick=function(){var t=$('#sum').textContent;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){cp.textContent='Copied!'},function(){cp.textContent='Select it'});setTimeout(function(){cp.textContent='Copy'},1800)};
var sh=$('#share');if(sh)sh.onclick=function(){var d={title:document.title,url:location.href.split('#')[0]};if(navigator.share)navigator.share(d).catch(function(){});else if(navigator.clipboard){navigator.clipboard.writeText(d.url);sh.textContent='Link copied!';setTimeout(function(){sh.textContent='Share the game'},1800)}};
var links=$$('#menu a[href*="#"],.toc a'),secs=links.map(function(a){var id=a.getAttribute('href').split('#')[1];return id?$('#'+id):null});
var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a,i){a.classList.toggle('on',secs[i]===e.target)})})},{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(function(s){if(s)spy.observe(s)});})();
