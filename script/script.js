// Configuration
const CONFIG = {
  configUrl:
    "https://raw.githubusercontent.com/tunglor25/allinone/refs/heads/main/All_in_one.conf",
  appSchemes: {
    shadowrocket: "shadowrocket://add/sub?url=",
    quantumult: "quantumult://import?url=",
    surge: "surge:///install-config?url=",
    loon: "loon://import?url=",
    clash: "clash://install-config?url=",
  },
  features: [
    { name: "YouTube Premium", status: "active" },
    { name: "Spotify Premium", status: "active" },
    { name: "TikTok Premium", status: "active" },
    { name: "SoundCloud Premium", status: "active" },
    { name: "PicsArt Gold", status: "active" },
    { name: "CapCut Pro", status: "active" },
    { name: "Locket Gold", status: "active" },
    { name: "Bilibili No ADS", status: "active" },
  ],
};

// DOM Elements
const elements = {
  mainDownloadBtn: document.getElementById("mainDownloadBtn"),
  downloadQrBtn: document.getElementById("downloadQrBtn"),
  copyUrlBtn: document.getElementById("copyUrlBtn"),
  configUrl: document.getElementById("configUrl"),
  updateDate: document.getElementById("updateDate"),
  userCount: document.getElementById("userCount"),
  notification: document.getElementById("notification"),
};

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  setupEventListeners();
  startAnimations();
});

function initializeApp() {
  // Set current date
  const now = new Date();
  elements.updateDate.textContent = now.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Set random user count (for demo)
  elements.userCount.textContent = Math.floor(Math.random() * 2000) + 1000;

  // Initialize feature cards
  initializeFeatureCards();
}

function setupEventListeners() {
  // Main download button
  elements.mainDownloadBtn.addEventListener("click", handleMainDownload);

  // App buttons
  document.querySelectorAll(".app-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const app = this.dataset.app;
      openAppScheme(app);
    });
  });

  // QR download button
  elements.downloadQrBtn.addEventListener("click", downloadQRCode);

  // Copy URL button
  elements.copyUrlBtn.addEventListener("click", copyConfigUrl);

  // Feature cards click
  document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("click", function () {
      const app = this.dataset.app;
      showFeatureInfo(app);
    });
  });
}

function startAnimations() {
  // Add loading animation to container
  const container = document.querySelector(".container");
  container.style.opacity = "0";
  container.style.transform = "translateY(30px)";

  setTimeout(() => {
    container.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  }, 300);

  // Animate feature cards sequentially
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 300 + index * 100);
  });
}

function initializeFeatureCards() {
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

function handleMainDownload() {
  if (isMobile()) {
    // Try to open Shadowrocket first
    openAppScheme("shadowrocket");
  } else {
    // For desktop, download config file
    downloadConfigFile();
  }
}

function openAppScheme(app) {
  const scheme = CONFIG.appSchemes[app];
  if (!scheme) {
    showNotification("Ứng dụng không được hỗ trợ", "error");
    return;
  }

  const url = scheme + encodeURIComponent(CONFIG.configUrl);

  // Create iframe for app scheme
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = url;
  document.body.appendChild(iframe);

  setTimeout(() => {
    document.body.removeChild(iframe);

    // Show fallback if app not installed
    setTimeout(() => {
      if (!document.hidden) {
        showNotification(
          `Không thể mở ${app}. Vui lòng cài đặt ứng dụng hoặc sử dụng QR code.`,
          "error"
        );
      }
    }, 1000);
  }, 500);

  showNotification(`Đang mở ${app}...`);
}

function downloadConfigFile() {
  const link = document.createElement("a");
  link.href = CONFIG.configUrl;
  link.download = "ShadowRocket_Ultimate.conf";
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showNotification("Đã tải xuống file cấu hình");
}

function downloadQRCode() {
  const qrImage = document.querySelector(".qr-code");
  const link = document.createElement("a");

  // Create canvas to download QR code
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();

  img.crossOrigin = "Anonymous";
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    link.href = canvas.toDataURL("image/png");
    link.download = "shadow-rocket-qr-code.png";
    link.click();

    showNotification("Đã tải xuống QR Code");
  };

  img.src = qrImage.src;
}

function copyConfigUrl() {
  navigator.clipboard
    .writeText(CONFIG.configUrl)
    .then(() => {
      showNotification("Đã copy URL cấu hình");

      // Visual feedback
      elements.copyUrlBtn.innerHTML = '<i class="fas fa-check"></i>';
      elements.copyUrlBtn.style.background = "var(--success)";

      setTimeout(() => {
        elements.copyUrlBtn.innerHTML = '<i class="fas fa-copy"></i>';
        elements.copyUrlBtn.style.background = "var(--primary)";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      showNotification("Lỗi khi copy URL", "error");
    });
}

function showFeatureInfo(app) {
  const feature = CONFIG.features.find((f) =>
    f.name.toLowerCase().includes(app)
  );
  if (feature) {
    showNotification(`${feature.name} - Đang hoạt động ✓`);
  }
}

// Enhanced notification system
let notificationQueue = [];
let isNotificationShowing = false;

function showNotification(message, type = "success", duration = 3000) {
  // Thêm vào queue
  notificationQueue.push({ message, type, duration });

  // Nếu chưa có notification nào đang hiển thị, hiển thị ngay
  if (!isNotificationShowing) {
    processNotificationQueue();
  }
}

function processNotificationQueue() {
  if (notificationQueue.length === 0) {
    isNotificationShowing = false;
    return;
  }

  isNotificationShowing = true;
  const { message, type, duration } = notificationQueue.shift();

  showSingleNotification(message, type, duration);
}

function showSingleNotification(message, type, duration) {
  const notification = elements.notification;
  if (!notification) return;

  const icon = notification.querySelector(".notification-icon");
  const text = notification.querySelector(".notification-text");

  if (!icon || !text) return;

  // Set content
  text.textContent = message;
  icon.className = "notification-icon " + getNotificationIcon(type);

  // Set type
  notification.className = "notification " + type;

  // Show notification
  notification.classList.remove("hiding");
  notification.classList.add("show");

  // Auto hide sau duration
  setTimeout(() => {
    hideNotification(() => {
      // Process next notification in queue
      setTimeout(processNotificationQueue, 300);
    });
  }, duration);
}

function hideNotification(callback) {
  const notification = elements.notification;
  if (!notification) {
    callback?.();
    return;
  }

  notification.classList.remove("show");
  notification.classList.add("hiding");

  setTimeout(() => {
    const text = notification.querySelector(".notification-text");
    const icon = notification.querySelector(".notification-icon");

    if (text) text.textContent = "";
    if (icon) icon.className = "notification-icon";

    notification.classList.remove("hiding");
    callback?.();
  }, 300);
}

function getNotificationIcon(type) {
  const icons = {
    success: "fas fa-check-circle",
    error: "fas fa-exclamation-circle",
    warning: "fas fa-exclamation-triangle",
    info: "fas fa-info-circle",
  };
  return icons[type] || icons.info;
}

// Manual close function (tùy chọn)
function setupNotificationClose() {
  const notification = elements.notification;
  if (notification) {
    notification.addEventListener("click", function () {
      hideNotification(processNotificationQueue);
    });

    // Thêm close button (tùy chọn)
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 4px;
            margin-left: 10px;
            opacity: 0.7;
            transition: opacity 0.2s ease;
        `;
    closeBtn.addEventListener("mouseenter", () => {
      closeBtn.style.opacity = "1";
    });
    closeBtn.addEventListener("mouseleave", () => {
      closeBtn.style.opacity = "0.7";
    });
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      hideNotification(processNotificationQueue);
    });

    notification.appendChild(closeBtn);
  }
}

function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );
}

// Additional interactive effects
document.addEventListener("mousemove", function (e) {
  const particles = document.querySelectorAll(".particle");
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  particles.forEach((particle, index) => {
    const speed = (index + 1) * 0.0002;
    const x = (mouseX - 0.5) * speed * 100;
    const y = (mouseY - 0.5) * speed * 100;

    particle.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Performance optimization
let ticking = false;
window.addEventListener("scroll", function () {
  if (!ticking) {
    requestAnimationFrame(function () {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector(".animated-bg");
      parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      ticking = false;
    });
    ticking = true;
  }
});

// Service Worker for PWA (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (registration) {
        console.log("SW registered: ", registration);
      })
      .catch(function (registrationError) {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Enhanced floating icons interaction
function enhanceFloatingIcons() {
  const floatingIcons = document.querySelectorAll(".floating-icon");

  floatingIcons.forEach((icon) => {
    // Thêm tooltip
    icon.addEventListener("mouseenter", function () {
      const tooltip = this.getAttribute("data-tooltip");
      if (tooltip) {
        showFloatingTooltip(this, tooltip);
      }
    });

    // Randomize animation delay khi load
    const randomDelay = Math.random() * 5;
    icon.style.animationDelay = `${randomDelay}s`;
  });
}

function showFloatingTooltip(icon, text) {
  // Tạo tooltip
  const tooltip = document.createElement("div");
  tooltip.className = "floating-tooltip";
  tooltip.textContent = text;
  tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        white-space: nowrap;
        pointer-events: none;
        z-index: 1000;
        transform: translateY(-100%);
    `;

  document.body.appendChild(tooltip);

  // Position tooltip
  const rect = icon.getBoundingClientRect();
  tooltip.style.left = `${
    rect.left + rect.width / 2 - tooltip.offsetWidth / 2
  }px`;
  tooltip.style.top = `${rect.top - 10}px`;

  // Remove tooltip sau 2s
  setTimeout(() => {
    if (tooltip.parentNode) {
      tooltip.parentNode.removeChild(tooltip);
    }
  }, 2000);
}

// Random user count generator với hiệu ứng đặc biệt
function startRandomUserCounter() {
  const userCountElement = document.getElementById("userCount");
  let currentCount = 1258;
  const MAX_COUNT = 100000000; // 100 triệu

  // Các mốc quan trọng
  const MILESTONES = {
    1000: "1K",
    10000: "10K",
    100000: "100K",
    1000000: "1Tr",
    5000000: "5Tr",
    10000000: "10Tr",
    50000000: "50Tr",
    100000000: "100Tr",
  };

  let lastMilestone = 0;

  // Cập nhật mỗi 1 giây
  setInterval(() => {
    // Tăng dần người dùng từ 50->100 người mỗi 10s
    const randomIncrement = Math.floor(Math.random() * 50) + 50;

    if (currentCount + randomIncrement <= MAX_COUNT) {
      const targetCount = currentCount + randomIncrement;

      // Kiểm tra mốc quan trọng
      checkMilestone(currentCount, targetCount);

      // Hiệu ứng tăng dần
      animateCounter(userCountElement, currentCount, targetCount, 800);

      currentCount = targetCount;
    } else {
      // Đạt tối đa - hiệu ứng đặc biệt
      if (currentCount < MAX_COUNT) {
        userCountElement.textContent = formatNumberCompact(MAX_COUNT);
        showMilestoneCelebration("100Tr", "ĐẠT 100 TRIỆU NGƯỜI DÙNG! 🎉");
        currentCount = MAX_COUNT;
      }
    }
  }, 5000);
}

// Kiểm tra và thông báo mốc quan trọng
function checkMilestone(oldCount, newCount) {
  const MILESTONES = [
    1000, 10000, 100000, 1000000, 5000000, 10000000, 50000000, 100000000,
  ];

  for (const milestone of MILESTONES) {
    if (oldCount < milestone && newCount >= milestone) {
      const milestoneText = formatNumberCompact(milestone);
      showMilestoneCelebration(
        milestoneText,
        `ĐẠT MỐC ${milestoneText} NGƯỜI DÙNG! 🚀`
      );
      break;
    }
  }
}

// Hiệu ứng celebration khi đạt mốc
function showMilestoneCelebration(milestone, message) {
  console.log(`🎉 ${message}`);

  // Tạo hiệu ứng celebration
  const celebration = document.createElement("div");
  celebration.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #6366f1, #ec4899);
        color: white;
        padding: 20px 40px;
        border-radius: 15px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 0 50px rgba(99, 102, 241, 0.8);
        animation: pop-in 0.5s ease-out;
    `;

  celebration.textContent = message;
  document.body.appendChild(celebration);

  // Auto remove sau 3 giây
  setTimeout(() => {
    celebration.style.animation = "pop-out 0.5s ease-in forwards";
    setTimeout(() => {
      if (celebration.parentNode) {
        celebration.parentNode.removeChild(celebration);
      }
    }, 500);
  }, 3000);
}

// Thêm CSS animation cho celebration
const celebrationStyles = document.createElement("style");
celebrationStyles.textContent = `
    @keyframes pop-in {
        0% { 
            transform: translate(-50%, -50%) scale(0.5); 
            opacity: 0; 
        }
        100% { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 1; 
        }
    }
    
    @keyframes pop-out {
        0% { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 1; 
        }
        100% { 
            transform: translate(-50%, -50%) scale(0.5); 
            opacity: 0; 
        }
    }
`;
document.head.appendChild(celebrationStyles);

// Hiệu ứng animate counter với format compact
function animateCounter(element, start, end, duration) {
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(start + (end - start) * easeOutQuart);

    element.textContent = formatNumberCompact(currentValue);

    // Hiệu ứng màu sắc khi số thay đổi
    if (progress < 0.5) {
      element.style.color = "#10b981";
      element.style.textShadow = "0 0 10px #10b981";
    } else {
      element.style.color = "";
      element.style.textShadow = "";
    }

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

// Format số compact với hỗ trợ tiếng Việt
function formatNumberCompact(num) {
  if (num >= 1000000000) {
    const billions = num / 1000000000;
    return billions >= 10
      ? Math.floor(billions) + "T"
      : billions.toFixed(1).replace(/\.0$/, "") + "T";
  } else if (num >= 1000000) {
    const millions = num / 1000000;
    return millions >= 10
      ? Math.floor(millions) + "Tr"
      : millions.toFixed(1).replace(/\.0$/, "") + "Tr";
  } else if (num >= 1000) {
    const thousands = num / 1000;
    return thousands >= 10
      ? Math.floor(thousands) + "K"
      : thousands.toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return num.toString();
  }
}

// ===== WEBSITE SECURITY PROTECTION =====
document.addEventListener("DOMContentLoaded", function () {
  // Chặn mở Developer Tools (F12, Ctrl+Shift+I, etc.)
  disableDevTools();

  // Chặn bôi đen text
  disableTextSelection();

  // Chặn chuột phải
  disableRightClick();

  // Chặn kéo thả ảnh
  disableImageDrag();

  // Chặn phím tắt
  disableShortcuts();

  // Anti-debugging protection
  antiDebugging();
});

// Security
// ===== WEBSITE SECURITY PROTECTION - FIXED VERSION =====

let securityAlertActive = false;
let securityAlertCooldown = false;
let securityAlertCount = 0;
const MAX_ALERTS_PER_MINUTE = 2;

// Security Alert Manager
const SecurityManager = {
    currentAlert: null,
    alertQueue: [],
    
    showAlert(message) {
        // Kiểm tra cooldown và số lượng cảnh báo
        if (securityAlertCooldown || securityAlertCount >= MAX_ALERTS_PER_MINUTE) {
            return;
        }

        // Nếu đang có alert, đóng nó trước
        if (this.currentAlert) {
            this.closeAlert(this.currentAlert);
        }

        securityAlertCount++;
        securityAlertCooldown = true;
        
        // Reset counter sau 1 phút
        setTimeout(() => {
            securityAlertCount = 0;
        }, 60000);
        
        // Cooldown 5 giây giữa các cảnh báo
        setTimeout(() => {
            securityAlertCooldown = false;
        }, 5000);

        this.createAlert(message);
    },

    createAlert(message) {
        // Đóng alert cũ nếu có
        if (this.currentAlert) {
            this.closeAlert(this.currentAlert);
        }

        const alertOverlay = document.createElement("div");
        alertOverlay.className = "security-alert-overlay";
        alertOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            font-family: 'JetBrains Mono', monospace;
            text-align: center;
            backdrop-filter: blur(15px);
        `;

        alertOverlay.innerHTML = `
            <div class="security-alert-content" style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 2.5rem; border-radius: 20px; max-width: 450px; margin: 1rem; border: 2px solid rgba(255,255,255,0.1); box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🛡️</div>
                <h2 style="color: white; margin-bottom: 1rem; font-size: 1.4rem; font-weight: 700;">
                    BẢO MẬT SHADOW ROCKET
                </h2>
                <p style="color: #e2e8f0; margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.5;">
                    ${message}
                </p>
                <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
                    <p style="color: #cbd5e1; font-size: 0.8rem; margin: 0;">
                        🔒 Hệ thống bảo mật tự động kích hoạt
                    </p>
                </div>
                <button onclick="SecurityManager.closeCurrentAlert()" 
                        style="background: white; color: #6366f1; border: none; padding: 12px 30px; 
                               border-radius: 10px; font-weight: 700; cursor: pointer; font-family: 'JetBrains Mono', monospace;
                               font-size: 0.9rem; transition: all 0.3s ease;">
                    ĐÃ HIỂU • ĐÓNG
                </button>
            </div>
        `;

        document.body.appendChild(alertOverlay);
        this.currentAlert = alertOverlay;

        // Auto remove sau 6 giây
        setTimeout(() => {
            this.closeCurrentAlert();
        }, 6000);

        console.info("🔒 Security Alert:", message);
    },

    closeCurrentAlert() {
        if (this.currentAlert) {
            this.closeAlert(this.currentAlert);
            this.currentAlert = null;
        }
    },

    closeAlert(alertElement) {
        if (alertElement && alertElement.parentNode) {
            alertElement.style.opacity = '0';
            alertElement.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                if (alertElement.parentNode) {
                    alertElement.parentNode.removeChild(alertElement);
                }
            }, 300);
        }
    }
};

// Global close function
window.closeSecurityAlert = function(element) {
    SecurityManager.closeCurrentAlert();
};

// 1. Chặn Developer Tools (Ít nhạy cảm hơn)
function disableDevTools() {
    // Chỉ cảnh báo với các phím tắt quan trọng
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J')) {
            e.preventDefault();
            SecurityManager.showAlert('Tính năng Developer Tools đã bị vô hiệu hóa.');
            return false;
        }
    });
}

// 2. Chặn bôi đen text (Chỉ cảnh báo khi cố copy config)
function disableTextSelection() {
    // CSS để chặn selection (im lặng)
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
        }
        
        input, textarea, .config-url {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
    `;
    document.head.appendChild(style);
    
    // Chỉ cảnh báo khi cố copy config URL
    const configUrl = document.getElementById('configUrl');
    if (configUrl) {
        configUrl.addEventListener('copy', function(e) {
            SecurityManager.showAlert('Vui lòng sử dụng nút "Copy" để sao chép URL cấu hình.');
            e.preventDefault();
            return false;
        });
    }
}

// 3. Chặn chuột phải (Chỉ cảnh báo trên ảnh và config)
// Ultimate Right Click Protection
class RightClickBlocker {
    constructor() {
        this.init();
    }
    
    init() {
        this.blockContextMenu();
        this.blockKeyboardContext();
        this.blockLongPress();
        this.blockInspectElement();
        this.blockImageContext();
        this.addProtectionCSS();
    }
    
    blockContextMenu() {
        // Block right click context menu
        document.addEventListener('contextmenu', this.handleContextMenu.bind(this));
        
        // Block right click on specific elements
        document.addEventListener('mousedown', this.handleMouseDown.bind(this));
    }
    
    handleContextMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        SecurityManager.showAlert('🚫 Chuột phải đã bị vô hiệu hóa để bảo vệ nội dung hệ thống.');
        return false;
    }
    
    handleMouseDown(e) {
        if (e.button === 2) { // Right click
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }
    
    blockKeyboardContext() {
        // Block Shift+F10 and other context menu shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F10' && e.shiftKey || 
                (e.ctrlKey && e.key === 'u') ||
                (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
                e.stopPropagation();
                SecurityManager.showAlert('🚫 Phím tắt này đã bị vô hiệu hóa.');
                return false;
            }
        });
    }
    
    blockLongPress() {
        let touchTimer;
        let touchStartTime;
        
        document.addEventListener('touchstart', (e) => {
            touchStartTime = Date.now();
            touchTimer = setTimeout(() => {
                // Long press detected
                e.preventDefault();
                SecurityManager.showAlert('🚫 Nhấn giữ đã bị vô hiệu hóa.');
            }, 500);
        }, { passive: false });
        
        document.addEventListener('touchend', (e) => {
            clearTimeout(touchTimer);
            if (Date.now() - touchStartTime > 500) {
                e.preventDefault();
            }
        }, { passive: false });
        
        document.addEventListener('touchmove', () => {
            clearTimeout(touchTimer);
        }, { passive: false });
    }
    
    blockInspectElement() {
        // Block F12, Ctrl+Shift+I, etc.
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                (e.ctrlKey && e.key === 'u')) {
                e.preventDefault();
                e.stopPropagation();
                SecurityManager.showAlert('🚫 Công cụ developer không được phép sử dụng.');
                return false;
            }
        });
    }
    
    blockImageContext() {
        // Special protection for images
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.setAttribute('draggable', 'false');
                img.style.pointerEvents = 'none';
                
                // Add protection overlay for images
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    cursor: default;
                `;
                
                if (img.parentElement) {
                    img.parentElement.style.position = 'relative';
                    img.parentElement.appendChild(overlay);
                }
            });
        });
    }
    
    addProtectionCSS() {
        const style = document.createElement('style');
        style.textContent = `
            /* Ultimate Protection CSS */
            html, body, * {
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
                -webkit-touch-callout: none !important;
                -webkit-tap-highlight-color: transparent !important;
                cursor: default !important;
            }
            
            /* Allow selection only for inputs */
            input, textarea, [contenteditable="true"] {
                -webkit-user-select: text !important;
                -moz-user-select: text !important;
                -ms-user-select: text !important;
                user-select: text !important;
                cursor: text !important;
            }
            
            /* Disable image dragging and context */
            img {
                -webkit-user-drag: none !important;
                -khtml-user-drag: none !important;
                -moz-user-drag: none !important;
                -o-user-drag: none !important;
                user-drag: none !important;
                pointer-events: none !important;
            }
            
            /* Hide context menus */
            * {
                -webkit-context-menu: none !important;
                -moz-context-menu: none !important;
                -ms-context-menu: none !important;
                context-menu: none !important;
            }
            
            /* Disable text selection feedback */
            ::selection {
                background: transparent !important;
            }
            ::-moz-selection {
                background: transparent !important;
            }
            
            /* Disable blue highlight on tap (mobile) */
            * {
                -webkit-tap-highlight-color: transparent !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize right click blocker
let rightClickBlocker = null;

// 4. Chặn kéo thả ảnh (Im lặng)
function disableImageDrag() {
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.getElementsByTagName('img');
        for (let img of images) {
            img.setAttribute('draggable', 'false');
        }
    });
}

// 5. Chặn phím tắt (Chỉ các phím quan trọng)
function disableShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Chỉ chặn Ctrl+U (View Source) và Print Screen
        if ((e.ctrlKey && e.key === 'u') || e.key === 'PrintScreen') {
            e.preventDefault();
            SecurityManager.showAlert('Tính năng này không khả dụng để bảo vệ nội dung hệ thống.');
            return false;
        }
    });
}

// 6. Anti-debugging (Giảm độ nhạy)
function antiDebugging() {
    // Bỏ phần debugger detection (quá nhạy)
    // Giữ lại console protection nhưng im lặng
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;
    
    console.log = function(...args) {
        // Silent block - không cảnh báo
        originalLog.apply(console, args);
    };
    
    console.warn = function(...args) {
        // Silent block - không cảnh báo
        originalWarn.apply(console, args);
    };
    
    console.error = function(...args) {
        // Silent block - không cảnh báo
        originalError.apply(console, args);
    };
}

// 8. Bảo vệ mã nguồn
function protectSourceCode() {
    // Xóa source map references
    const scripts = document.getElementsByTagName('script');
    for (let script of scripts) {
        if (script.src && script.src.includes('.map')) {
            script.remove();
        }
    }
}

// 9. Anti-copy protection cho config URL
function protectConfigURL() {
    const configUrlElement = document.getElementById('configUrl');
    if (configUrlElement) {
        configUrlElement.addEventListener('copy', function(e) {
            SecurityManager.showAlert('Vui lòng sử dụng nút "Copy" để sao chép URL cấu hình.');
            e.preventDefault();
            return false;
        });
        
        configUrlElement.addEventListener('cut', function(e) {
            e.preventDefault();
            return false;
        });
    }
}

// 10. Bảo vệ toàn diện khi load trang
window.addEventListener('load', function() {
    protectSourceCode();
    protectConfigURL();
    addSecurityWatermark();
});

// 11. Thêm watermark bảo mật
function addSecurityWatermark() {
    // Kiểm tra xem watermark đã tồn tại chưa
    if (document.querySelector('.security-watermark')) {
        return;
    }
    
    const watermark = document.createElement('div');
    watermark.className = 'security-watermark';
    watermark.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.7);
        color: #94a3b8;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.7rem;
        font-family: 'JetBrains Mono', monospace;
        z-index: 9999;
        pointer-events: none;
        user-select: none;
    `;
    watermark.textContent = '🔒 TungLor Security v2.5';
    document.body.appendChild(watermark);
}

// Khởi tạo bảo mật
document.addEventListener('DOMContentLoaded', function() {
    // Chỉ khởi tạo một lần
    if (window.securityInitialized) return;
    window.securityInitialized = true;
    
    disableDevTools();
    disableTextSelection();
    disableRightClick();
    disableImageDrag();
    disableShortcuts();
    antiDebugging();
});
// Khởi tạo bảo mật - Phiên bản mới
function initializeSecurity() {
    // Chỉ khởi tạo một lần
    if (window.securityInitialized) return;
    window.securityInitialized = true;
    
    console.log('🛡️ Initializing Security System...');
    
    // Khởi tạo Right Click Blocker
    rightClickBlocker = new RightClickBlocker();
    
    // Thêm CSS bảo vệ
    addSecurityCSS();
    
    // Các biện pháp bảo mật khác
    disableDevTools();
    disableTextSelection();
    disableShortcuts();
    antiDebugging();
    
    console.log('🛡️ Security System Activated');
}

// Cập nhật hàm DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSecurity();
});

// Cập nhật hàm initializeApp
function initializeApp() {
    // Kiểm tra nếu đã qua trang loading
    if (!sessionStorage.getItem('appInitialized')) {
        const container = document.querySelector('.container');
        if (container) {
            container.style.opacity = '0';
            container.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
                sessionStorage.setItem('appInitialized', 'true');
            }, 300);
        }
    }

    // Set current date
    const now = new Date();
    if (elements.updateDate) {
        elements.updateDate.textContent = now.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Khởi tạo bộ đếm người dùng
    startRandomUserCounter();

    // Initialize feature cards
    initializeFeatureCards();
    
    // Enhance floating icons
    enhanceFloatingIcons();
    
    // Setup notification system
    setupNotificationClose();
    
    // Security Protection
    protectSourceCode();
    protectConfigURL();
    addSecurityWatermark();
    
    // Đảm bảo security được khởi tạo
    initializeSecurity();
}