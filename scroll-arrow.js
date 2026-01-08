const el = document.getElementById('hideOnScroll');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        el.classList.add('hidden');
    } else {
        el.classList.remove('hidden');
    }
});