window.addEventListener('DOMContentLoaded', (event) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        const sliderContainer = document.querySelector('.slider-container');

        let isDown = false;
        let startX;
        let scrollLeft;

        sliderContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - sliderContainer.offsetLeft;
            scrollLeft = sliderContainer.scrollLeft;
        });

        sliderContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        sliderContainer.addEventListener('mouseup', () => {
            isDown = false;
        });

        sliderContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderContainer.offsetLeft;
            const walk = (x - startX) * 3; // Multiplicador para ajustar la velocidad del desplazamiento
            sliderContainer.scrollLeft = scrollLeft - walk;
        });
    }
});
