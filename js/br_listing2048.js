document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-track img');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const imageWidth = images[0].clientWidth;

    let currentIndex = 0;

    function updateCarousel() {
        const newTransformValue = -currentIndex * imageWidth + 'px';
        track.style.transform = 'translateX(' + newTransformValue + ')';
        
        // Check if we are at the last image, then loop back to the first image
        if (currentIndex === images.length) {
            currentIndex = 0;
            track.style.transform = 'translateX(0)';
        }
    }

    function showArrows() {
        prevBtn.style.opacity = currentIndex === 0 ? 0 : 1;
        nextBtn.style.opacity = currentIndex === images.length - 1 ? 0 : 1;
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            showArrows();
        });
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
            showArrows();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length) {
            currentIndex++;
            updateCarousel();
            showArrows();
        }
    });

    // Show arrows on hover
    document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
        prevBtn.style.opacity = currentIndex === 0 ? 0 : 1;
        nextBtn.style.opacity = currentIndex === images.length - 1 ? 0 : 1;
    });

    document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
        prevBtn.style.opacity = 0;
        nextBtn.style.opacity = 0;
    });
});

