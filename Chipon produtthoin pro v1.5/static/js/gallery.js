document.addEventListener("click", function (e) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const downloadBtn = document.getElementById("downloadBtn"); // ➕ ดึงปุ่มดาวน์โหลด
    const images = Array.from(document.querySelectorAll(".gallery-img"));

    if (!lightbox || !lightboxImg) return;

    // ฟังก์ชันสำหรับอัปเดตรูปและลิงก์ดาวน์โหลด
    function updateLightbox(src) {
        lightboxImg.src = src;
        if (downloadBtn) {
            downloadBtn.href = src; // 💡 ใส่ที่อยู่รูปเข้าไปในปุ่มดาวน์โหลด
        }
    }

    // 1. กดรูปภาพ -> เปิด Lightbox
    if (e.target.classList.contains("gallery-img")) {
        updateLightbox(e.target.src);
        lightbox.style.display = "flex";
    }

    // 2. กดปุ่มปิด หรือกดพื้นที่สีดำ -> ปิด Lightbox
    if (e.target.id === "closeBtn" || e.target === lightbox) {
        lightbox.style.display = "none";
    }

    // 3. ปุ่มรูปก่อนหน้า
    if (e.target.id === "prevBtn") {
        e.stopPropagation();
        let currentIndex = images.findIndex(img => img.src === lightboxImg.src);
        let prevIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox(images[prevIndex].src);
    }

    // 4. ปุ่มรูปถัดไป
    if (e.target.id === "nextBtn") {
        e.stopPropagation();
        let currentIndex = images.findIndex(img => img.src === lightboxImg.src);
        let nextIndex = (currentIndex + 1) % images.length;
        updateLightbox(images[nextIndex].src);
    }
});