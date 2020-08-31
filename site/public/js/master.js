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

    let contraseña = document.getElementById('password');
    let eye = document.getElementById('eye');

    eye.addEventListener('click',function(){
        if(contraseña.getAttribute('type')== 'password'){
          contraseña.setAttribute('type','text');
          eye.children[0].classList.remove('fa-eye-slash');
          eye.children[0].classList.add('fa-eye');
        }else{
          contraseña.setAttribute('type','password');
          eye.children[0].classList.remove('fa-eye');
          eye.children[0].classList.add('fa-eye-slash');
        }
      })

      let formLogin = document.getElementById('formLogin');
      let errorLogin = document.getElementById('errorLogin');
      //console.log(formLogin);
      formLogin.addEventListener('submit',function(evento){
          if(!validacionLogin(evento)){
             return evento.preventDefault();
          }else{
          return formLogin.submit();
          }
      })
    
      function validacionLogin(evento){
        let email = formLogin.elements[0];
        let password = formLogin.elements[1];
          let errores = [];
          errorLogin.classList.add('alert-danger');
          errorLogin.classList.add('font-weight-bold');
          errorLogin.classList.add('rounded');
          errorLogin.classList.add('border');
          if(email.value == ''){
              errores.push('El Email no puede estar vacio.');
              email.classList.add('is-invalid');
              email.classList.remove('is-valid');
          }else{
              email.classList.add('is-valid');
              email.classList.remove('is-invalid');
          }
    
          let reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            if(!reEmail.test(email.value)){
                errores.push('Debe ingresar un email válido.');
              email.classList.add('is-invalid');
              email.classList.remove('is-valid');
          }else{
              email.classList.add('is-valid');
              email.classList.remove('is-invalid');
          }
          if(password.value == ''){
              errores.push('El password no puede estar vacio.')
              password.classList.add('is-invalid');
              password.classList.remove('is-valid');
          }else{
              password.classList.add('is-valid');
              password.classList.remove('is-invalid');
          }
    
          if(errores.length > 0){
              errorLogin.innerHTML = '';
              for(let i = 0; i < errores.length; i++){
                  errorLogin.innerHTML += `<li>${errores[i]}</li>`;
              }
          }else{
              return true;
          }
    
      }    


}