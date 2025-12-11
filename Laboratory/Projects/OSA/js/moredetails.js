// Get all the clickable elements
const toggleElements = document.querySelectorAll('.toggle-details');

// Loop through each clickable element
toggleElements.forEach((toggleElement) => {
  // Add a click event listener to each element
  toggleElement.addEventListener('click', function () {
    // Toggle the 'visible' class for the next sibling element (detailed information)
    const details = this.nextElementSibling;
    details.classList.toggle('visible');
  });
});
