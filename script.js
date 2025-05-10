// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation (example)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const messageTextarea = form.querySelector('textarea');

        if (!nameInput.value || !emailInput.value || !messageTextarea.value) {
            alert('Please fill in all fields.');
            e.preventDefault(); // Prevent form submission
        }
    });
}