// Log button clicks
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Navigated to: ${button.textContent.trim()}`);
    });
});

// Validate search input
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', (event) => {
    if (!searchInput.value.trim()) {
        event.preventDefault();
        alert('Please enter a search query!');
    }
});

// Enhance user experience with hover effects
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.5)';
    });
    button.addEventListener('mouseout', () => {
        button.style.boxShadow = '';
    });
});
