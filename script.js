const sections = ['header', 'about', 'projects', 'skills', 'contact'];

sections.forEach(section => {
    fetch(`${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${section}:`, error));
});
