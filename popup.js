/**
 * ============================================================
 *  POPUP CONFIG — armeetnarang.com
 *  Edit everything in POPUP_CONFIG below.
 *  The rest is the engine — no need to touch it.
 * ============================================================
 */

const POPUP_CONFIG = {

  /* ── When to show ──────────────────────────────────────── */

  // Delay (in seconds) after page load before the popup appears.
  delaySeconds: 8,

  // If true, show popup when user's mouse moves toward the top of the
  // browser window (exit-intent). Works on desktop only.
  exitIntent: false,

  // Scroll percentage (0–100) of the page to trigger popup.
  // Set to 0 to disable scroll-based trigger.
  scrollTriggerPercent: 0,

  // How many days to wait before showing the popup again to the
  // same visitor. Set to 0 to always show on every visit.
  cooldownDays: 7,

  /* ── What to show ──────────────────────────────────────── */

  // Small label above the heading (leave blank to hide)
  tag: "Free · No commitment",

  // Main heading
  heading: "Not sure if therapy is right for you?",

  // Subtext / body copy
  body: "A free 15-minute discovery call is a chance to ask questions, get a feel for the approach, and decide if you'd like to proceed. No assessment, no pressure.",

  // Buttons — you can have 1 or 2.
  // style: "primary" (dark filled) | "sage" (green filled) | "outline" (bordered)
  // type:  "whatsapp" | "href" | "dismiss"
  buttons: [
    {
      label:         "Book a Free Discovery Call",
      style:         "sage",
      type:          "whatsapp",
      whatsappText:  "Hi. I want a free discovery call",
    },
    {
      label:         "Maybe Later",
      style:         "outline",
      type:          "dismiss",
    },
  ],

  /* ── Look & feel ───────────────────────────────────────── */

  // Show a small decorative illustration in the popup header.
  // true | false
  showIllustration: true,

  // Width of the popup card (CSS value, e.g. "480px" or "min(90vw, 480px)")
  maxWidth: "min(92vw, 480px)",

  /* ── Accessibility ─────────────────────────────────────── */

  // Text for the × close button (screen-reader label)
  closeLabel: "Close popup",

};

/* ============================================================
   ENGINE — edit below only if you know what you're doing
   ============================================================ */
(function () {
  "use strict";

  const STORAGE_KEY = "armeet_popup_last_shown";
  const WA_BASE     = `https://api.whatsapp.com/send?phone=${
    typeof SITE !== "undefined" ? SITE.whatsapp : "918793318765"
  }&text=`;

  /* ── Cooldown check ── */
  function shouldShow() {
    if (!POPUP_CONFIG.cooldownDays) return true;
    let last = null;
    try { last = localStorage.getItem(STORAGE_KEY); } catch (_) { /* storage blocked: just show */ }
    if (!last) return true;
    const daysSince = (Date.now() - Number(last)) / 86400000;
    return daysSince >= POPUP_CONFIG.cooldownDays;
  }

  function markShown() {
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch (_) {}
  }

  /* ── Build DOM ── */
  function buildPopup() {
    const cfg = POPUP_CONFIG;

    /* Overlay */
    const overlay = document.createElement("div");
    overlay.id = "armeet-popup-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", cfg.heading);

    /* Card */
    const card = document.createElement("div");
    card.id = "armeet-popup-card";
    card.style.maxWidth = cfg.maxWidth;

    /* Illustration */
    const illustration = cfg.showIllustration ? `
      <div class="popup-illustration" aria-hidden="true">
        <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="60">
          <ellipse cx="40" cy="30" rx="38" ry="28" fill="var(--warm)" stroke="var(--sand)" stroke-width="1.5"/>
          <path d="M26 30 Q40 18 54 30" stroke="var(--sage)" stroke-width="2" stroke-linecap="round" fill="none"/>
          <circle cx="30" cy="34" r="3" fill="var(--sage-dark)" opacity=".7"/>
          <circle cx="50" cy="34" r="3" fill="var(--sage-dark)" opacity=".7"/>
          <path d="M34 42 Q40 47 46 42" stroke="var(--sage-dark)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
        </svg>
      </div>` : "";

    /* Buttons */
    const btnHTML = cfg.buttons.map(b => {
      if (b.type === "dismiss") {
        return `<button type="button" class="btn btn-${b.style} popup-btn" data-popup-dismiss="true">${b.label}</button>`;
      }
      const href = b.type === "whatsapp"
        ? WA_BASE + encodeURIComponent(b.whatsappText)
        : b.href;
      return `<a href="${href}" class="btn btn-${b.style} popup-btn" target="_blank" rel="noopener">${b.label}</a>`;
    }).join("");

    card.innerHTML = `
      <button class="popup-close" aria-label="${cfg.closeLabel}" data-popup-dismiss="true">×</button>
      ${illustration}
      ${cfg.tag ? `<p class="popup-tag"><span class="popup-dot"></span>${cfg.tag}</p>` : ""}
      <h2 class="popup-heading">${cfg.heading}</h2>
      <p  class="popup-body">${cfg.body}</p>
      <div class="popup-buttons">${btnHTML}</div>
    `;

    overlay.appendChild(card);
    document.body.appendChild(overlay);
    injectStyles();
    return overlay;
  }

  /* ── Show / hide ── */
  let isOpen = false;

  function showPopup() {
    if (isOpen || !shouldShow()) return;
    isOpen = true;
    const previouslyFocused = document.activeElement;
    const overlay = buildPopup();
    markShown();
    document.body.style.overflow = "hidden";

    /* Animate in */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => overlay.classList.add("popup-visible"));
    });

    const focusable = () => Array.from(
      overlay.querySelectorAll('a[href], button:not([disabled])')
    );
    const first = focusable();
    if (first.length) first[0].focus();

    function close() {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      overlay.classList.remove("popup-visible");
      const remove = () => { overlay.remove(); isOpen = false; };
      overlay.addEventListener("transitionend", remove, { once: true });
      setTimeout(remove, 600); // safety net if transitions are disabled
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    }

    function onKey(e) {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      /* keep keyboard focus inside the dialog */
      const items = focusable();
      if (!items.length) return;
      const firstEl = items[0], lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
      else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
    }

    overlay.addEventListener("click", e => {
      if (e.target === overlay || e.target.closest("[data-popup-dismiss]")) close();
    });
    document.addEventListener("keydown", onKey);
  }

  /* ── Triggers ── */
  function attachTriggers() {
    /* Delay */
    if (POPUP_CONFIG.delaySeconds > 0) {
      setTimeout(showPopup, POPUP_CONFIG.delaySeconds * 1000);
    }

    /* Scroll */
    if (POPUP_CONFIG.scrollTriggerPercent > 0) {
      let fired = false;
      window.addEventListener("scroll", function onScroll() {
        if (fired) return;
        const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (pct >= POPUP_CONFIG.scrollTriggerPercent) {
          fired = true;
          window.removeEventListener("scroll", onScroll);
          showPopup();
        }
      }, { passive: true });
    }

    /* Exit intent */
    if (POPUP_CONFIG.exitIntent) {
      let fired = false;
      document.addEventListener("mouseleave", function onLeave(e) {
        if (fired || e.clientY > 20) return;
        fired = true;
        document.removeEventListener("mouseleave", onLeave);
        showPopup();
      });
    }
  }

  /* ── Styles ── */
  function injectStyles() {
    if (document.getElementById("armeet-popup-styles")) return;
    const style = document.createElement("style");
    style.id = "armeet-popup-styles";
    style.textContent = `
      #armeet-popup-overlay {
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(42, 36, 32, 0.55);
        display: flex; align-items: center; justify-content: center;
        padding: 24px;
        opacity: 0; transition: opacity 0.35s ease;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
      }
      #armeet-popup-overlay.popup-visible { opacity: 1; }
      #armeet-popup-overlay.popup-visible #armeet-popup-card {
        transform: translateY(0) scale(1);
      }

      #armeet-popup-card {
        background: var(--cream, #F9F6F1);
        border: 1px solid var(--sand, #E8DFD0);
        border-radius: 24px;
        padding: 40px 36px 36px;
        width: 100%;
        position: relative;
        box-shadow: 0 24px 64px rgba(42,36,32,0.18);
        transform: translateY(20px) scale(0.97);
        transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
        text-align: center;
      }

      .popup-close {
        position: absolute; top: 16px; right: 16px;
        background: none; border: none;
        font-size: 1.4rem; line-height: 1;
        color: var(--text-soft, #9E9088);
        cursor: pointer; padding: 4px 8px;
        border-radius: 8px;
        transition: background 0.2s, color 0.2s;
      }
      .popup-close:hover { background: var(--warm, #F2EDE4); color: var(--text, #2A2420); }

      .popup-illustration { margin-bottom: 20px; }
      .popup-illustration svg { opacity: 0.9; }

      .popup-tag {
        display: inline-flex; align-items: center; gap: 6px;
        background: var(--warm, #F2EDE4); border: 1px solid var(--sand, #E8DFD0);
        padding: 4px 12px; border-radius: 100px;
        font-size: 0.78rem; color: var(--text-mid, #6B5E54);
        margin-bottom: 16px; font-weight: 400;
      }
      .popup-dot {
        width: 6px; height: 6px; border-radius: 50%;
        background: var(--sage, #8FA882); flex-shrink: 0;
        animation: pulse 2.5s ease infinite;
      }

      .popup-heading {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(1.5rem, 4vw, 1.9rem);
        font-weight: 300; line-height: 1.2;
        color: var(--text, #2A2420);
        margin-bottom: 14px;
      }

      .popup-body {
        font-size: 0.95rem; line-height: 1.7;
        color: var(--text-mid, #6B5E54);
        margin-bottom: 28px;
        font-weight: 300;
      }

      .popup-buttons {
        display: flex; flex-direction: column;
        gap: 10px; align-items: center;
      }
      .popup-buttons .popup-btn { width: 100%; justify-content: center; }

      .popup-close:focus-visible,
      .popup-btn:focus-visible { outline: 2px solid var(--sage-dark, #6B8A5E); outline-offset: 2px; }
      .popup-btn { font-family: inherit; }

      @media (min-width: 420px) {
        #armeet-popup-card { padding: 44px 40px 40px; }
      }
      @media (prefers-reduced-motion: reduce) {
        #armeet-popup-overlay, #armeet-popup-card { transition: none; }
        .popup-dot { animation: none; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── Init ── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachTriggers);
  } else {
    attachTriggers();
  }

})();
