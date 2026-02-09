// ==================== PRELOADER FUNCTIONALITY ====================
// Handles the preloader animation and display logic
// Only add loading class if preloader exists
const preloader = document.getElementById('preloader');
const showPreloader = preloader && !sessionStorage.getItem('siteVisited');
if (showPreloader) {
  document.body.classList.add('loading');
} else if (preloader) {
  // Hide preloader on subsequent visits within the same tab
  preloader.style.display = 'none';
}

window.addEventListener('load', function() {
    if (showPreloader) {
        // Wait for minimum 2 seconds before hiding
        setTimeout(function() {
            preloader.classList.add('fade-out');
            // Remove loading class from body
            document.body.classList.remove('loading');
            // Remove from DOM after fade animation completes
            setTimeout(function() {
                preloader.style.display = 'none';
                try { sessionStorage.setItem('siteVisited', '1'); } catch (e) {}
            }, 500);
        }, 2000);
    }
});

// ==================== HEADER SCROLL EFFECT ====================
// Adds a class to header when scrolling down
const header = document.querySelector('.site-header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==================== BANNER SLIDER ====================
// Handles the auto-rotating banner slides with dot navigation
(() => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const slider = document.querySelector('.banner-slider');
  if (!slider || slides.length === 0) return;

  let currentSlide = 0;
  function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
      slider.style.transform = `translateX(-${index * 25}%)`;
  }
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }
  setInterval(nextSlide, 4000);
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentSlide = index;
          showSlide(currentSlide);
      });
  });
})();








// ==================== PAGE INITIALIZATION ====================
// Runs when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Update year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }

  // Normalize product links across all pages: convert section anchors to page URLs
  // This ensures that links like #solar-panels navigate to spanel.html from any page
  const productLinkMap = {
    '#solar-water-pumps': 'spumps.html',
    '#solar-water-heater': 'sheater.html',
    '#solar-garden-lights': 'sglights.html',
    '#solar-decorative-lights': 'solardec.html',
    '#solar-flood-lights': 'solarflood.html',
    '#solar-inverter': 'sinverter.html',
    '#solar-panels': 'spanel.html',
    '#ac-lights': 'aclights.html',
    '#home-lights': 'homelights.html'
  };
  const productAnchors = document.querySelectorAll(
    'a[href^="#solar-"], a[href="#ac-lights"], a[href="#home-lights"]'
  );
  productAnchors.forEach((a) => {
    const href = a.getAttribute('href');
    const target = productLinkMap[href];
    if (target) a.setAttribute('href', target);
  });

  // Initialize achievements counter animation
  initAchievementsCounter();

  // ==================== MOBILE NAVIGATION ====================
  // Handles mobile menu toggle functionality
  // const nav = document.getElementById('site-nav');
  // const navToggle = document.getElementById('nav-toggle');
  // const toggleNav = () => {
  //   if (!nav || !navToggle) return;
  //   const isOpen = nav.classList.toggle('open');
  //   navToggle.setAttribute('aria-expanded', String(isOpen));
    
  //   // Close all dropdowns when nav is closed
  //   if (!isOpen) {
  //     const dropdowns = nav.querySelectorAll('.dropdown');
  //     dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
  //   }
  // };
  // if (navToggle) navToggle.addEventListener('click', toggleNav);
  
  // ==================== DROPDOWN MENUS ====================
  // Handles dropdown menu behavior for mobile and desktop
// ==================== FINAL SIDEBAR & NAV LOGIC ====================
// document.addEventListener("click", function(e) {
//     // 1. Target the "Products" Main Link
//     const megaTrigger = e.target.closest('.mega-trigger');
//     if (megaTrigger && window.innerWidth <= 960) {
//         e.preventDefault();
//         e.stopPropagation();
//         const parentLi = megaTrigger.closest('.mega-dropdown');
//         parentLi.classList.toggle('open');
//         return;
//     }

//     // 2. Target the "Company Name" Headings
//     const nestedTrigger = e.target.closest('.nested-trigger');
//     if (nestedTrigger && window.innerWidth <= 960) {
//         e.preventDefault();
//         e.stopPropagation();
//         const parentCol = nestedTrigger.closest('.nested-dropdown');
        
//         // Close other companies to maintain a clean accordion effect
//         document.querySelectorAll('.nested-dropdown').forEach(col => {
//             if (col !== parentCol) col.classList.remove('active');
//         });

//         // Toggle the active class to show/hide products
//         parentCol.classList.toggle('active');
//     }
// });

        
  // ==================== MOBILE MEGA MENU (ACCORDION STYLE) ====================
// document.addEventListener("click", function (e) {

//   // ---------- PRODUCTS (LEVEL 1) ----------
//   const megaTrigger = e.target.closest(".mega-trigger");
//   if (megaTrigger && window.innerWidth <= 960) {
//     e.preventDefault();
//     e.stopPropagation();

//     const megaItem = megaTrigger.closest(".mega-dropdown");
//     const isOpen = megaItem.classList.contains("open");

//     // Close all mega dropdowns
//     document.querySelectorAll(".mega-dropdown").forEach(d => {
//       d.classList.remove("open");
//     });

//     // Toggle current
//     if (!isOpen) megaItem.classList.add("open");
//     return;
//   }

//   // ---------- COMPANY HEADERS (LEVEL 2) ----------
//   const companyTrigger = e.target.closest(".nested-trigger");
//   if (companyTrigger && window.innerWidth <= 960) {
//     e.preventDefault();
//     e.stopPropagation();

//     const currentCompany = companyTrigger.closest(".nested-dropdown");
//     const isActive = currentCompany.classList.contains("active");

//     // Close all companies
//     document.querySelectorAll(".nested-dropdown").forEach(col => {
//       col.classList.remove("active");
//     });

//     // Open clicked company
//     if (!isActive) currentCompany.classList.add("active");
//     return;
//   }

//   // ---------- CLICK OUTSIDE CLOSE ----------
//   if (window.innerWidth <= 960) {
//     if (!e.target.closest(".mega-dropdown")) {
//       document.querySelectorAll(".mega-dropdown").forEach(d => d.classList.remove("open"));
//       document.querySelectorAll(".nested-dropdown").forEach(c => c.classList.remove("active"));
//     }
//   }
// });
     
// ==================== MOBILE NAV DROPDOWNS ====================
// document.addEventListener('click', function (e) {

//   if (window.innerWidth > 960) return;

//   // -------- LEVEL 1 DROPDOWNS (Products, Projects, About) --------
//   const dropdownLink = e.target.closest('.dropdown > a');
//   if (dropdownLink) {
//     e.preventDefault();
//     e.stopPropagation();

//     const dropdown = dropdownLink.parentElement;
//     const isActive = dropdown.classList.contains('active');

//     // Close all level-1 dropdowns
//     document.querySelectorAll('.nav .dropdown').forEach(d => {
//       d.classList.remove('active');
//     });

//     // Open clicked
//     if (!isActive) dropdown.classList.add('active');
//     return;
//   }

//   // -------- LEVEL 2 (COMPANIES) --------
//   const companyTrigger = e.target.closest('.nested-trigger');
//   if (companyTrigger) {
//     e.preventDefault();
//     e.stopPropagation();

//     const company = companyTrigger.closest('.nested-dropdown');
//     const isActive = company.classList.contains('active');

//     // Close all companies
//     document.querySelectorAll('.nested-dropdown').forEach(c => {
//       c.classList.remove('active');
//     });

//     // Open clicked
//     if (!isActive) company.classList.add('active');
//     return;
//   }

//   // -------- CLICK OUTSIDE CLOSE --------
//   if (!e.target.closest('.nav')) {
//     document.querySelectorAll('.dropdown, .nested-dropdown').forEach(el => {
//       el.classList.remove('active');
//     });
//   }

// });

// ================= MOBILE DROPDOWN CONTROLLER =================
// document.addEventListener('click', function (e) {

//   if (window.innerWidth > 960) return;

//   /* LEVEL 1: Products / Projects / About */
//   const level1Link = e.target.closest('.dropdown > a');
//   if (level1Link) {
//     e.preventDefault();

//     const parent = level1Link.parentElement;

//     document.querySelectorAll('.dropdown').forEach(d => {
//       if (d !== parent) d.classList.remove('active');
//     });

//     parent.classList.toggle('active');
//     return;
//   }

//   /* LEVEL 2: Companies inside Products */
//   const companyTrigger = e.target.closest('.nested-trigger');
//   if (companyTrigger) {
//     e.preventDefault();

//     const company = companyTrigger.closest('.nested-dropdown');

//     document.querySelectorAll('.nested-dropdown').forEach(c => {
//       if (c !== company) c.classList.remove('active');
//     });

//     company.classList.toggle('active');
//     return;
//   }

// });

	// document.addEventListener('DOMContentLoaded', () => {

			const nav = document.getElementById('site-nav');
			const navToggle = document.getElementById('nav-toggle');

			const megaDropdown = document.querySelector('.mega-dropdown');
			const megaTrigger = document.querySelector('.mega-trigger');
			const megaMenu = document.querySelector('.mega-menu');
			const companies = document.querySelectorAll('.mega-col');
			const dropdowns = document.querySelectorAll('.dropdown:not(.mega-dropdown)');

			/* ===== NAV TOGGLE ===== */
			navToggle.addEventListener('click', () => {
				nav.classList.toggle('open');
			});

			/* ===== MOBILE MENU HANDLER ===== */
			nav.addEventListener('click', (e) => {
				if (window.innerWidth > 960) return;

				/* ===== PRODUCTS ===== */
				const product = e.target.closest('.mega-trigger');
				if (product) {
					e.preventDefault();

					const productLi = product.closest('.mega-dropdown');
					const isOpen = productLi.classList.contains('active');

					// close other normal dropdowns
					dropdowns.forEach(d => d.classList.remove('active'));

					if (isOpen) {
						// ✅ FULL CLOSE (this was missing)
						productLi.classList.remove('active');
						companies.forEach(c => c.classList.remove('active'));
						return;
					}

					// open products
					productLi.classList.add('active');
					return;
				}


				/* ===== COMPANY ACCORDION ===== */
				const companyHeader = e.target.closest('.mobile-company-trigger');
				if (companyHeader) {
					e.preventDefault();
					e.stopPropagation();

					const col = companyHeader.closest('.mega-col');

					companies.forEach(c => {
						if (c !== col) c.classList.remove('active');
					});

					col.classList.toggle('active');
					return;
				}

				/* ===== PROJECTS / ABOUT ===== */
				const normal = e.target.closest('.dropdown > a:not(.mega-trigger)');
				if (normal) {
					e.preventDefault();

					const parent = normal.parentElement;

					// close others
					dropdowns.forEach(d => {
						if (d !== parent) d.classList.remove('active');
					});

					// close products if open
					megaDropdown.classList.remove('active');
					companies.forEach(c => c.classList.remove('active'));

					parent.classList.toggle('active');
					return;
				}
			});

		// });




  // const dropdowns = document.querySelectorAll('.dropdown > a');
  // dropdowns.forEach(dropdownLink => {
  //   dropdownLink.addEventListener('click', (e) => {
  //     // Only handle dropdown toggle on mobile
  //     if (window.innerWidth <= 960) {
  //       e.preventDefault();
  //       e.stopPropagation(); // Prevent event bubbling
        
  //       const dropdown = dropdownLink.parentElement;
  //       const isActive = dropdown.classList.contains('active');
        
  //       // Close all other dropdowns
  //       const allDropdowns = document.querySelectorAll('.dropdown');
  //       allDropdowns.forEach(d => {
  //         if (d !== dropdown) {
  //           d.classList.remove('active');
  //         }
  //       });
        
  //       // Toggle current dropdown
  //       dropdown.classList.toggle('active');
  //     }
  //   });
  // });
  // // Close nav when clicking a link (but not dropdown headers)
  // if (nav) nav.addEventListener('click', (e) => {
  //   const a = e.target.closest('a');
  //   if (a && nav.classList.contains('open')) {
  //     // Don't close nav if it's a dropdown header on mobile
  //     const isDropdownHeader = a.parentElement.classList.contains('dropdown');
  //     const isMobile = window.innerWidth <= 960;
      
  //     if (!isDropdownHeader || !isMobile) {
  //       nav.classList.remove('open');
  //       if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  //     }
  //   }
  // });
  // Click outside to close
  // document.addEventListener('click', (e) => {
  //   if (!nav || !navToggle) return;
  //   const withinNav = e.target.closest('#site-nav');
  //   const onToggle = e.target.closest('#nav-toggle');
  //   if (!withinNav && !onToggle && nav.classList.contains('open')) {
  //     nav.classList.remove('open');
  //     navToggle.setAttribute('aria-expanded', 'false');
  //   }
  // });
  // Search overlay behavior (open/close)
  const searchBtn = document.querySelector('.search-icon');
  const overlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');
  const openOverlay = () => {
    if (!overlay) return;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    setTimeout(() => searchInput && searchInput.focus(), 50);
  };
  const closeOverlay = () => {
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  };
  if (searchBtn) searchBtn.addEventListener('click', openOverlay);
  if (searchClose) searchClose.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlay(); });
  if (overlay) overlay.addEventListener('click', (e) => {
    const inner = e.target.closest('.search-inner');
    if (!inner) closeOverlay();
  });

  const promos = document.querySelectorAll('.promo-grid .promo-item');
  promos.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  promos.forEach(el => io.observe(el));

  const about=document.querySelector('.who-we-are-alt .who-alt-card');
  if(about){
    about.classList.add('reveal');
    const ob=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){about.classList.add('in-view');ob.disconnect();}})},{threshold:0.3,rootMargin:'0px 0px -10% 0px'});
    ob.observe(about);
    const r=about.getBoundingClientRect();
    if(r.top<window.innerHeight&&r.bottom>0){requestAnimationFrame(()=>about.classList.add('in-view'));}
  }

  const track = document.getElementById('productTrack');
  const prevBtn = document.querySelector('.products-scroller .prev');
  const nextBtn = document.querySelector('.products-scroller .next');
  if (track && prevBtn && nextBtn) {
    const getStep = () => {
      const card = track.querySelector('.product-card');
      const gap = parseFloat(getComputedStyle(track).gap || '0');
      return (card ? card.getBoundingClientRect().width : 260) + gap;
    };

    const updateBtns = () => {
      prevBtn.disabled = track.scrollLeft <= 0;
      const maxScroll = track.scrollWidth - track.clientWidth - 1;
      nextBtn.disabled = track.scrollLeft >= maxScroll;
    };

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getStep(), behavior: 'smooth' });
      setTimeout(updateBtns, 300);
    });
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: getStep(), behavior: 'smooth' });
      setTimeout(updateBtns, 300);
    });
    track.addEventListener('scroll', updateBtns, { passive: true });
    window.addEventListener('resize', updateBtns);
    updateBtns();
  }
  const scrollers = document.querySelectorAll('.cards-scroller');
  scrollers.forEach(scroller => {
    const trackEl = scroller.querySelector('.cards-track');
    const prev = scroller.querySelector('.prev');
    const next = scroller.querySelector('.next');
    if (!trackEl || !prev || !next) return;
    const getStep = () => {
      const card = trackEl.querySelector('.t-card');
      const gap = parseFloat(getComputedStyle(trackEl).gap || '0');
      return (card ? card.getBoundingClientRect().width : 280) + gap;
    };
    const updateBtns2 = () => {
      prev.disabled = trackEl.scrollLeft <= 0;
      const maxScroll = trackEl.scrollWidth - trackEl.clientWidth - 1;
      next.disabled = trackEl.scrollLeft >= maxScroll;
    };
    prev.addEventListener('click', () => {
      trackEl.scrollBy({ left: -getStep(), behavior: 'smooth' });
      setTimeout(updateBtns2, 300);
    });
    next.addEventListener('click', () => {
      trackEl.scrollBy({ left: getStep(), behavior: 'smooth' });
      setTimeout(updateBtns2, 300);
    });
    trackEl.addEventListener('scroll', updateBtns2, { passive: true });
    window.addEventListener('resize', updateBtns2);
    updateBtns2();
  });

  // Simple Testimonials Flow (auto 3.5s)
  const tflow = document.getElementById('tflow');
  if (tflow) {
    const stage = tflow.querySelector('.tflow-stage');
    const slides = Array.from(tflow.querySelectorAll('.tflow-slide'));
    const dotsWrap = document.getElementById('tflowDots');
    if (stage && slides.length) {
      dotsWrap.innerHTML = slides.map((_, i) => `<span class="tflow-dot${i===0?' active':''}"></span>`).join('');
      const dots = Array.from(dotsWrap.querySelectorAll('.tflow-dot'));
      let idx = 0, timer = null;
      const render = () => {
        const base = Math.min(200, Math.max(120, stage.clientWidth / 5.5));
        slides.forEach((el, i) => {
          const rel = ((i - idx) + slides.length) % slides.length;
          const half = Math.floor(slides.length / 2);
          const side = rel <= half ? rel : rel - slides.length;
          const x = side * base;
          const s = side === 0 ? 1 : 0.82 - Math.min(Math.abs(side)-1, 2) * 0.08;
          el.style.transform = `translate(-50%,-50%) translateX(${x}px) scale(${s})`;
          el.style.zIndex = String(100 - Math.abs(side));
          const active = side === 0;
          el.classList.toggle('is-active', active);
        });
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      };
      const next = () => { idx = (idx + 1) % slides.length; render(); };
      const start = () => { if (!timer) timer = setInterval(next, 3500); };
      const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
      render();
      start();
      tflow.addEventListener('mouseenter', stop);
      tflow.addEventListener('mouseleave', start);
      dots.forEach((d, i) => d.addEventListener('click', () => { stop(); idx = i; render(); start(); }));
      window.addEventListener('resize', render);
    }
  }
  const hero = document.querySelector('.hero');
  const layers = hero ? hero.querySelectorAll('.hero-media') : [];
  if (layers.length === 2) {
    const images = ['images/image_1.jpg','images/image_3.jpg','images/image_2.jpg','images/image_5.jpg'];
    let idx = 0;
    let visible = 0;
    layers[0].style.backgroundImage = `url('${images[0]}')`;
    layers[0].classList.add('is-visible');
    layers[1].style.backgroundImage = `url('${images[1 % images.length]}')`;
    images.forEach(src => { const im = new Image(); im.src = src; });
    setInterval(() => {
      const next = (idx + 1) % images.length;
      const show = visible ^ 1;
      layers[show].style.backgroundImage = `url('${images[next]}')`;
      layers[show].classList.add('is-visible');
      layers[visible].classList.remove('is-visible');
      visible = show;
      idx = next;
    }, 5000);
  }
});

// Bottom Right Corner Button with Sliding Options
// document.addEventListener('DOMContentLoaded', () => {
//   const cornerBtn = document.getElementById('cornerBtn');
//   const scrollTopBtn = document.getElementById('scrollTop');
  
//   // Main corner button functionality
//   if (cornerBtn) {
//     cornerBtn.addEventListener('click', () => {
//       // On all pages, just scroll to top (no back functionality)
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     });
//   }
  
  // Scroll to top functionality for the sliding option
  // if (scrollTopBtn) {
  //   scrollTopBtn.addEventListener('click', () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth'
  //     });
  //   });
  // }
  
  // Handle WhatsApp click with fallback options

  


// document.addEventListener('DOMContentLoaded', function () {
//   const waTrigger = document.getElementById('waTrigger');
//   const waCard = document.getElementById('waDeptCard');
//   const phoneNumber = '918956189167';

//   if (!waTrigger || !waCard) return;

//   waTrigger.addEventListener('click', function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     waCard.classList.toggle('show');
//   });

//   document.querySelectorAll('.wa-dept-item').forEach(item => {
//     item.addEventListener('click', function (e) {
//       e.stopPropagation();
//       const msg = this.dataset.msg;
//       const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
//       waCard.classList.remove('show');
//       window.open(url, '_blank');
//     });
//   });

//   document.addEventListener('click', () => {
//     waCard.classList.remove('show');
//   });
// });

// ==================== WHATSAPP MULTI-OPTION FLOATING BUTTON ====================
document.addEventListener('DOMContentLoaded', () => {
  const waTrigger = document.getElementById('waTrigger');
  const waCard = document.getElementById('waDeptCard');

  if (!waTrigger || !waCard) return; // page-safe

  // Toggle WhatsApp options
  waTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    waCard.classList.toggle('show');
  });

  // Handle department click
  waCard.querySelectorAll('.wa-dept-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();

      const phone = item.dataset.phone;
      const msg = item.dataset.msg || 'Hello, I would like to connect.';

      if (!phone) return;

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      waCard.classList.remove('show');
      window.open(url, '_blank');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#waDeptCard') && !e.target.closest('#waTrigger')) {
      waCard.classList.remove('show');
    }
  });
});




// ==================== ACHIEVEMENTS COUNTER ====================
// Animates the achievement numbers on scroll
function initAchievementsCounter() {
    const achievementNumbers = document.querySelectorAll('.achievement-number');
    
    if (achievementNumbers.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    achievementNumbers.forEach(number => {
        observer.observe(number);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100; // Adjust speed by changing divisor
    const duration = 2000; // 2 seconds
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

// ==================== PRODUCT VIEW TOGGLE ====================
// Handles switching between grid and list views on product pages
function initializeUniversalViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const productsGrid = document.getElementById('productsGrid');
    
    if (viewButtons.length === 0 || !productsGrid) {
        return; // Not a product page or elements not found
    }
    
    console.log('Initializing universal view toggle...');
    console.log('Found view buttons:', viewButtons.length);
    
    // Set initial active state (grid by default)
    let currentView = 'grid';
    viewButtons.forEach(btn => {
        if (btn.dataset.view === 'grid') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Add click event listeners
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View button clicked:', this.dataset.view);
            
            // Remove active class from all buttons
            viewButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current view
            currentView = this.dataset.view;
            
            // Apply CSS classes to grid
            if (currentView === 'list') {
                productsGrid.className = 'products-grid list-view';
                console.log('Switched to list view');
            } else {
                productsGrid.className = 'products-grid';
                console.log('Switched to grid view');
            }
            
            // Also update individual product cards if needed
            const productCards = productsGrid.querySelectorAll('.product-card');
            productCards.forEach(card => {
                if (currentView === 'list') {
                    card.classList.add('list-item');
                } else {
                    card.classList.remove('list-item');
                }
            });
        });
    });
}

// ==================== DOCUMENT READY ====================
// Initialize components when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are loaded
    setTimeout(initializeUniversalViewToggle, 100);
});


// ==================== GLOBAL FOOTER & CTA INJECTION ====================
/**
// ==================== GLOBAL FOOTER & CTA INJECTION ====================
/**
 * Verifies that the global-footer-placeholder exists, fetches the footer.html,
 * injects it, and then runs the initialization for all footer-based features.
 */
async function injectGlobalFooter() {
    const footerWrapper = document.getElementById('global-footer-placeholder');
    if (!footerWrapper) return; // Exit if the placeholder isn't on this page

    try {
        const response = await fetch('footer.html');
        if (!response.ok) throw new Error('Footer file missing or path incorrect');
        const html = await response.text();
        
        // Inject the HTML into the DOM
        footerWrapper.innerHTML = html;

        // NOW that the HTML exists, initialize the features
        initGlobalFooterFeatures();
    } catch (err) {
        console.error("Global footer load error:", err);
    }
}

/**
 * Initializes listeners for elements that were JUST added to the DOM via fetch.
 */
function initGlobalFooterFeatures() {
    // 1. Update Copyright Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Initialize Achievements Counter (Checking if present on the page)
    initAchievementsCounter();
}

// ==================== ACHIEVEMENTS COUNTER ====================
// function initAchievementsCounter() {
//     const achievementNumbers = document.querySelectorAll('.achievement-number');
//     if (achievementNumbers.length === 0) return;

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const target = parseInt(entry.getAttribute('data-target'));
//                 animateCounter(entry.target, target);
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.5 });

//     achievementNumbers.forEach(number => observer.observe(number));
// }

// function animateCounter(element, target) {
//     let current = 0;
//     const duration = 2000;
//     const stepTime = 20;
//     const increment = target / (duration / stepTime);

//     const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//             element.textContent = target;
//             clearInterval(timer);
//         } else {
//             element.textContent = Math.floor(current);
//         }
//     }, stepTime);
// }


//product on click stays
document.addEventListener('DOMContentLoaded', () => {
  const productToggle = document.querySelector('.mega-dropdown > a');
  const megaDropdown = document.querySelector('.mega-dropdown');

  // Toggle Products on click
  productToggle.addEventListener('click', (e) => {
    // desktop only
    if (window.innerWidth >= 961) {
      e.preventDefault();
      megaDropdown.classList.toggle('active');
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (
      window.innerWidth >= 961 &&
      !megaDropdown.contains(e.target)
    ) {
      megaDropdown.classList.remove('active');
    }
  });
});

// Single entry point for the injection process
document.addEventListener('DOMContentLoaded', injectGlobalFooter);
