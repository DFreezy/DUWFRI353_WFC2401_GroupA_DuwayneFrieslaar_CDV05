// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// GitHub Button
const gitButton = document.getElementById("git-button");

gitButton.addEventListener('click', () => {
    alert("Off to GitHub!");
    gitButton.style.backgroundColor = "red";
});

// Modal Logic
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Carousel Logic
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const items = document.querySelectorAll('.certificate-item');

let currentIndex = 0;

const updateCarousel = () => {
    const width = items[currentIndex].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}, 1000);

// Initialize Carousel
updateCarousel();


