// ===== SECURITY MEASURES =====
// Disable right click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

// Disable keyboard shortcuts and F12
document.addEventListener('keydown', function(e) {
  // Disable F12
  if (e.key === 'F12' || e.keyCode === 123) {
    e.preventDefault();
    return false;
  }
  
  // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
    e.preventDefault();
    return false;
  }
  
  // Disable Ctrl+U (View Source)
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    return false;
  }
});

// Disable console methods
(function() {
  const noop = function() {};
  console.log = noop;
  console.error = noop;
  console.warn = noop;
  console.info = noop;
  console.debug = noop;
  console.dir = noop;
  console.table = noop;
  console.trace = noop;
})();

// Anti-debugging protection
let checkDevTools = function() {};
checkDevTools.toString = function() {
  setInterval(function() {
    debugger;
  }, 100);
};
setTimeout('( ' + checkDevTools + ' )()');

// Detect DevTools opening
(function() {
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function() {
      // DevTools detected - redirect or take action
      window.location.reload();
    }
  });
  console.log(element);
})();

// ===== MOBILE MENU FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav = event.target.closest(".nav-container");
      if (!isClickInsideNav && mobileMenu.classList.contains("active")) {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });
  }
});

// Additional security layer - prevent selection and copy
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  document.body.style.mozUserSelect = 'none';
  document.body.style.msUserSelect = 'none';
});

// Prevent drag and drop
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
  return false;
});

document.addEventListener('drop', function(e) {
  e.preventDefault();
  return false;
});

// Final security check on load
window.addEventListener('load', function() {
  // Double protection for console
  if (typeof console !== "undefined") {
    console.clear();
    const noop = () => {};
    ['log', 'error', 'warn', 'info', 'debug', 'dir', 'table'].forEach(method => {
      console[method] = noop;
    });
  }
});