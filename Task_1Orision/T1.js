document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple form validation
    if (name && email && message) {
        document.getElementById('formMessage').innerHTML = 
            `<p>Thank you, ${name}! Your message has been sent.</p>`;
        
        // Clear form fields
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerHTML = 
            `<p>Please fill out all fields.</p>`;
    }
});