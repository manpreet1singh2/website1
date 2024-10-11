let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Move the slider by updating transform property
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update the dots to reflect the current image
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Auto-slide every 3 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);

// Manual control through dots
function currentSlide(index) {
    showSlide(index);
}
