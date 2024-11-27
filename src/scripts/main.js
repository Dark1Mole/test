document.addEventListener('DOMContentLoaded', () => {
    const exempluLink = document.getElementById('exempluLink');
    const testLink = document.getElementById('testLink');

    // Highlight the active link
    if (window.location.pathname.includes('exemplu.html')) {
        exempluLink.classList.add('text-primary', 'font-bold');
    } else if (window.location.pathname.includes('test.html')) {
        testLink.classList.add('text-primary', 'font-bold');
    }
});
