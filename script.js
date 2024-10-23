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
        'Stall 1: Science Experiments': {
            description: 'A science experiment is a structured method used to test a hypothesis by observing and measuring outcomes under controlled conditions. It involves making predictions, conducting tests, collecting data, and analyzing results to draw conclusions. This process helps in understanding natural phenomena and validating scientific theories',
            image: 'exp.png' // Add your stall image path
        },
        'Stall 2: Robotics Display': {
            description: 'Robotics is the field of science and engineering focused on the design, construction, operation, and use of robots. Robots are machines capable of carrying out tasks autonomously or with human guidance, often mimicking human or animal behavior. Robotics combines various disciplines, including mechanics, electronics, computer science, and artificial intelligence, to create machines that assist or replace humans in tasks such as manufacturing, medical surgeries, space exploration, and everyday activities.',
            image: 'robo.png'
        },
        'Stall 3: Renewable Energy': {
            description: 'Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished.',
            image: 'st3.png'
        },
        'Stall 4: Chemistry Magic': {
            description: 'Chemistry magic refers to entertaining and visually impressive experiments or demonstrations that showcase chemical reactions, often producing surprising effects, and making learning about chemistry engaging and fun.',
            image: 'st4.png'
        },
        'Stall 5: Astronomy Corner': {
            description: 'Astronomy Corner is a space dedicated to exploring the wonders of the universe, including celestial bodies, cosmic phenomena, and the science behind them. Topics may include:Stars and Galaxies: Study of their formation, life cycles, and types.Planets and Moons: Exploration of our solar system and exoplanets in distant systems.Black Holes and Dark Matter: Understanding these mysterious components of the universe.Telescopes and Observations: Tools and methods used to observe celestial objects.Astrophysics: The study of the physical properties and behaviors of astronomical objects.Astronomy Corner encourages curiosity about the universe, fostering appreciation for its vastness and complexity through discussions, facts, and observations.',
            image: 'st5.jpg'
        },
        'Stall 6: Eco-Friendly Crafts': {
            description: 'Eco-friendly crafts are creative projects made from sustainable, recycled, or natural materials that reduce environmental impact. Examples include paper mache from old newspapers, natural dyeing with plant materials, upcycled furniture, seed bombs for planting, and bottle planters. These crafts promote sustainability and encourage resourcefulness while inspiring creativity.',
            image: 'st6.jpg'
        },
        'Stall 7: Physics Playground': {
            description: 'Physics Playground is an interactive space for exploring physics concepts through hands-on experiments and activities. It includes projects like building simple machines, launching balloon rockets, conducting egg drop challenges, experimenting with pendulums, and exploring sound waves. This engaging environment helps participants understand and apply physics principles in a fun and creative way.',
            image: 'st7.jpg'
        },
        'Stall 8: Biology Wonders': {
            description: 'Biology Wonders explores the diversity of life on Earth, covering topics like cell biology, genetics, ecosystems, evolution, and human anatomy. It highlights the beauty and complexity of living organisms and their interactions within the natural world.',
            image: 'st8.jpg'
        },
        'Stall 9: Math Games': {
            description: 'Math Games are interactive activities that make learning mathematics fun. Examples include Math Bingo, online math puzzles, card games like "Math War," board games like "Monopoly," and escape room challenges. They reinforce math skills while promoting critical thinking and teamwork.',
            image: 'st9.png'
        },
        'Stall 10: Coding for Kids': {
            description: 'Coding for kids refers to teaching children the fundamentals of programming in a fun and engaging way. It helps develop problem-solving skills, creativity, and logical thinking from an early age. Children can start with visual programming languages like Scratch, which allows them to drag and drop blocks to create animations, games, and stories. As they progress, they can learn more advanced languages like Python, JavaScript, or HTML.Introducing coding early fosters an interest in technology and innovation, preparing children for a digital future. It also enhances critical thinking, collaboration, and communication skills as they learn to break down complex problems into smaller, manageable tasks.',
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



