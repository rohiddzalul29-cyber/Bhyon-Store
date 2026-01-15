// Data aplikasi dan paket harga
const appsData = [
  {
    id: "youtube",
    name: "YouTube Premium",
    icon: "fab fa-youtube",
    description:
      "Nikmati YouTube tanpa iklan, putar latar belakang, dan akses ke YouTube Music.",
    packages: [
      {
        name: "1 Bulan",
        price: "Rp 11.000",
        features: ["Hanya butuh email", "Gak butuh password", "Proses cepat"],
      },
      {
        name: "3 Bulan",
        price: "Rp 19.000",
        features: ["Hanya butuh email", "Butuh PASSWORD", "Proses cepat"],
      },
      {
        name: "2 bulan",
        price: "Rp 15.000",
        features: ["Hanya butuh email", "Gak butuh PASSWORD", "Proses cepat"],
      },
    ],
  },
  {
    id: "viu",
    name: "VIU Premium",
    icon: "fas fa-film",
    description: "Nonton drama Korea, Asia, dan konten eksklusif tanpa iklan.",
    packages: [
      {
        name: "1 Bulan",
        price: "Rp 11.000",
        features: [
          "Log 1 device aja",
          "garansi 6 bulan",
          "Email dan password dari admin",
          "Private",
        ],
      },
      {
        name: "2 Bulan",
        price: "Rp 15.000",
        features: [
          "Log 1 device aja",
          "garansi 6 bulan",
          "Email dan password dari admin",
          "Private",
        ],
      },
      {
        name: "6 Bulan",
        price: "Rp 21.000",
        features: [
          "Log 1 device aja",
          "garansi 6 bulan",
          "Email dan password dari admin",
          "Private",
        ],
      },
    ],
  },
  {
    id: "canva",
    name: "Canva Pro",
    icon: "fas fa-palette",
    description:
      "Desain grafis profesional dengan template premium dan aset eksklusif.",
    packages: [
      {
        name: "1 Bulan",
        price: "Rp 11.000",
        features: [
          "Template premium",
          "Aset eksklusif",
          "Background remover",
          "100GB storage",
        ],
      },
      {
        name: "3 Bulan",
        price: "Rp 15.000",
        features: [
          "Template premium",
          "Aset eksklusif",
          "Background remover",
          "100GB storage",
        ],
      },
      {
        name: "6 Bulan",
        price: "Rp 18.000",
        features: [
          "Template premium",
          "Aset eksklusif",
          "Background remover",
          "100GB storage",
        ],
      },
      {
        name: "1 Tahun (jaminan 6 bulan)",
        price: "Rp 22.000",
        features: [
          "Template premium",
          "Aset eksklusif",
          "Background remover",
          "100GB storage",
        ],
      },
      {
        name: "1 Tahun (jaminan 1 tahun)",
        price: "Rp 29.000",
        features: [
          "Template premium",
          "Aset eksklusif",
          "Background remover",
          "100GB storage",
        ],
      },
    ],
  },
  {
    id: "netflix",
    name: "Netflix Premium",
    icon: "fas fa-tv",
    description:
      "Streaming film dan serial tanpa batas dengan kualitas 4K Ultra HD.",
    packages: [
      {
        name: "1 PROFILE 2 USER",
        price: "Rp 57.000/1 Bulan",
        features: [
          "1 device aja",
          "full garansi",
          "Email dan password dari Admin",
        ],
      },
      {
        name: "AKUN PRIVATE",
        price: "Rp 124.000/1 Bulan",
        features: [
          "1 device aja",
          "full garansi",
          "Email dan password dari Admin",
          "Dapat seluruh profile",
        ],
      },
      {
        name: "1 PROFILE 1 USER",
        price: "Rp 34.000/1 Bulan",
        features: [
          "1 device aja",
          "full garansi",
          "Email dan password dari Admin",
        ],
      },
    ],
  },
  {
    id: "bstation",
    name: "BStation",
    icon: "fas fa-gamepad",
    description:
      "Platform video dan streaming anime, game, dan konten kreator.",
    packages: [
      {
        name: "1 Tahun Sharing",
        price: "Rp 25.000/1 Bulan",
        features: [
          "Akun sharing",
          "Garansi 6 Bulan",
          "Email dan password dari admin",
        ],
      },
      {
        name: "3 Bulan Private",
        price: "Rp 49.000/1 Bulan",
        features: ["Garansi 6 Bulan", "Email dan password dari admin"],
      },
      {
        name: "1 Bulan Sharing",
        price: "Rp 18.000/1 Bulan",
        features: [
          "Akun sharing",
          "Garansi 6 Bulan",
          "Email dan password dari admin",
        ],
      },
    ],
  },
  {
    id: "vidio",
    name: "Vidio Premium",
    icon: "fas fa-video",
    description:
      "Nonton TV, film, serial, dan olahraga langsung dengan kualitas HD.",
    packages: [
      {
        name: "Paket Platinum",
        price: "Rp 39.000/1 Bulan",
        features: [
          "Email dan password dari admin",
          "Full garansi",
          "Bisa di semua device",
        ],
      },
      {
        name: "Paket Platinum",
        price: "Rp 77.000/1 Bulan",
        features: [
          "Email dan password dari admin",
          "Full garansi",
          "Bisa di semua device",
        ],
      },
    ],
  },
  {
    id: "disney",
    name: "Disney+ Hotstar",
    icon: "fas fa-crown",
    description:
      "Konten Disney, Marvel, Star Wars, National Geographic, dan film Hollywood.",
    packages: [
      {
        name: "1 Bulan",
        price: "Rp 28.000",
        features: [
          "1 perangkat mobile",
          "Kualitas HD",
          "Akses semua konten",
          "Download",
        ],
      },
      {
        name: "3 Bulan",
        price: "Rp 58.000",
        features: [
          "1 perangkat mobile",
          "Kualitas HD",
          "Akses semua konten",
          "Download",
        ],
      },
      {
        name: "Paket basic (1 Bulan)",
        price: "Rp 79.000",
        features: [
          "4 perangkat",
          "4K Ultra HD",
          "Akses semua konten",
          "Download",
        ],
      },
      {
        name: "Paket prem (1 bulan)",
        price: "Rp 125.000",
        features: [
          "4 perangkat",
          "4K Ultra HD",
          "Akses semua konten",
          "Download",
        ],
      },
    ],
  },
];

// DOM Elements
const appsGrid = document.getElementById("apps-grid");
const themeToggle = document.getElementById("theme-toggle");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");
const packageModal = document.getElementById("package-modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const packageOptions = document.getElementById("package-options");
const scrollTopBtn = document.getElementById("scroll-top-btn");

// Initialize apps on page load
document.addEventListener("DOMContentLoaded", function () {
  renderApps();
  initAnimations();
  initFAQ();

  // Set initial theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize scroll to top button
  initScrollToTop();
});

// Render apps to the grid
function renderApps() {
  appsGrid.innerHTML = "";

  appsData.forEach((app, index) => {
    const appCard = document.createElement("div");
    appCard.className = `app-card animate-on-scroll`;
    appCard.setAttribute("data-delay", (index * 0.1).toFixed(1));
    appCard.innerHTML = `
                    <div class="app-icon ${app.id}-bg">
                        <i class="${app.icon}"></i>
                    </div>
                    <div class="app-content">
                        <h3>${app.name}</h3>
                        <p>${app.description}</p>
                        
                        <div class="app-packages">
                            ${app.packages
                              .slice(0, 2)
                              .map(
                                (pkg) => `
                                <div class="package-item">
                                    <span class="package-name">${pkg.name}</span>
                                    <span class="package-price">${pkg.price}</span>
                                </div>
                            `
                              )
                              .join("")}
                            ${
                              app.packages.length > 2
                                ? `<div class="package-item">
                                <span class="package-name">+${
                                  app.packages.length - 2
                                } paket lainnya</span>
                                <span class="package-price">Lihat</span>
                            </div>`
                                : ""
                            }
                        </div>
                        
                        <button class="view-more-btn" data-app="${
                          app.id
                        }">Lihat Paket Lengkap</button>
                        <button class="order-btn" onclick="orderApp('${
                          app.id
                        }')">Pesan Sekarang</button>
                    </div>
                `;

    appsGrid.appendChild(appCard);
  });

  // Add event listeners to view more buttons
  document.querySelectorAll(".view-more-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const appId = this.getAttribute("data-app");
      openPackageModal(appId);
    });
  });
}

// Initialize FAQ functionality
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close other open FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });
}

// Initialize scroll animations
function initScrollAnimations() {
  const animateElements = document.querySelectorAll(
    ".animate-on-scroll, .animate-left, .animate-right, .animate-scale"
  );

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  // Function to animate elements on scroll
  function animateOnScroll() {
    animateElements.forEach((element) => {
      if (isInViewport(element) && !element.classList.contains("animated")) {
        // Get delay from data attribute
        const delay = element.getAttribute("data-delay") || 0;

        // Apply animation with delay
        setTimeout(() => {
          element.classList.add("animated");
        }, delay * 1000);
      }
    });
  }

  // Initial check on load
  animateOnScroll();

  // Check on scroll
  window.addEventListener("scroll", animateOnScroll);
}

// Initialize scroll to top button
function initScrollToTop() {
  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("active");
    } else {
      scrollTopBtn.classList.remove("active");
    }
  });

  // Scroll to top when button is clicked
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Initialize animations
function initAnimations() {
  // Animate elements on load
  setTimeout(() => {
    document
      .querySelectorAll(".animate-on-scroll[data-delay]")
      .forEach((el) => {
        const delay = parseFloat(el.getAttribute("data-delay"));
        setTimeout(() => {
          el.classList.add("animated");
        }, delay * 1000);
      });
  }, 300);
}

// Open package modal
function openPackageModal(appId) {
  const app = appsData.find((a) => a.id === appId);
  if (!app) return;

  modalTitle.textContent = `Pilih Paket ${app.name}`;
  packageOptions.innerHTML = "";

  app.packages.forEach((pkg) => {
    const packageOption = document.createElement("div");
    packageOption.className = "package-option";
    packageOption.innerHTML = `
                    <h4>${pkg.name}</h4>
                    <div class="price">${pkg.price}</div>
                    <ul class="package-features">
                        ${pkg.features
                          .map(
                            (feature) => `
                            <li><i class="fas fa-check"></i> ${feature}</li>
                        `
                          )
                          .join("")}
                    </ul>
                    <button class="modal-order-btn" onclick="orderPackage('${appId}', '${
      pkg.name
    }')">Pilih Paket Ini</button>
                `;
    packageOptions.appendChild(packageOption);
  });

  packageModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Close package modal
closeModal.addEventListener("click", function () {
  packageModal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  if (event.target === packageModal) {
    packageModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Order app function
function orderApp(appId) {
  const app = appsData.find((a) => a.id === appId);
  if (!app) return;

  // Open WhatsApp with predefined message
  const message = `Halo BhyonStore, saya ingin pesan akun ${app.name}. Bisa info paket dan harganya?`;
  const whatsappUrl = `https://wa.me/6288272292088?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
}

// Order package function
function orderPackage(appId, packageName) {
  const app = appsData.find((a) => a.id === appId);
  if (!app) return;

  // Open WhatsApp with predefined message
  const message = `Halo BhyonStore, saya ingin pesan akun ${app.name} paket ${packageName}. Bagaimana cara pemesanannya?`;
  const whatsappUrl = `https://wa.me/6288272292088?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");

  // Close modal
  packageModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Toggle dark/light mode
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});

// Toggle mobile menu
mobileMenuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  mobileMenuBtn.innerHTML = navMenu.classList.contains("show")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
