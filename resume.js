// JavaScript form validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Please enter both name and email.');
    } else {
        // Form validation successful, submit the form (add your submission logic here)
        alert('Form submitted successfully!\nName: ' + name + '\nEmail: ' + email);
        this.reset(); // Reset the form after successful submission
    }
});

// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
