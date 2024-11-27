
 document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();  // Prevents the default form submission

        var formData = new FormData(this);  // Collect form data

        fetch(this.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            // Show success message
            alert("Thank you for submitting form");
        })
        .catch(error => {
            // Show error message
            alert("There was an error submitting the form: " + error);
        });
    });

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

    // Modal for displaying stall information
    const modal = document.createElement('div');
    const overlay = document.createElement('div');
    modal.classList.add('stall-modal');
    overlay.classList.add('modal-overlay');
    document.body.appendChild(modal);
    document.body.appendChild(overlay);

    const stallsInfo = {
        'Stall 1: Smart City': {
            description: 'Members-Roshika Bajagain , Supriya Basnet, Nancy Shrestha, Aarati Aryal, Prativa Rimal, Nischal Kunwar, Rajani Timalsina, Subekshya Subedi, Kabina Aryal, Bibhu Dhakal',
            image: 'exp.png' // Add your stall image path
        },
        'Stall 2: Water Waste Purification': {
            description: 'Member-Yamuna Sedhai',
            image: 'robo.png'
        },
        'Stall 3: Magler Train': {
            description: '	Members : Anuska Gurung, Prijma Bhattarai',
            image: 'st3.png'
        },
        'Stall 4: Bunsen Burner': {
            description: 'Member-Suphin Tamang',
            image: 'st4.png'
        },
        'Stall 5: Smart stadium': {
            description: 'Member: Samrachana Pahari',
            image: 'st5.jpg'
        },
        'Stall 6: Robotic arm / Claw machine': {
            description: 'Member: Shruti Nembang ',
            image: 'st6.jpg'
        },
        'Stall 7: Smart glass Specs': {
            description: '	Member: Bishwojit pant',
            image: 'st7.jpg'
        },
        'Stall 8: Digestive System/Respiratory/Working eye model': {
            description: 'Members: Namuna Lama, Rushma Timalsina, Samriddhi Luitel, Supriya Basnet, Rashmi Timilsina,Asmita Adhikari',
            image: 'st8.jpg'
        },
        'Stall 9: Projectile motion': {
            description: 'Member: Reshma Thapa',
            image: 'st9.png'
        },
        'Stall 10: Hydrogen fuel based H202 rocket of small scale': {
            description: 'Member: Ashish Shrestha ',
            image: 'st10.jpg'
        },
        'Stall 11: Environmental Science': {
            description: 'Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished.',
            image: 'st3.png'
        },
        'Stall 3: Renewable Energy': {
            description: 'Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished.',
            image: 'st3.png'
        },
        'Stall 3: Renewable Energy': {
            description: 'Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished.',
            image: 'st3.png'
        },
        'Stall 3: Renewable Energy': {
            description: 'Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished.',
            image: 'st3.png'
        },
        'Stall 3: Renewable Energy': {
            description: 'Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished.',
            image: 'st3.png'
        },
    };

    stallCards.forEach(card => {
        card.addEventListener('click', () => {
            const stallTitle = card.querySelector('h3').innerText;
            const stallData = stallsInfo[stallTitle] || { description: 'Detailed info about the stall is not available.', image: '' };

            // Populate modal with stall details
            modal.innerHTML = `
                <h2>${stallTitle}</h2>
                <img src="${stallData.image}" alt="${stallTitle}" class="stall-image"/>
                <p class="stall-info">${stallData.description}</p>
                <button class="close-btn">Close</button>
            `;

            // Show modal and overlay
            modal.classList.add('active');
            overlay.classList.add('active');

            // Close modal when close button is clicked
            modal.querySelector('.close-btn').addEventListener('click', closeModal);
        });
    });

    // Function to close modal and overlay
    const closeModal = () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    };

    // Close modal when clicking on the overlay
    overlay.addEventListener('click', closeModal);
});

// Contact form submission simulation
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

//team model display
const modal = document.createElement('div');
const overlay = document.createElement('div');
modal.classList.add('team-modal');
overlay.classList.add('modal-overlay');
document.body.appendChild(modal);
document.body.appendChild(overlay);



