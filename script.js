// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Welcome message
window.addEventListener('load', function() {
    console.log('Welcome to Monisha G Portfolio!');
});

// Display current year
const footer = document.querySelector('footer');

if (footer) {
    footer.innerHTML = `<p>© ${new Date().getFullYear()} Monisha G. All Rights Reserved.</p>`;
}

// Contact email
console.log('Portfolio website loaded successfully!');
