/* =====================================================
   Resume section tabs and tab contents
===================================================== */
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function(resumeTabClick) {
   resumeTabContents.forEach((resumeTabContent) => {
      resumeTabContent.style.display = "none";
      resumeTabContent.classList.remove("active");
   });

   resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
      resumePortfolioTabBtn.classList.remove("active");
   });

   resumeTabContents[resumeTabClick].style.display = "flex";

   setTimeout(()=> {
   resumeTabContents[resumeTabClick].classList.add("active");
   }, 100);

   resumePortfolioTabBtns[resumeTabClick].classList.add("active");

};

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
   resumePortfolioTabBtn.addEventListener("click", () => {
      resumeTabNav(i);
   });
});


/* =====================================================
   Service modal open/close function
===================================================== */

/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
   const portfolioTabs = document.querySelector(".portfolio-tabs");
   const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
   const cardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

   portfolioTabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
         const filter = tabBtn.getAttribute("data-filter");

         cardWithModals.forEach((cardWithModal) => {
            if (filter === "all" || cardWithModal.classList.contains(filter)) {
               
               cardWithModal.classList.remove("hidden");

               setTimeout(() => {
                  cardWithModal.style.opacity = "1";
                  cardWithModal.style.transition = ".5s ease";
               }, 1);
            } else {
               cardWithModal.classList.add("hidden");

               setTimeout(()=> {
               cardWithModal.style.opacity = "0";
               cardWithModal.style.transition = ".5s ease";
            }, 1);
            }
         });
         // Add Active Close To The Clicked Button
         portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
         tabBtn.classList.add("active");
      });
   });
});


// Open/Close Portfolio modals.

/* =====================================================
   Testimonial Swiper
===================================================== */

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */
window.addEventListener("scroll", ()=> {
   const sueHeader = document.querySelector(".sue-header");

   sueHeader.classList.toggle("shrink", window.scrollY > 0);
})

/* =====================================================
   Bottom navigation menu
===================================================== */
window.addEventListener("scroll", ()=> {
   const navMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.pageYOffset;
   navMenuSections.forEach((navMenuSection)=> {
      let sectionHeight = navMenuSection.offsetHeight;
      let sectionTop = navMenuSection.offsetTop - 50;
      let id = navMenuSection.getAttribute("id");

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
      } else {
         document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
      }
   })
})

// Each bottom navigation menu items active on page scroll.

// Javascript to show bottom navigation menu on home(page load).
window.addEventListener("DOMContentLoaded", ()=> {
   const bottomNav = document.querySelector(".bottom-nav");

   bottomNav.classList.toggle("active", window.scrollY < 10);
})

// Javascript to show/hide bottom navigation menu on home(scroll).

const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
   bottomNav.classList.add("active");
   menuShowBtn.classList.remove("active");

   if(window.scrollY < 10){ 
      menuHideBtn.classList.remove("active");

      function scrollStopped(){
         bottomNav.classList.add("active");
   }
   clearTimeout(navTimeout);
   navTimeout = setTimeout(scrollStopped, 2500);
   }

   if(window.scrollY > 10){ 
      menuHideBtn.classList.add("active");

      function scrollStopped(){
         bottomNav.classList.remove("active");
         menuShowBtn.classList.add("active");
   }
   clearTimeout(navTimeout);
   navTimeout = setTimeout(scrollStopped);
   }
});



// Hide bottom navigation menu on click menu-hide-btn.
menuHideBtn.addEventListener("click", ()=> {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.toggle("active");
   menuShowBtn.classList.toggle("active");
})

menuShowBtn.addEventListener("click", ()=> {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.add("active");
   menuShowBtn.classList.toggle("active");
})

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", ()=> {
   // Change Theme Icon and Theme on Click theme button
   themeBtn.classList.toggle("active-sun-icon");
   document.body.classList.toggle("light-theme");

   // Save Theme Icon and Theme on Click Theme Button
   const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
   const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

   localStorage.setItem("sue-saved-icon", getCurrentIcon());
   localStorage.setItem("sue-saved-theme", getCurrentTheme());
});

// Get saved theme icon and theme on document loaded.
const savedIcon = localStorage.getItem("sue-saved-icon");
const savedTheme = localStorage.getItem("sue-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"] ("active-sun-icon");
   document.body.classList[savedTheme === "light" ? "add" : "remove"] ("light-theme");
})

/* =====================================================
   ScrollReveal JS animations
===================================================== */
ScrollReveal({ 
   reset: true,
   distance: '60px',
   duration: 2500,
   delay: 100
});



// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.
ScrollReveal().reveal('.avatar-img', {delay: 70, origin: 'top'});
ScrollReveal().reveal('.hire-btn-01',  {delay: 50, origin: 'left'});
ScrollReveal().reveal('.avatar-info', {delay: 50, origin: 'top'});
ScrollReveal().reveal('.home-social, .home-scroll-btn',  {delay: 50, origin: 'bottom'});
ScrollReveal().reveal('.about-img',  {delay: 70, origin: 'top'});
ScrollReveal().reveal('.about-info, sue-logo',  {delay: 80, origin: 'bottom'});
ScrollReveal().reveal('.pro-card, .about-buttons',  {delay: 80, origin: 'right', interval:90});
// ScrollReveal().reveal('',  {delay: 50, origin: 'bottom'});

// ScrollReveal().reveal(' .contact-item, .contact-social-links li',  {delay: 50, origin: 'bottom', interval:90});
// ScrollReveal().reveal('.contact-info h3',  {delay: 50, origin: 'bottom', interval: 50});