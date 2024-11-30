// Handle abstract toggle visibility
document.querySelectorAll('.abstract-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const abstractContent = button.nextElementSibling;
        const isHidden = abstractContent.style.display === 'none' || abstractContent.style.display === '';
        abstractContent.style.display = isHidden ? 'block' : 'none';
        button.textContent = isHidden ? 'Hide Abstract' : 'View Abstract';
    });
});

// Add event listener to all dropdown buttons
document.querySelectorAll('.dropdown .dropbtn').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const dropdownContent = button.nextElementSibling;

        // Toggle the 'show' class on the dropdown content
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        } else {
            // Close all other open dropdowns
            document.querySelectorAll('.dropdown-content.show').forEach((openDropdown) => {
                openDropdown.classList.remove('show');
            });
            dropdownContent.classList.add('show');
        }
    });
});

// Close dropdowns if clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content.show').forEach((openDropdown) => {
            openDropdown.classList.remove('show');
        });
    }
});

