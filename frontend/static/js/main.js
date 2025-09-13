document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const root = document.documentElement;

    // Check for a saved theme in localStorage
    let currentTheme = localStorage.getItem('theme') || 'light';
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            root.style.setProperty('--primary-color', 'var(--primary-color-dk)');
            root.style.setProperty('--secondary-color', 'var(--secondary-color-dk)');
            root.style.setProperty('--variant-color', 'var(--variant-color-dk)');
            root.style.setProperty('--background-color', 'var(--background-color-dk)');
            root.style.setProperty('--surface-color', 'var(--surface-color-dk)');
            root.style.setProperty('--text-color', 'var(--text-color-dk)');
            darkModeIcon.classList.remove('bi-sun');
            darkModeIcon.classList.add('bi-moon-fill');
        } else {
            root.style.setProperty('--primary-color', 'var(--primary-color-lg)');
            root.style.setProperty('--secondary-color', 'var(--secondary-color-lg)');
            root.style.setProperty('--variant-color', 'var(--variant-color-lg)');
            root.style.setProperty('--background-color', 'var(--background-color-lg)');
            root.style.setProperty('--surface-color', 'var(--surface-color-lg)');
            root.style.setProperty('--text-color', 'var(--text-color-lg)');
            darkModeIcon.classList.remove('bi-moon-fill');
            darkModeIcon.classList.add('bi-sun');
        }
    };

    // Apply the initial theme
    applyTheme(currentTheme);

    darkModeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });
});