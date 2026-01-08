const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
const buttons = document.querySelectorAll('.slider-nav button');

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: 'smooth'
        });
    });

    function updateActiveDot() {
        const sliderRect = slider.getBoundingClientRect();
        let activeIndex = 0;
        let minDistance = Infinity;

        slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.left - sliderRect.left);

        if (distance < minDistance) {
            minDistance = distance;
            activeIndex = index;
        }
    });

    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[activeIndex].classList.add('active');
}

    slider.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveDot);
});

// Set initial state
updateActiveDot();});