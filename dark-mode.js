document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const html = document.documentElement; // Change from body to html

    // Check local storage for dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        html.classList.add('dark-mode');
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        html.classList.toggle('dark-mode');
        if (html.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        }
    });
});
