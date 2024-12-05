document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const subjectModal = document.getElementById('subjectModal');

    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', () => {
            // Toggle mobile menu visibility
            mobileMenu.classList.toggle('hidden');

        });
    }
});

