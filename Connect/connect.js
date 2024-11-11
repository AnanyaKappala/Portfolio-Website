function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuItems = menu.querySelectorAll('li');
    
    menu.classList.toggle('show');
    
    menuItems.forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
    });
}

function goToMessagePage() {
    window.location.href = "/Connect/Message Me/message.html"; // Redirect to the message form page
}
