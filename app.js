/**
 * ==============================================================================
 * ANIL KUMAR MANISH KUMAR TILES SHOWROOM - FRONTEND APP
 * ==============================================================================
 */

import {
  showroomConfig,
  productCategories,
  showroomBrands,
  showroomFeatures,
  showroomFaqs
} from "./data.js";

function initApp() {
  setYear();
  setupMobileNav();
  renderCategories();
  renderBrands();
  renderFeatures();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

function setYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}

export function toggleMobileNav(forceClose = false) {
  const toggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const backdrop = document.getElementById("nav-backdrop");

  if (!navMenu) return;

  const willBeOpen = forceClose ? false : !navMenu.classList.contains("open");

  if (willBeOpen) {
    navMenu.classList.add("open");
    if (backdrop) backdrop.classList.add("open");
    document.body.classList.add("menu-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "true");
      const icon = toggle.querySelector("i");
      if (icon) icon.className = "fa-solid fa-xmark";
    }
  } else {
    navMenu.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    document.body.classList.remove("menu-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      const icon = toggle.querySelector("i");
      if (icon) icon.className = "fa-solid fa-bars";
    }
  }
}

// Attach to window so inline onclick works as a direct fallback
if (typeof window !== "undefined") {
  window.toggleMobileNav = toggleMobileNav;
}

function setupMobileNav() {
  const toggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const backdrop = document.getElementById("nav-backdrop");

  if (toggle) {
    toggle.onclick = (e) => {
      e.preventDefault();
      toggleMobileNav();
    };
  }

  if (backdrop) {
    backdrop.onclick = () => {
      toggleMobileNav(true);
    };
  }

  if (navMenu) {
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.onclick = () => {
        toggleMobileNav(true);
      };
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleMobileNav(true);
    }
  });
}

function renderCategories() {
  const container = document.getElementById("categories-grid");
  // Only render if container is empty to prevent overwriting Vite's pre-rendered hashed image paths
  if (!container || container.children.length > 0 || !Array.isArray(productCategories)) return;

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
  // Only render if container is empty to prevent overwriting Vite's pre-rendered hashed image paths
  if (!container || container.children.length > 0 || !Array.isArray(showroomBrands)) return;

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
  if (!container || container.children.length > 0 || !Array.isArray(showroomFeatures)) return;

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
