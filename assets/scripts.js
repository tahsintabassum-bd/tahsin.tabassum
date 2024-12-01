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
document.querySelectorAll('.dropbtn').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the dropdown content
        const dropdownContent = button.nextElementSibling;

        // Toggle the 'show' class on the dropdown content
        dropdownContent.classList.toggle('show');

        // Close other open dropdowns
        document.querySelectorAll('.dropdown-content').forEach((content) => {
            if (content !== dropdownContent) {
                content.classList.remove('show');
            }
        });
    });
});

// Close dropdowns if clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach((content) => {
            content.classList.remove('show');
        });
    }
});

// Add event listener to all "View Poster" buttons
document.querySelectorAll('.toggle-poster').forEach(button => {
    button.addEventListener('click', () => {
        const posterContent = button.nextElementSibling;

        // Toggle the display of the poster content
        if (posterContent.style.display === 'none' || !posterContent.style.display) {
            posterContent.style.display = 'block';
            button.textContent = 'Hide Poster';
        } else {
            posterContent.style.display = 'none';
            button.textContent = 'View Poster';
        }
    });
});

