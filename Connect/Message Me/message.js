// Function to send email using EmailJS
function sendEmail(event) {
    event.preventDefault();  // Prevent default form submission
    
    emailjs.sendForm('MyMail', 'template_khwqkiq', '#contactForm')
    .then(function(response) {
        alert('Message sent successfully!');
        // Optionally, reset the form after success
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert('Failed to send message. Please try again later.');
    });
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuItems = menu.querySelectorAll('li');
    
    menu.classList.toggle('show');
    
    menuItems.forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
    });
}
