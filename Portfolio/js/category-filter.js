function filterSkills(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`.filter-btn[onclick="filterSkills('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    const languages = document.querySelectorAll('.language');
    languages.forEach(lang => {
        const categories = lang.getAttribute('data-category').split(','); // comma delimiter
        if (category === '' || categories.includes(category)) {
            lang.style.display = 'flex';
        } else {
            lang.style.display = 'none';
        }
    });
}
