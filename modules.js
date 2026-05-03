/* ═══════════════════════════════════════════════════════════
   MODULES.JS — Tradebridge Digital  •  Main Module Controller
   ═══════════════════════════════════════════════════════════ */

const TB_STEPS = [1, 2, 5]; // Steps owned by Tradebridge

function openModule(n) {
  // Deselect all other steps
  TB_STEPS.forEach(s => {
    const el = document.getElementById('jstep-' + s);
    if (el) el.classList.remove('j-sel');
  });

  // Select clicked step
  const step = document.getElementById('jstep-' + n);
  if (step) step.classList.add('j-sel');

  // Open corresponding modal
  const ov = document.getElementById('mod-ov-' + n);
  if (ov) ov.classList.add('open');

  document.body.style.overflow = 'hidden';
}

function closeModule(n) {
  const ov = document.getElementById('mod-ov-' + n);
  if (ov) ov.classList.remove('open');

  // Deselect step
  const step = document.getElementById('jstep-' + n);
  if (step) step.classList.remove('j-sel');

  document.body.style.overflow = '';
}

// Close on overlay click
function modOvClick(e, n) {
  if (e.target === e.currentTarget) closeModule(n);
}

// ESC key closes any open module
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Escape') return;
  TB_STEPS.forEach(n => {
    const ov = document.getElementById('mod-ov-' + n);
    if (ov && ov.classList.contains('open')) closeModule(n);
  });
});
