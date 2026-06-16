# PLANCKS IAPS Honduras — Official Website

## Stack
- Pure HTML5 + CSS3 + Vanilla JS
- Zero dependencies, zero build step
- Google Fonts (DM Serif Display · Lora · Barlow Condensed)
- Ready for GitHub Pages

## Files
```
plancks-honduras/
├── index.html          ← Main page (all 9 sections)
├── css/
│   └── style.css       ← Full design system + all component styles
├── js/
│   └── main.js         ← Nav, scroll-reveal, tabs, FAQ accordion
├── assets/             ← Add logo, images here
│   ├── logo.png        ← Replace nav-logo placeholder
│   └── ...
└── README.md
```

## Setup for GitHub Pages
1. Push folder contents to a GitHub repo
2. Settings → Pages → Source: main branch / root
3. Site live at: https://[username].github.io/[repo]/

## Replace Placeholders
- `assets/logo.png` — swap the SVG nav placeholder with: `<img src="assets/logo.png" alt="PLANCKS Honduras">`
- Committee member names/roles/affiliations
- Venue name and photos
- Exact event dates
- Contact email address
- Sponsor logos (replace `.sponsor-slot` content with `<img>` tags)
- Honduras city photographs (`.img-placeholder` → `<img>` tags)

## Design Tokens (css/style.css :root)
All colours, fonts, and spacing live in CSS custom properties.
To update the palette, edit only the `:root` block.

## Scaling to Multi-Page
When ready to add pages (Schedule, Sponsors, etc.):
1. Duplicate `index.html`
2. Remove non-relevant sections
3. Update `<nav>` links to relative paths
4. The CSS system works across all pages with no changes

## Typography
| Role        | Font               | Use                         |
|-------------|--------------------|-----------------------------|
| Display     | DM Serif Display   | Headlines, hero title        |
| Body        | Lora               | Paragraphs, descriptions     |
| Data / UI   | Barlow Condensed   | Labels, badges, nav, numbers |


  <!-- ═══════════════════ COMMITTEE ════════════════════════════ -->
  <section id="committee" class="section-pad" aria-labelledby="committee-title">
    <div class="container">
      <p class="eyebrow reveal">People</p>
      <h2 id="committee-title" class="display-md reveal reveal-delay-1" style="margin-top:0.5rem;max-width:480px;">Organising Committee</h2>
      <p class="reveal reveal-delay-2" style="color:var(--ink-muted);margin-top:0.75rem;max-width:580px;font-size:1rem;">
        PLANCKS Honduras is organised by IAPS Honduras — a committee of physics students from Honduran universities, supported by IAPS internationally.
      </p>

      <div class="committee-grid reveal reveal-delay-3" role="list">
        <div class="member-card" role="listitem">
          <div class="member-avatar" aria-hidden="true" style="background:var(--scarlet);">HC</div>
          <div class="member-name">[Name Placeholder]</div>
          <div class="member-role">General Chair</div>
          <div class="member-affil">Universidad de Honduras</div>
        </div>
        <div class="member-card" role="listitem">
          <div class="member-avatar" aria-hidden="true" style="background:var(--amber);">SC</div>
          <div class="member-name">[Name Placeholder]</div>
          <div class="member-role">Scientific Committee</div>
          <div class="member-affil">Universidad Nacional Autónoma</div>
        </div>
        <div class="member-card" role="listitem">
          <div class="member-avatar" aria-hidden="true" style="background:var(--glyph-mid);color:var(--cream);">LC</div>
          <div class="member-name">[Name Placeholder]</div>
          <div class="member-role">Logistics Chair</div>
          <div class="member-affil">IAPS Honduras</div>
        </div>
        <div class="member-card" role="listitem">
          <div class="member-avatar" aria-hidden="true" style="background:var(--blue-p);">CM</div>
          <div class="member-name">[Name Placeholder]</div>
          <div class="member-role">Communications</div>
          <div class="member-affil">Universidad Pedagógica</div>
        </div>
        <div class="member-card" role="listitem">
          <div class="member-avatar" aria-hidden="true" style="background:var(--olive);">SP</div>
          <div class="member-name">[Name Placeholder]</div>
          <div class="member-role">Sponsorship</div>
          <div class="member-affil">IAPS Honduras</div>
        </div>
        <div class="member-card" role="listitem">
          <div class="member-avatar" aria-hidden="true" style="background:var(--scarlet-light);">CP</div>
          <div class="member-name">[Name Placeholder]</div>
          <div class="member-role">Cultural Programme</div>
          <div class="member-affil">Universidad de Honduras</div>
        </div>
      </div>
    </div>
  </section>
