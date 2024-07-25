document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmationMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('comment').value;
        console.log(name, email, subject, message)

        // Simple email validation using regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.trim() === '' || !email.match(emailPattern) || message.trim() === '') {
            confirmationMessage.textContent = 'Please fill out all fields correctly.';
            confirmationMessage.style.color = 'red';
        } else {
            // Submit the form or handle further processing
            confirmationMessage.textContent = 'Form submitted successfully!';
            confirmationMessage.style.color = 'green';

            // Additional code to submit the form to the server can go here
        }

        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        // Send the form data to the server
        fetch('/process_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                confirmationMessage.textContent = 'Form submitted successfully!';
                confirmationMessage.style.color = 'green';
            } else {
                confirmationMessage.textContent = 'Error: ' + data.error;
                confirmationMessage.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
  

    });
});
