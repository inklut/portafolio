const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

const toggleDarkMode = function () {
    checkbox.checked
    ? html.classList.add('dark')
    : html.classList.remove('dark')
};

toggleDarkMode();
checkbox.addEventListener('click', toggleDarkMode);


if (localStorage.toggleDarkMode === 'dark' || (!('checkbox' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.documentElement.classList.add('dark')
} else {
    html.documentElement.classList.remove('dark')
}
  
// Whenever the user explicitly chooses light mode
localStorage.toggleDarkMode = 'light'
  
// Whenever the user explicitly chooses dark mode
localStorage.toggleDarkMode = 'dark'
  
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('checkbox')

