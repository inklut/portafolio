// const checkbox = document.querySelector('#toggle');
// const html = document.querySelector('html');

// const toggleDarkMode = function () {
//     checkbox.checked
//     ? html.classList.add('dark')
//     : html.classList.remove('dark')
// };

// toggleDarkMode();
// checkbox.addEventListener('click', toggleDarkMode);

document.getElementById('toggle').addEventListener('click', function() {
    let html = document.querySelector('html').classList;
    if(localStorage.theme == 'dark') {
        html.remove('dark');
        localStorage.removeItem('theme')
    } else {
        html.add('dark');
        localStorage.theme = 'dark';
    }
});
