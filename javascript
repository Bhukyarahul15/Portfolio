document.addEventListener('DOMContentLoaded', () => {
    // Menu icon and navbar toggle
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        });
    }

    // Social media links
    const socialMediaLinks = {
        facebook: 'https://www.facebook.com/akhilbhukya.akhilbhukya.5?mibextid=ZbWKwL',
        github: 'https://github.com/Bhukyarahul15',
        instagram: 'https://www.instagram.com/rahul._.bhukya?igsh=enEzb3B6NjZ0amFl',
        linkedin: 'https://www.linkedin.com/in/bhukya-rahul-81237125a'
    };

    const socialMediaIcons = {
        facebook: '.fa-facebook',
        github: '.fa-github',
        instagram: '.fa-instagram',
        linkedin: '.fa-linkedin'
    };

    Object.keys(socialMediaIcons).forEach(platform => {
        const icon = document.querySelector(socialMediaIcons[platform]);
        if (icon) {
            icon.addEventListener('click', () => {
                window.location.href = socialMediaLinks[platform];
            });
        }
    });

    // CV download link
    const cvButton = document.querySelector('.btn[href="#"]');
    if (cvButton) {
        cvButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'https://bhukyacv.tiiny.site'; // Replace with the URL to your CV
        });
    }

    // Project links
    const projectLinks = {
        weatherDashboard: 'https://yourwebsite.com/weather-dashboard',
        todoList: 'https://yourwebsite.com/todo-list',
        minorProject: 'https://yourwebsite.com/minor-project'
    };

    document.querySelectorAll('.portfolio-box').forEach(box => {
        const link = box.querySelector('i.fa-up-right-from-square');
        const projectName = box.querySelector('h4').textContent.toLowerCase().replace(/\s+/g, '');

        if (link && projectLinks[projectName]) {
            link.addEventListener('click', () => {
                window.open(projectLinks[projectName], '_blank');
            });
        }
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Retrieve form values
            const fullName = contactForm.querySelector('input[placeholder="Full Name"]').value;
            const email = contactForm.querySelector('input[placeholder="Email Address"]').value;
            const mobileNumber = contactForm.querySelector('input[placeholder="Mobile Number"]').value;
            const emailSubject = contactForm.querySelector('input[placeholder="Email Subject"]').value;
            const message = contactForm.querySelector('textarea').value;

            // Simple validation
            if (!fullName || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Prepare data to send
            const formData = {
                fullName,
                email,
                mobileNumber,
                emailSubject,
                message
            };

            try {
                // Send data to the server
                const response = await fetch('https://yourserver.com/api/contact', { // Replace with your server endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert('Your message has been sent!');
                    contactForm.reset(); // Optional: Reset the form
                } else {
                    alert('There was an error sending your message. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            }
        });
    }
});
