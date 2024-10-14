// Cuộn headers
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Lấy phần tử nút toggle và menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const toggleIcon = menuToggle.querySelector('i');

// Thêm sự kiện click để mở/đóng menu

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');

    if (menuToggle.classList.contains('active')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-caret-up');
    } else {
        toggleIcon.classList.remove('fa-caret-up');
        toggleIcon.classList.add('fa-bars');
    }
});