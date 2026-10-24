let topZ = 10;

document.addEventListener('click', e => {
  const close = e.target.closest('.popupclose');
  if (close) close.closest('.popup').hidden = true;
});

document.addEventListener('pointerdown', e => {
  if (e.target.closest('.popupclose')) return;

  const header = e.target.closest('.popupheader');
  if (!header) return;
  const el = header.parentElement;
  el.style.zIndex = ++topZ;
  el.classList.add('dragging')

  const t = getComputedStyle(el).translate;
  const [x = 0, y = 0] = t === 'none' ? [] : t.split(' ').map(parseFloat);
  const startX = e.clientX, startY = e.clientY;

  header.setPointerCapture(e.pointerId);
  const move = e => {
    el.style.translate = `${x + e.clientX - startX}px ${y + e.clientY - startY}px`;
  };
  header.addEventListener('pointermove', move);
  header.addEventListener('lostpointercapture', () => {
    header.removeEventListener('pointermove', move);
    el.classList.remove('dragging');
  }, { once: true });
});