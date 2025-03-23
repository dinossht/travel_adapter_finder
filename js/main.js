// Simple JavaScript for enhancing user experience

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Initialize universal adapter in featured section if it exists
    const universalFeaturedPlug = document.getElementById('universal-featured-plug');
    if (universalFeaturedPlug && typeof PlugDisplay !== 'undefined') {
        const universalPlugDisplay = new PlugDisplay();
        universalFeaturedPlug.appendChild(universalPlugDisplay.getContainer());
        universalPlugDisplay.displayUniversalAdapter();
    }
    
    // Log info for debugging
    console.log('Travel Adapter Finder Website JS loaded successfully');
}); 