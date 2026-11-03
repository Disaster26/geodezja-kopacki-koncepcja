(function(){
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  function close(){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Otwórz menu')}
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu')});
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close)});

  // dolny pasek: dopiero po przewinięciu za przycisk w hero, chowany przy kontakcie
  var mob=document.getElementById('mob'),cta=document.getElementById('heroCta'),kontakt=document.getElementById('kontakt');
  var pastCta=false,inContact=false;
  function upd(){mob.classList.toggle('widac',pastCta&&!inContact)}
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(e){pastCta=!e[0].isIntersecting&&e[0].boundingClientRect.top<0;upd()}).observe(cta);
    new IntersectionObserver(function(e){inContact=e[0].isIntersecting;upd()},{threshold:.1}).observe(kontakt);
  }

  // formularz (podgląd - nic nie wysyła)
  var f=document.getElementById('form'),m=document.getElementById('formMsg');
  f.addEventListener('submit',function(e){e.preventDefault();m.hidden=false;m.scrollIntoView({block:'nearest'})});
})();
