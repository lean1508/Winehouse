window.onload = function () {

    //Funcionamiento formulario de búsqueda en header

    let formulario = document.querySelector('#busqueda');
    let formularioAlt = document.querySelector('#busqueda-alt');
    let buttonToggleSearch = document.querySelector('#button_toggle_search');
    let buttonCloseSearch = document.querySelector('#close-form');
    buttonToggleSearch.onclick = function () {
        if (window.outerWidth < 768) {
            formularioAlt.classList.remove('ocultar');
            buttonToggleSearch.classList.add('ocultar');
        } else{
            formulario.classList.remove('ocultar');
            buttonToggleSearch.classList.add('ocultar');
        }
    };
    buttonCloseSearch.onclick = function() {
        formularioAlt.classList.add('ocultar');
        buttonToggleSearch.classList.remove('ocultar');
    };
    
}