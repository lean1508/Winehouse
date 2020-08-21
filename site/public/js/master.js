window.onload = function () {

    //Funcionamiento formulario de búsqueda en header

    let formulario = document.querySelector('#busqueda');
    let buttonToggleSearch = document.querySelector('#button_toggle_search');
    buttonToggleSearch.onclick = function () {
        formulario.classList.remove('ocultar');
        buttonToggleSearch.classList.add('ocultar');
    }
    
}