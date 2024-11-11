function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuItems = menu.querySelectorAll('li');
    
    menu.classList.toggle('show');
    
    menuItems.forEach((item, index) => {
        item.style.setProperty('--i', index + 1); // Set the custom property for staggered animation
    });
}