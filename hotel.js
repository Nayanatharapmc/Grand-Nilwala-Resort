// hotel.js
document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Ensures animation occurs only once
            }
        });
    }, {
        threshold: 0.5
    });

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});