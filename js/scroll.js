
document.addEventListener("DOMContentLoaded", ()=>{
  const glowEls = document.querySelectorAll('.glow, .download-btn, .countdown, .news-block');
  window.addEventListener('scroll', ()=>{
    glowEls.forEach(el=>{
      if (el.getBoundingClientRect().top < window.innerHeight-60) el.classList.add('glow');
      else el.classList.remove('glow');
    });
  });
});
