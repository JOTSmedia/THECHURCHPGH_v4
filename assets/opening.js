/* Church opening. Progress tracks the local photographs and display fonts.
   No WebGL, remote runtime or permanent loading gate. */
export function initOpening() {
  const $ = selector => document.querySelector(selector);
  const dialog = $('#opening');
  const photograph = $('#opening-image');
  if (!dialog?.showModal || !photograph || dialog.dataset.openingReady === 'true') return;
  dialog.dataset.openingReady = 'true';
  const percent = $('#opening-percent'), fill = $('#opening-fill');
  const progress = $('#opening-progress'), status = $('#opening-status');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const paused = () => reduced.matches || document.documentElement.classList.contains('motion-paused');
  const MINIMUM = 1800, EXIT = 500, DEADLINE = 4500;
  let generation = 0, current = null;
  const atTop = () => scrollTo({top:0,left:0,behavior:'instant'});
  const valid = record => current === record && record.generation === generation && dialog.open && !record.leaving;
  photograph.addEventListener('error', () => {
    if (photograph.dataset.fallback === 'true') return;
    photograph.dataset.fallback = 'true';
    photograph.src = './assets/images/cathedral-1280.webp';
    photograph.alt = 'The timber cathedral ceiling at The Church Recording Studio';
  });
  function paint(value, record = current) {
    if (!record) return;
    record.shown = Math.max(0,Math.min(100,value));
    const integer = Math.floor(record.shown);
    if (integer === record.painted) return;
    record.painted = integer;
    percent.textContent = `${integer}%`;
    fill.style.transform = `scaleX(${integer / 100})`;
    progress.setAttribute('aria-valuenow',String(integer));
    dialog.style.setProperty('--opening-light',String(.35 + integer * .0065));
  }
  function leave(reason = 'skip') {
    const record = current;
    if (!record || !valid(record)) return;
    record.leaving = true;
    clearTimeout(record.deadline);cancelAnimationFrame(record.frame);
    if (reason === 'ready') paint(100,record);
    status.textContent = reason === 'ready' ? 'Welcome to The Church.' : 'Entering the studio.';
    atTop();dialog.classList.add('is-leaving');
    record.exit = setTimeout(() => { if (current === record && dialog.open) dialog.close(); },paused()?0:EXIT);
  }
  function open(replay = false) {
    if (dialog.open) return;
    generation++;
    const record = {generation,shown:0,painted:-1,complete:0,target:0,frame:0,leaving:false,start:performance.now(),last:performance.now(),returnFocus:replay?$('#hero-title'):null};
    current = record;
    if (record.returnFocus) record.returnFocus.tabIndex = -1;
    atTop();dialog.classList.remove('is-leaving');
    document.documentElement.classList.add('opening-active');
    status.textContent = 'Opening the studio.';
    paint(0,record);dialog.showModal();
    const resources = [
      () => photograph.decode?.(),
      () => $('.hero-photo img')?.decode?.(),
      () => document.fonts?.load('400 24px "Libre Caslon Display"'),
      () => document.fonts?.load('400 16px Chivo'),
      () => document.fonts?.load('900 19px Chivo')
    ];
    function settled() {
      if (!valid(record)) return;
      record.complete++;record.target=record.complete/resources.length*100;
    }
    resources.forEach(resource => Promise.resolve().then(resource).then(settled,settled));
    function tick(now) {
      record.frame=0;if(!valid(record))return;
      const delta=Math.max(0,Math.min(80,now-record.last));record.last=now;
      const timeLimit=paused()?100:Math.min(100,(now-record.start)/MINIMUM*100);
      const goal=Math.min(record.target,timeLimit);
      paint(paused()?goal:Math.min(goal,record.shown+delta*.075),record);
      if(record.complete===resources.length&&record.shown>=100){leave('ready');return;}
      record.frame=requestAnimationFrame(tick);
    }
    record.frame=requestAnimationFrame(tick);
    record.deadline=setTimeout(()=>leave(record.complete===resources.length?'ready':'timeout'),paused()?1400:DEADLINE);
  }
  dialog.addEventListener('cancel',event=>{event.preventDefault();leave('skip');});
  $('#skip-opening')?.addEventListener('click',()=>leave('skip'));
  dialog.addEventListener('close',()=>{
    const record=current;if(!record)return;
    clearTimeout(record.deadline);clearTimeout(record.exit);cancelAnimationFrame(record.frame);
    generation++;current=null;
    document.documentElement.classList.remove('opening-active');
    atTop();requestAnimationFrame(atTop);
    if(record.returnFocus?.isConnected)record.returnFocus.focus({preventScroll:true});
  });
  const replay=$('#replay-opening');
  if(replay){replay.hidden=false;replay.addEventListener('click',()=>open(true));}
  const query=new URLSearchParams(location.search);
  const refresh=performance.getEntriesByType('navigation')[0]?.type==='reload';
  if(refresh||query.get('opening')==='play'||(!location.hash&&!query.has('room')&&query.get('opening')!=='skip'))open();
  return {open,skip:()=>leave('skip')};
}
initOpening();
