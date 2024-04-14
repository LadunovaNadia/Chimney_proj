document.addEventListener('DOMContentLoaded', function() {
    const menuOpener = document.querySelector('.header-burger-opener');
    const menuCloser = document.querySelector('.header-burger-closer');
    const mobileMenu = document.querySelector('.mobile_backdrop');

    menuOpener.addEventListener('click', function() {
        mobileMenu.style.display = 'block'; // Показати мобільне меню
        menuOpener.style.display = 'none';  // Сховати кнопку відкриття
        menuCloser.style.display = 'block'; // Показати кнопку закриття
    });

    menuCloser.addEventListener('click', function() {
        mobileMenu.style.display = 'none';  // Сховати мобільне меню
        menuOpener.style.display = 'block'; // Показати кнопку відкриття
        menuCloser.style.display = 'none';  // Сховати кнопку закриття
    });
});
