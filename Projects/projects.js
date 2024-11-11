// Placeholder for future JavaScript functionality
console.log("Portfolio projects showcase loaded.");

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

let currentPage = 1;
const totalPages = 3; // Update this if you add more pages in the future

function showPage(page) {
    for (let i = 1; i <= totalPages; i++) {
        const pageElement = document.getElementById(`projects-page-${i}`);
        if (i === page) {
            pageElement.classList.add('active');
        } else {
            pageElement.classList.remove('active');
        }
    }
}

function nextPage() {
    currentPage = currentPage === totalPages ? 1 : currentPage + 1;
    showPage(currentPage);
}

function previousPage() {
    currentPage = currentPage === 1 ? totalPages : currentPage - 1;
    showPage(currentPage);
}

// Show the first page by default when the page loads
window.onload = () => {
    showPage(currentPage);
};
