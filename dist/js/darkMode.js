const botonDarkMode = document.querySelector('#boton');
// Pecar = errar el tiro (anarquia maldad incredulidad)

const configUsuario = window.matchMedia('(prefers-color-scheme: dark)');

botonDarkMode.addEventListener('click', () => {
    //console.log(configUsuario.matches)
    if(configUsuario.matches) {
        document.body.classList.toggle('dark:bg-gray-900')
    }
})