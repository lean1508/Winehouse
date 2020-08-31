window.addEventListener('load', function(){

  let formularioLogin = document.getElementById('loginForm');
  let erroresLogin = document.getElementById('erroresLogin');
  //console.log(formularioLogin);
  formularioLogin.addEventListener('submit',function(evento){
      if(!validacionLogin(evento)){
         return evento.preventDefault();
      }else{
      return formularioLogin.submit();
      }
  })

  function validacionLogin(evento){
    let email = formularioLogin.elements[0];
    let password = formularioLogin.elements[1];
      let errores = [];
      erroresLogin.classList.add('alert-info');
      erroresLogin.classList.add('font-weight-bold');
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
          erroresLogin.innerHTML = '';
          for(let i = 0; i < errores.length; i++){
              erroresLogin.innerHTML += `<li>${errores[i]}</li>`;
          }
      }else{
          return true;
      }

  }

    let contraseña = document.getElementById('frontPassword');
    let eye = document.getElementById('frontEye');

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
    
})