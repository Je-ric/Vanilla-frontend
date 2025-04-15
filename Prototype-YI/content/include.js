const toolbar = document.querySelector('.toolbar');

if (toolbar) {
    fetch('test.html')
        .then(res => res.text())
        .then(data => {
            toolbar.innerHTML = data;
        })
        .catch(error => console.error('Error loading toolbar:', error));
}



