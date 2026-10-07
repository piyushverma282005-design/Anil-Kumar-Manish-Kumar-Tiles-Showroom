/**
 * ==============================================================================
 * ANIL KUMAR MANISH KUMAR TILES SHOWROOM - FRONTEND APP
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  setYear();
  renderCategories();
  renderBrands();
  renderFeatures();
  setupMobileNav();
}

function setYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}

function renderCategories() {
  const container = document.getElementById("categories-grid");
  if (!container) return;

  container.innerHTML = productCategories.map(cat => {
    const waText = encodeURIComponent(`Hello, I am interested in ${cat.name}.`);
    const waLink = `https://wa.me/919350444783?text=${waText}`;

    return `
      <div class="category-card">
        <div class="card-img-wrapper">
          <img src="${cat.image}" alt="${cat.name}" loading="lazy">
        </div>
        <div class="card-body">
          <h3 class="card-title">${cat.name}</h3>
          <p class="card-description">${cat.description}</p>
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-card-wa">
            <i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function renderBrands() {
  const container = document.getElementById("brands-grid");
  if (!container) return;

  container.innerHTML = showroomBrands.map(brand => {
    if (brand.logoType === "image") {
      return `
        <div class="brand-badge-card">
          <div class="brand-badge-logo">
            <img src="${brand.logoSrc}" alt="${brand.logoAlt || brand.name}" loading="lazy">
          </div>
        </div>
      `;
    }
    return `
      <div class="brand-badge-card">
        <div class="brand-badge-name">${brand.name}</div>
        <div style="font-size: 0.75rem; color: #666; margin-top: 5px;">${brand.category}</div>
      </div>
    `;
  }).join("");
}

function renderFeatures() {
  const container = document.getElementById("about-features-container");
  if (!container) return;

  container.innerHTML = showroomFeatures.map(item => {
    return `
      <div class="feature-item">
        <div class="feature-icon"><i class="fa-solid ${item.icon}"></i></div>
        <div class="feature-content">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>
      </div>
    `;
  }).join("");
}

function setupMobileNav() {
  const toggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (!toggle || !navMenu) return;

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}
