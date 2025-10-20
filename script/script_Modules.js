// Dữ liệu modules với link tải và link copy riêng biệt
const modulesData = [
    {
        id: 1,
        name: "YouTube Premium Unlocker",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
        description: "Mở khóa YouTube Premium hoàn toàn miễn phí - không quảng cáo, phát nhạc nền, và tải video chất lượng cao. Tương thích với mọi thiết bị iOS và Android.",
        status: "new", // new, broken, normal
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Youtube-Premium/refs/heads/main/YouTubePremiumV3.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Youtube-Premium/refs/heads/main/YouTubePremiumV3.module"
    },
    {
        id: 2,
        name: "Spotify Premium Unlocker",
        logo: "https://static.vecteezy.com/system/resources/previews/023/986/728/non_2x/spotify-logo-spotify-logo-transparent-spotify-icon-transparent-free-free-png.png",
        description: "Trải nghiệm Spotify Premium không giới hạn - nghe nhạc không quảng cáo, tải xuống, và chất lượng âm thanh cao. Hỗ trợ tất cả tính năng premium.",
        status: "broken", // new, broken, normal
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Spotify/refs/heads/main/SpotifyPremium.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Spotify/refs/heads/main/SpotifyPremium.module"
    },
    {
        id: 3,
        name: "Bilibili No ADS",
        logo: "https://img.icons8.com/?size=512&id=5E24fZ9ORelo&format=png",
        description: "Xem anime, video không quảng cáo, tải xuống chất lượng cao. Trải nghiệm Bilibili mượt mà không bị gián đoạn bởi quảng cáo.",
        status: "normal",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Bilibili-No-ADS/refs/heads/main/Bilibili%20No%20Ads",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Bilibili-No-ADS/refs/heads/main/Bilibili%20No%20Ads"
    },
    {
        id: 4,
        name: "Rổ Phim",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvthkVAyXsOTg2F6mz4PnKbtrXAY7DaLh7rg&s",
        description: "Lên VIP rổ phim, xem video chất lượng cao, tải xuống chất lượng cao. Tăng thêm xu.",
        status: "normal",
        downloadLink: "https://api.dabeecao.org/data/shadowrocket/module/rpx.module",
        copyLink: "https://api.dabeecao.org/data/shadowrocket/module/rpx.module"
    },
    {
        id: 5,
        name: "Picsart Premium Unlocker",
        logo: "https://static.vecteezy.com/system/resources/previews/052/925/023/non_2x/picsart-logo-on-a-transparent-background-free-png.png",
        description: "Mở khóa Picsart Premium - chỉnh sửa ảnh chuyên nghiệp với tất cả hiệu ứng và công cụ cao cấp. Không giới hạn tính năng.",
        status: "new",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/Picsart%20Premium.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/Picsart%20Premium.module"
    },
    {
        id: 6,
        name: "SoundCloud Plus Unlocker",
        logo: "https://logos-world.net/wp-content/uploads/2020/11/SoundCloud-Logo-2008.png",
        description: "Trải nghiệm SoundCloud Plus - nghe nhạc không giới hạn, tải xuống và chất lượng âm thanh tốt nhất. Tương thích mọi phiên bản.",
        status: "normal",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/SoundCloudPlus/refs/heads/main/soundcloudplus.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/SoundCloudPlus/refs/heads/main/soundcloudplus.module"
    },
    {
        id: 7,
        name: "Locket Gold Unlocker",
        logo: "https://ineqe.com/wp-content/uploads/2022/02/locket_app_icon-1024x1024.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
        description: "Mở khóa Locket Gold V8 với tất cả tính năng premium. Widget đẹp, không giới hạn ảnh và tính năng độc quyền.",
        status: "new",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Locket/refs/heads/main/LocketGold-V9.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Locket/refs/heads/main/LocketGold-V9.module"
    },
    {
        id: 8,
        name: "3 IN 1 (Locket, Youtube, Spotify)",
        logo: "https://cdn.freebiesupply.com/logos/large/2x/calgonit-3-in-1-logo-png-transparent.png",
        description: "Một link, mở khóa trải nghiệm mượt mà. Gói combo 3 tính năng premium trong một module duy nhất.",
        status: "new",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/3in1%20-%20Nightmarket%20Server",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/3in1%20-%20Nightmarket%20Server"
    },
    {
        id: 9,
        name: "5 in 1 (YouTube, Spotify, SoundCloud, Locket, Truecaller)",
        logo: "https://png.pngtree.com/png-vector/20240103/ourmid/pngtree-5-in-1-3d-market-png-image_11248626.png",
        description: "Gói script unlock premium cho nhiều app: YouTube, Spotify, SoundCloud, Locket, Truecaller. Tiết kiệm thời gian cài đặt.",
        status: "normal",
        downloadLink: "https://raw.githubusercontent.com/VthongVthongVthong/shadow/refs/heads/main/5in1.module",
        copyLink: "https://raw.githubusercontent.com/VthongVthongVthong/shadow/refs/heads/main/5in1.module"
    },
    {
        id: 10,
        name: "All Star (5 in 1)",
        logo: "https://www.shutterstock.com/image-vector/all-star-sport-modern-template-600nw-2468935571.jpg",
        description: "Tổng hợp 5 ứng dụng premium: VSCO, PicsArt, Alight Motion, Spotify, Wink. Giải pháp toàn diện cho nhu cầu giải trí.",
        status: "normal",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/All%20Star.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/All%20Star.module"
    },
    {
        id: 11,
        name: "Vivacut Premium Unlocker",
        logo: "https://play-lh.googleusercontent.com/DdSnM572e_x-1GwPL-vXsvq5C9H2W3EwRgAfXDemp5696ehJZBu3aQyXolW6hEQCBHOf",
        description: "Mở khóa Vivacut Premium cho chỉnh sửa video chuyên nghiệp. Tất cả hiệu ứng và công cụ cao cấp không giới hạn.",
        status: "new",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/Vivacut.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/Vivacut.module"
    },
    {
        id: 12,
        name: "VSCO Premium Unlocker",
        logo: "https://1000logos.net/wp-content/uploads/2022/09/VSCO-Emblem.png",
        description: "Mở khóa VSCO Premium với tất cả filter và tính năng chỉnh sửa ảnh cao cấp. Không giới hạn preset đẹp.",
        status: "normal",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/VSCO%20Premium.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/VSCO%20Premium.module"
    },
    {
        id: 13,
        name: "Alight Motion Premium Unlocker",
        logo: "https://logos-world.net/wp-content/uploads/2024/01/Alight-Motion-Logo.png",
        description: "Mở khóa Alight Motion Premium cho animation và VFX chuyên nghiệp. Tất cả template và hiệu ứng cao cấp.",
        status: "new",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/Alight%20Motion.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/Alight%20Motion.module"
    },
    {
        id: 14,
        name: "Locket Gold DNS",
        logo: "https://ineqe.com/wp-content/uploads/2022/02/locket_app_icon-1024x1024.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
        description: "DNS LOCKET GOLD - GIỮ GOLD. Cấu hình DNS chuyên dụng để duy trì tính năng Locket Gold ổn định lâu dài.",
        status: "new",
        downloadLink: "https://download1478.mediafire.com/uu56hzyqvq8gjvluWfDm9XY6VV7jb-4am9Ge-VYa6ql2KS0VQLdcv_ihS6t8AjNBxdAOJviBCYfhN4gt_CXycx39EigyLL2117TPmbPKJO-OVwP_5YcDqoQhemuVqxBcJsLGzAC0_D7YKJUqPZWFbDRMtR1_Nc8HAF93KHrzBhn0_TA/4qgr8dlx65qwfyv/LocketGoldDNS-+Nightmarket.mobileconfig",
        copyLink: "https://download1478.mediafire.com/uu56hzyqvq8gjvluWfDm9XY6VV7jb-4am9Ge-VYa6ql2KS0VQLdcv_ihS6t8AjNBxdAOJviBCYfhN4gt_CXycx39EigyLL2117TPmbPKJO-OVwP_5YcDqoQhemuVqxBcJsLGzAC0_D7YKJUqPZWFbDRMtR1_Nc8HAF93KHrzBhn0_TA/4qgr8dlx65qwfyv/LocketGoldDNS-+Nightmarket.mobileconfig"
    },
    {
        id: 15,
        name: "TrueCaller Premium Unlocker",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/TrueCaller_Icon.png",
        description: "Mở khóa TrueCaller với tất cả tính năng premium: nhận diện số lạ, chặn spam, và các tính năng bảo mật nâng cao.",
        status: "new",
        downloadLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/TrueCaller.module",
        copyLink: "https://raw.githubusercontent.com/NightmarketServer/Shadowrocket-Module/refs/heads/main/Module/TrueCaller.module"
    }
];

// Hàm phát hiện thiết bị
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Hàm mở link trong ShadowRocket
function openInShadowRocket(url) {
    // Tạo URL scheme cho ShadowRocket
    const shadowrocketUrl = `shadowrocket://install?url=${encodeURIComponent(url)}`;
    
    // Thử mở ShadowRocket
    window.location.href = shadowrocketUrl;
    
    // Fallback: Nếu không mở được ShadowRocket sau 1 giây, mở link download bình thường
    setTimeout(() => {
        if (!document.hidden) {
            window.location.href = url;
        }
    }, 1000);
}

// Hàm tải file trên máy tính
function downloadFileOnPC(url, filename) {
    // Sử dụng fetch để lấy file và tạo blob URL
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            // Tạo blob URL
            const blobUrl = window.URL.createObjectURL(blob);
            
            // Tạo thẻ a để tải xuống
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = filename || 'module.module';
            document.body.appendChild(a);
            a.click();
            
            // Dọn dẹp
            window.URL.revokeObjectURL(blobUrl);
            document.body.removeChild(a);
        })
        .catch(error => {
            console.error('Download failed:', error);
            // Fallback: Mở link trực tiếp nếu fetch thất bại
            window.open(url, '_blank');
        });
}

// Hàm xử lý cài đặt module
function handleModuleInstall(downloadLink, moduleName) {
    if (isMobileDevice()) {
        // Trên điện thoại: Mở trong ShadowRocket
        openInShadowRocket(downloadLink);
    } else {
        // Trên máy tính: Tải file xuống bằng blob
        const filename = moduleName.replace(/[^a-z0-9]/gi, '_') + '.module';
        downloadFileOnPC(downloadLink, filename);
    }
}

// Hàm tạo badge cho nút download
function createDownloadBadge(status) {
    if (status === "new") {
        return '<span class="download-badge new">Mới</span>';
    } else if (status === "broken") {
        return '<span class="download-badge broken">Hỏng</span>';
    }
    return '';
}

// Hàm tạo nội dung nút download
function createDownloadButtonContent(status, isMobile) {
    const buttonText = isMobile ? 'Cài đặt' : 'Tải xuống';
    
    if (status === "broken") {
        return `
            <span class="download-content">
                <span>Đang bảo trì</span>
                <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                </svg>
            </span>
        `;
    }
    
    return `
        <span class="download-content">
            <span>${buttonText}</span>
            <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
        </span>
    `;
}

// Hàm tạo nội dung nút copy
function createCopyButtonContent() {
    return `
        <span class="copy-content">
            <span>Copy Link</span>
            <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
        </span>
    `;
}

// Hàm tạo HTML cho module
function createModuleCard(module) {
    const isMobile = isMobileDevice();
    const isBroken = module.status === "broken";
    const buttonClass = isBroken ? "btn-module-install btn-disabled" : "btn-module-install";
    
    return `
        <div class="module-card" data-module-id="${module.id}">
            <div class="module-header">
                <div class="module-logo">
                    <img src="${module.logo}" alt="${module.name}" onerror="this.src='https://via.placeholder.com/30?text=MOD'">
                </div>
                <div class="module-info">
                    <h3 class="module-title">
                        ${module.name}
                        ${module.status === "new" ? `<span class="module-badge">Mới</span>` : ''}
                        ${module.status === "broken" ? `<span class="module-badge" style="background: #ef4444;">Hỏng</span>` : ''}
                    </h3>
                </div>
            </div>
            <p class="module-description">
                ${module.description}
            </p>
            <div class="module-actions">
                <button class="${buttonClass}" 
                        data-download-link="${module.downloadLink}" 
                        data-module-name="${module.name}"
                        ${isBroken ? 'disabled' : ''}>
                    ${createDownloadBadge(module.status)}
                    ${createDownloadButtonContent(module.status, isMobile)}
                </button>
                <button class="btn-module-copy" data-copy-link="${module.copyLink}">
                    ${createCopyButtonContent()}
                </button>
            </div>
        </div>
    `;
}

// Render tất cả modules
document.addEventListener('DOMContentLoaded', function() {
    const modulesGrid = document.getElementById('modulesGrid');
    
    // Render tất cả 15 modules
    modulesData.forEach(module => {
        modulesGrid.innerHTML += createModuleCard(module);
    });
    
    // Copy link functionality
    const copyButtons = document.querySelectorAll('.btn-module-copy');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const copyLink = this.getAttribute('data-copy-link');
            const moduleCard = this.closest('.module-card');
            const moduleName = moduleCard.querySelector('.module-title').textContent.trim();
            
            // Copy link to clipboard
            navigator.clipboard.writeText(copyLink)
                .then(() => {
                    const originalContent = this.innerHTML;
                    this.innerHTML = `
                        <span class="copy-content">
                            <span>Đã Copy</span>
                            <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                            </svg>
                        </span>
                    `;
                    this.style.background = 'rgb(34 197 94)';
                    this.style.borderColor = 'rgb(34 197 94)';
                    
                    setTimeout(() => {
                        this.innerHTML = originalContent;
                        this.style.background = '';
                        this.style.borderColor = 'rgb(99 102 241)';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    alert('Không thể copy link. Vui lòng thử lại.');
                });
        });
    });

    // Install module functionality
    const installButtons = document.querySelectorAll('.btn-module-install:not(.btn-disabled)');
    
    installButtons.forEach(button => {
        button.addEventListener('click', function() {
            const downloadLink = this.getAttribute('data-download-link');
            const moduleName = this.getAttribute('data-module-name');
            
            // Hiển thị trạng thái đang cài đặt
            const originalContent = this.innerHTML;
            this.innerHTML = `
                ${createDownloadBadge(this.querySelector('.download-badge')?.className.includes('new') ? 'new' : 'normal')}
                <span class="download-content">
                    <span>Đang xử lý...</span>
                    <i class="fas fa-spinner fa-spin download-icon"></i>
                </span>
            `;
            this.disabled = true;
            
            // Xử lý cài đặt dựa trên loại thiết bị
            handleModuleInstall(downloadLink, moduleName);
            
            // Hiển thị thông báo thành công sau 2 giây
            setTimeout(() => {
                this.innerHTML = `
                    ${createDownloadBadge(this.querySelector('.download-badge')?.className.includes('new') ? 'new' : 'normal')}
                    <span class="download-content">
                        <span>Thành công</span>
                        <i class="fas fa-check download-icon"></i>
                    </span>
                `;
                this.style.background = 'var(--success)';
                
                setTimeout(() => {
                    this.innerHTML = originalContent;
                    this.style.background = '';
                    this.disabled = false;
                }, 3000);
            }, 2000);
        });
    });
});