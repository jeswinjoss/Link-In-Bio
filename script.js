// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all links
    const linkItems = document.querySelectorAll('.link-item');
    
    linkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add custom behavior here
            // For example, tracking clicks or animations
            console.log('Link clicked:', this.textContent.trim());
        });
    });

    // Add entrance animations
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.6s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);

    // Animate links on load
    linkItems.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
});

