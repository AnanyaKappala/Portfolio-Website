let currentPage = 1;

function showPage(page) {
    const totalPages = 2;
    for (let i = 1; i <= totalPages; i++) {
        const pageElement = document.getElementById(`page${i}`);
        if (i === page) {
            pageElement.classList.add('active');
        } else {
            pageElement.classList.remove('active');
        }
    }
}

function nextPage() {
    currentPage = currentPage === 2 ? 1 : currentPage + 1;
    showPage(currentPage);
}

function previousPage() {
    currentPage = currentPage === 1 ? 2 : currentPage - 1;
    showPage(currentPage);
}

// Show the first page by default when the page loads
window.onload = () => {
    showPage(currentPage);
};

function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuItems = menu.querySelectorAll('li');
    
    menu.classList.toggle('show');
    
    menuItems.forEach((item, index) => {
        item.style.setProperty('--i', index + 1); // Set the custom property for staggered animation
    });
}

