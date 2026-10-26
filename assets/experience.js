/* Local Instagram retry, ambient reading motion and native-scroll photography. */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const paused = () => reduced.matches || document.documentElement.classList.contains('motion-paused');
  const instagram = $('.instagram-frame');
  const reloadInstagram = $('#reload-instagram');
  if (instagram && reloadInstagram) {
    reloadInstagram.hidden = false;
    let reloadTimer;
    instagram.addEventListener('load', () => { if (reloadInstagram.disabled) { clearTimeout(reloadTimer); reloadInstagram.disabled=false; $('#instagram-status').textContent='Profile view reloaded. Use Open profile if Instagram is unavailable.'; } });
    reloadInstagram.addEventListener('click', () => {
      reloadInstagram.disabled=true; clearTimeout(reloadTimer);
      reloadTimer=setTimeout(() => { reloadInstagram.disabled=false; $('#instagram-status').textContent='Instagram is taking longer to respond. Use Open profile or try again.'; },10000);
      instagram.src = 'https://www.instagram.com/thechurchrecordingstudio/embed/';
      $('#instagram-status').textContent = 'Reloading Instagram. If the feed is unavailable, use Open profile.';
    });
  }
  // Ambient reading motion yields immediately to visitor activity.
  {
    let timer, frame = 0, running = false, last = 0, position = 0, written = 0, keyboard = false, pressed = false;
    const speed = 56.4;
    const blocked = () => {
      const active = document.activeElement;
      return pressed || paused() || document.hidden || !!document.querySelector('dialog[open],#navigation.is-open') ||
        !!active?.matches('input,textarea,select,iframe,canvas,[contenteditable="true"]') ||
        (keyboard && !!active?.closest('a,button,summary')) ||
        !!document.querySelector('iframe:hover') || getSelection()?.isCollapsed === false;
    };
    const stop = () => { if (frame) cancelAnimationFrame(frame); frame = 0; running = false; };
    const arm = () => {
      clearTimeout(timer); stop();
      if (!paused() && !document.hidden) timer = setTimeout(start, 12000);
    };
    const tick = now => {
      frame = 0;
      if (blocked()) { arm(); return; }
      const end = Math.max(0, document.documentElement.scrollHeight - innerHeight);
      if (position >= end - 1) { stop(); return; }
      position = Math.min(end, position + Math.min(50, now - last) / 1000 * speed); last = now;
      scrollTo({top:position,left:0,behavior:'instant'}); written = scrollY;
      frame = requestAnimationFrame(tick);
    };
    function start() {
      if (blocked()) { arm(); return; }
      position = scrollY; written = scrollY; last = performance.now(); running = true;
      frame = requestAnimationFrame(tick);
    }
    addEventListener('pointerdown', () => { keyboard = false; pressed = true; arm(); }, {passive:true});
    addEventListener('pointerup', () => { pressed = false; arm(); }, {passive:true});
    addEventListener('pointercancel', () => { pressed = false; arm(); }, {passive:true});
    addEventListener('blur', () => { pressed = false; arm(); });
    addEventListener('pointermove', arm, {passive:true});
    addEventListener('wheel', arm, {passive:true});
    addEventListener('touchstart', arm, {passive:true});
    addEventListener('keydown', () => { keyboard = true; arm(); });
    addEventListener('scroll', () => { if (!running || Math.abs(scrollY - written) > 3) arm(); }, {passive:true});
    document.addEventListener('focusin', arm);
    document.addEventListener('selectionchange', arm);
    document.addEventListener('visibilitychange', arm);
    document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('close', arm));
    new MutationObserver(arm).observe(document.documentElement, {attributes:true,attributeFilter:['class']});
    reduced.addEventListener('change', arm); arm();
  }

  // Small native-scroll travel through the actual architecture; no idle animation loop.
  const hero = $('.sanctuary'); let visible = true, frame;
  const paintHero = () => { frame = 0; const y = paused() || innerWidth <= 700 ? 0 : Math.min(innerHeight, scrollY); $('.hero-photo').style.transform = `scale(${1 + y / innerHeight * .075})`; hero.style.setProperty('--title-travel',`${-y * 1.05}px`); };
  const scroll = () => { if (visible && !frame) frame = requestAnimationFrame(paintHero); };
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) scroll(); }).observe(hero);
    addEventListener('scroll', scroll, {passive:true}); reduced.addEventListener('change', paintHero);
    new MutationObserver(paintHero).observe(document.documentElement, {attributes:true, attributeFilter:['class']});
  }
})();
