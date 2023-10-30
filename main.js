
// Hiển thị hoặc ẩn nút khi cuộn trang
window.addEventListener("scroll", () => {
    const backToTopButton = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
    // Cuộn lên đầu trang khi nút được nhấp
    backToTopButton.addEventListener("click", () => {
        document.body.scrollTop = 0; // Cho Safari
        document.documentElement.scrollTop = 0; // Cho Chrome, Firefox, IE và Opera
    });
});


