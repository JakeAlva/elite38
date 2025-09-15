
function initCarousel(el, intervalMs=3000){
  const slides = el.querySelectorAll('.slide');
  const dots = el.querySelectorAll('.dot');
  let i=0;if(slides.length===0)return;
  slides[0].classList.add('active'); if(dots[0]) dots[0].classList.add('active');
  setInterval(()=>{ slides[i].classList.remove('active'); if(dots[i]) dots[i].classList.remove('active');
    i=(i+1)%slides.length; slides[i].classList.add('active'); if(dots[i]) dots[i].classList.add('active'); }, intervalMs);
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.carousel').forEach(c=>initCarousel(c,3000));
  document.querySelectorAll('.js-see-more').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id=btn.getAttribute('data-target'); const t=document.getElementById(id); if(!t)return;
      const hidden=getComputedStyle(t).display==='none' || t.classList.contains('hidden');
      t.style.display=hidden?'block':'none'; t.classList.toggle('hidden'); btn.textContent=hidden?'See Less':'See More';
    });
  });
});
