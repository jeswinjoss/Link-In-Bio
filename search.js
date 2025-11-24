const searchInput = document.getElementById('searchInput');
const folderItems = document.querySelectorAll('.folder-item');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');

// Search functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    let visibleCount = 0;

    folderItems.forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        const description = item.getAttribute('data-description').toLowerCase();
        
        if (name.includes(searchTerm) || description.includes(searchTerm)) {
            item.classList.remove('hidden');
            visibleCount++;
        } else {
            item.classList.add('hidden');
        }
    });

    // Update results count
    if (searchTerm === '') {
        resultsCount.textContent = '';
        noResults.classList.remove('show');
    } else {
        resultsCount.textContent = `Found ${visibleCount} item${visibleCount !== 1 ? 's' : ''}`;
        
        if (visibleCount === 0) {
            noResults.classList.add('show');
        } else {
            noResults.classList.remove('show');
        }
    }
});

// Add entrance animations
document.addEventListener('DOMContentLoaded', function() {
    const searchWrapper = document.querySelector('.search-wrapper');
    const folderContainer = document.querySelector('.folder-container');

    searchWrapper.style.opacity = '0';
    searchWrapper.style.transform = 'translateY(-20px)';
    folderContainer.style.opacity = '0';
    folderContainer.style.transform = 'translateY(20px)';

    setTimeout(() => {
        searchWrapper.style.transition = 'all 0.6s ease';
        searchWrapper.style.opacity = '1';
        searchWrapper.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        folderContainer.style.transition = 'all 0.6s ease';
        folderContainer.style.opacity = '1';
        folderContainer.style.transform = 'translateY(0)';
    }, 300);
});