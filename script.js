document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in Effect on Page Load
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.opacity = '0'; // Initial opacity
        section.style.transition = 'opacity 0.5s ease-in-out';
    });

    const fadeInSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            // Check if the section is in the viewport
            if (sectionTop < viewportHeight - 100) {
                section.style.opacity = '1'; // Set opacity to 1
            }
        });
    };

    window.addEventListener('scroll', fadeInSection);
    fadeInSection(); // Call it initially

    // Button Hover Effects
    const buttons = document.querySelectorAll('.login-btn, .learn-more-btn, button[type="submit"]');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Card Hover Effects
    const cards = document.querySelectorAll('.card, .destination-card, .facility');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
