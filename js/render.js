/* ============================================================
   PLANCKS IAPS HONDURAS — Dynamic Renderer (Committee & Sponsors)
   ============================================================ */

(function () {
  'use strict';

  /* ── Committee ─────────────────────────────────────────── */
  function renderCommittee() {
    const container = document.getElementById('committeeGrid');
    if (!container || !PLANCKS_DATA) return;

    container.innerHTML = PLANCKS_DATA.committee.map(m => {
      const imgTag = `<img src="${m.img}" alt="${m.name}" class="member-photo" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`;
      const fallback = `<div class="member-avatar" style="background:${m.color};display:none;">${m.initials}</div>`;
      return `
        <div class="member-card" role="listitem">
          <div class="member-img-wrapper">
            ${imgTag}
            ${fallback}
          </div>
          <div class="member-info">
            <div class="member-name">${m.name}</div>
            <div class="member-role">${m.role}</div>
            <div class="member-affil">${m.affiliation}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* ── Sponsors ──────────────────────────────────────────── */
  function renderSponsors() {
    const container = document.getElementById('sponsorsTiers');
    if (!container || !PLANCKS_DATA) return;

    const tiers = [
      { key: 'platinum', labelKey: 'sponsors-tier-1', cols: 2 },
      { key: 'gold',     labelKey: 'sponsors-tier-2', cols: 3 },
      { key: 'silver',   labelKey: 'sponsors-tier-3', cols: 5 },
    ];

    container.innerHTML = tiers.map(tier => {
      const items = PLANCKS_DATA.sponsors.filter(s => s.tier === tier.key);
      if (!items.length) return '';

      return `
        <div class="sponsor-tier-group">
          <div class="sponsor-tier-label" data-lang="${tier.labelKey}">${tier.labelKey === 'sponsors-tier-1' ? 'Platinum' : tier.labelKey === 'sponsors-tier-2' ? 'Gold' : 'Silver & Partners'}</div>
          <div class="sponsor-row" data-cols="${tier.cols}">
            ${items.map(s => {
              const fallbackName = s.name || 'Sponsor';
              return `
                <div class="sponsor-slot">
                  <img src="${s.img}" alt="${fallbackName}" class="sponsor-logo" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                  <div class="sponsor-placeholder" style="display:none;">${fallbackName}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      renderCommittee();
      renderSponsors();
    });
  } else {
    renderCommittee();
    renderSponsors();
  }

})();
