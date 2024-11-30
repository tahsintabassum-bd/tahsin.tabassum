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

document.querySelectorAll('.navbar li a').forEach(link => {
    link.addEventListener('click', event => {
        const dropdown = link.nextElementSibling;

        if (dropdown && dropdown.tagName === 'UL') {
            event.preventDefault(); // Prevent default link behavior
            dropdown.classList.toggle('show');
        }
    });
});


