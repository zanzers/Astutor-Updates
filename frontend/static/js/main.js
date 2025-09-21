document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const logoImage = document.getElementById('logoImage');
    const root = document.documentElement;

    // Check for saved theme
    let currentTheme = localStorage.getItem('theme') || 'light';

    // Create transition overlay
    const createTransitionOverlay = () => {
        const overlay = document.createElement('div');
        overlay.className = 'theme-transition-overlay';
        document.body.appendChild(overlay);
        
        // Remove overlay after animation completes
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 800);
    };

    const applyTheme = (theme) => {
        
        if (theme === 'dark') {
            root.style.setProperty('--primary-color', 'var(--primary-color-dk)');
            root.style.setProperty('--secondary-color', 'var(--secondary-color-dk)');
            root.style.setProperty('--variant-color', 'var(--variant-color-dk)');
            root.style.setProperty('--button-color', 'var(--button-color-dk)');
            root.style.setProperty('--background-image', 'var(--background-image-dk)');
            root.style.setProperty('--background-color', 'var(--background-color-dk)');
            root.style.setProperty('--surface-color', 'var(--surface-color-dk)');
            root.style.setProperty('--text-color', 'var(--text-color-dk)');
            root.style.setProperty('--accent-color', 'var(--accent-color-dk)');
            
            // Add data-theme attribute for CSS targeting
            document.documentElement.setAttribute('data-theme', 'dark');
            darkModeIcon.classList.remove('bi-sun');
            darkModeIcon.classList.add('bi-moon-fill');
            // Switch to dark logo with fade effect
            logoImage.style.opacity = '0';
            setTimeout(() => {
                logoImage.src = window.logoDarkUrl;
                logoImage.style.opacity = '1';
            }, 300);
        } else {
            root.style.setProperty('--primary-color', 'var(--primary-color-lg)');
            root.style.setProperty('--secondary-color', 'var(--secondary-color-lg)');
            root.style.setProperty('--variant-color', 'var(--variant-color-lg)');
            root.style.setProperty('--button-color', 'var(--button-color-lg)');
            root.style.setProperty('--background-image', 'var(--background-image-lg)');
            root.style.setProperty('--background-color', 'var(--background-color-lg)');
            root.style.setProperty('--surface-color', 'var(--surface-color-lg)');
            root.style.setProperty('--text-color', 'var(--text-color-lg)');
            root.style.setProperty('--accent-color', 'var(--accent-color-lg)');
            
            // Add data-theme attribute for CSS targeting
            document.documentElement.setAttribute('data-theme', 'light');
            darkModeIcon.classList.remove('bi-moon-fill');
            darkModeIcon.classList.add('bi-sun');
            // Switch to light logo with fade effect
            logoImage.style.opacity = '0';
            setTimeout(() => {
                logoImage.src = window.logoLightUrl;
                logoImage.style.opacity = '1';
            }, 300);
        }
    };

    // Set initial CSS variables
    if (currentTheme === 'dark') {
        root.style.setProperty('--button-color', 'var(--button-color-dk)');
        root.style.setProperty('--variant-color', 'var(--variant-color-dk)');
    } else {
        root.style.setProperty('--button-color', 'var(--button-color-lg)');
        root.style.setProperty('--variant-color', 'var(--variant-color-lg)');
    }
    
    // Initial theme
    applyTheme(currentTheme);
    

    // Toggle listener
    darkModeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });

});