<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>🚀 Shadow Rocket Ultimate - Premium Unlock</title>
    <meta
      name="description"
      content="Unlock YouTube Premium, Spotify, TikTok, SoundCloud, PicsArt Gold, CapCut Pro và nhiều hơn nữa"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="assets/icon.png" type="image/png">
    <link rel="stylesheet" href="{{ asset('css/Home_client.css') }}" />
  </head>
  <script>
    // Redirect to loading page nếu chưa xem loading
    if (
      !sessionStorage.getItem("loadingShown") &&
      !window.location.hash.includes("skip-loading")
    ) {
      window.location.href = "loading.html";
      throw new Error("Redirecting to loading..."); // Dừng execution ngay lập tức
    }

    // Clean up sau khi đã load xong
    window.addEventListener("load", function () {
      sessionStorage.setItem("loadingShown", true);
    });
  </script>
  <body>
    <!-- Animated Background -->
    <div class="animated-bg">
      <div class="app-icon youtube">
        <i class="fab fa-youtube"></i>
      </div>
      <div class="app-icon spotify">
        <i class="fab fa-spotify"></i>
      </div>
      <div class="app-icon tiktok">
        <i class="fab fa-tiktok"></i>
      </div>
      <div class="app-icon soundcloud">
        <i class="fab fa-soundcloud"></i>
      </div>
      <div class="app-icon netflix">
        <i class="fas fa-film"></i>
      </div>
      <div class="app-icon discord">
        <i class="fab fa-discord"></i>
      </div>
    </div>
    <!-- Floating Ichos - Enhanced -->
    <div class="floating-icons">
      <i
        class="floating-icon youtube fab fa-youtube"
        data-tooltip="YouTube Premium"
      ></i>
      <i
        class="floating-icon spotify fab fa-spotify"
        data-tooltip="Spotify Premium"
      ></i>
      <i
        class="floating-icon tiktok fab fa-tiktok"
        data-tooltip="TikTok Premium"
      ></i>
      <i
        class="floating-icon soundcloud fab fa-soundcloud"
        data-tooltip="SoundCloud Premium"
      ></i>
      <i
        class="floating-icon picsart fas fa-palette"
        data-tooltip="PicsArt Gold"
      ></i>
      <i
        class="floating-icon capcut fas fa-scissors"
        data-tooltip="CapCut Pro"
      ></i>
      <i
        class="floating-icon locket fas fa-lock"
        data-tooltip="Locket Gold"
      ></i>
      <i
        class="floating-icon bilibili fas fa-b"
        data-tooltip="Bilibili No ADS"
      ></i>

      <!-- Thêm các icon phụ trợ -->
      <i
        class="floating-icon instagram fab fa-instagram"
        data-tooltip="Instagram"
      ></i>
      <i
        class="floating-icon twitter fab fa-twitter"
        data-tooltip="Twitter"
      ></i>
      <i
        class="floating-icon facebook fab fa-facebook"
        data-tooltip="Facebook"
      ></i>
      <i
        class="floating-icon whatsapp fab fa-whatsapp"
        data-tooltip="WhatsApp"
      ></i>
      <i
        class="floating-icon telegram fab fa-telegram"
        data-tooltip="Telegram"
      ></i>
      <i
        class="floating-icon discord fab fa-discord"
        data-tooltip="Discord"
      ></i>
    </div>

    <!-- Floating Icons -->
    <div class="floating-icons">
      <i
        class="floating-icon youtube fab fa-youtube"
        data-tooltip="YouTube Premium"
      ></i>
      <i
        class="floating-icon spotify fab fa-spotify"
        data-tooltip="Spotify Premium"
      ></i>
      <i
        class="floating-icon tiktok fab fa-tiktok"
        data-tooltip="TikTok Premium"
      ></i>
      <i
        class="floating-icon soundcloud fab fa-soundcloud"
        data-tooltip="SoundCloud Premium"
      ></i>
      <i
        class="floating-icon picsart fas fa-palette"
        data-tooltip="PicsArt Gold"
      ></i>
      <i
        class="floating-icon capcut fas fa-scissors"
        data-tooltip="CapCut Pro"
      ></i>
      <i
        class="floating-icon locket fas fa-lock"
        data-tooltip="Locket Gold"
      ></i>
    </div>

    <script src="script/script.js"></script>
  </body>
</html>