document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});
const stallCards = document.querySelectorAll('.stall-card');

const colors = [
    'rgba(135, 206, 250, 0.7)', // Light sky blue
    'rgba(255, 228, 196, 0.7)', // Bisque
    'rgba(255, 182, 193, 0.7)', // Light pink
    'rgba(144, 238, 144, 0.7)', // Light green
    'rgba(221, 160, 221, 0.7)', // Plum
    'rgba(255, 218, 185, 0.7)', // Peach
];

stallCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        card.style.transition = 'background-color 0.5s, transform 0.3s';
        card.style.backgroundColor = randomColor;
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#f0f4f8'; // Reset to original
    });
});
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const button = event.target.querySelector('button');
    button.disabled = true; // Disable button during submission
    button.innerText = 'Sending...';

    // Simulate sending the message
    setTimeout(() => {
        button.innerText = 'Sent!';
        button.style.backgroundColor = '#28a745'; // Change color to indicate success

        // Reset form after a delay
        setTimeout(() => {
            button.disabled = false;
            button.innerText = 'Send';
            document.getElementById('contactForm').reset();
            button.style.backgroundColor = '#007bb8'; // Reset button color
        }, 2000);
    }, 1500); // Simulate a delay for sending the message
});


