// Handle abstract toggle visibility
document.querySelectorAll('.abstract-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const abstractContent = button.nextElementSibling;
        const isHidden = abstractContent.style.display === 'none' || abstractContent.style.display === '';
        abstractContent.style.display = isHidden ? 'block' : 'none';
        button.textContent = isHidden ? 'Hide Abstract' : 'View Abstract';
    });
});

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const dropdown = toggle.nextElementSibling;
        dropdown.classList.toggle('show');
    });
});

