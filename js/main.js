/* ══════════════════════════════════════
   ANCÉS — Main JS
══════════════════════════════════════ */

// ── NAVBAR SCROLL ──
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });
}

// ── MOBILE MENU ──
const burger   = document.getElementById("burger");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");
if (burger && mobileMenu) {
  burger.addEventListener("click", () => mobileMenu.classList.add("open"));
  menuClose.addEventListener("click", () => mobileMenu.classList.remove("open"));
  mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));
}

// ── REVEAL ON SCROLL ──
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}
document.addEventListener("DOMContentLoaded", initReveal);

// ── FEATURED PRODUCTS (homepage) ──
const featuredGrid = document.getElementById("featuredGrid");
if (featuredGrid && typeof PRODUCTS !== "undefined") {
  const featured = PRODUCTS.filter(p => p.featured);
  featuredGrid.innerHTML = featured.map(productCardHTML).join("");
}

// ── NEWSLETTER FORM ──
document.querySelectorAll(".newsletter__form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("button");
    btn.textContent = "Subscrito ✓";
    btn.style.background = "var(--wood)";
    form.querySelector("input").value = "";
    setTimeout(() => { btn.textContent = "Subscrever"; btn.style.background = ""; }, 3000);
  });
});
