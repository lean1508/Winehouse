window.addEventListener('load', function(){

    let registro = document.getElementById('registroForm');
    let listaError = document.getElementById('erroresRegistro');

    registro.addEventListener('submit',function(evento){
        if(!validacionRegistro(evento)){
           return evento.preventDefault();
        }else{
        return registro.submit();
        }
    })

    function validacionRegistro(evento){
        let {name, lastName, alias, email, password, confirm_password, avatar} = registro.elements
        let errores = [];
        listaError.classList.add('alert-info');
        listaError.classList.add('font-weight-bold');
        listaError.classList.add('rounded');
        listaError.classList.add('border');

        if(name.value == ''){
            errores.push('El nombre no puede estar vacio.')
            name.classList.add('is-invalid');
            name.classList.remove('is-valid');
          }else{
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
          }
        if(name.value.length < 3){
            errores.push('El nombre tiene que tener al menos 3 carácteres.')
            name.classList.add('is-invalid');
            name.classList.remove('is-valid');
          }else{
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
          }

        if(lastName.value == ''){
            errores.push('El apellido no puede estar vacio.')
            lastName.classList.add('is-invalid');
            lastName.classList.remove('is-valid');
          }else{
            lastName.classList.add('is-valid');
            lastName.classList.remove('is-invalid');
        }
        if(lastName.value.length < 3){
          errores.push('El apellido tiene que tener al menos 3 carácteres.');
          lastName.classList.add('is-invalid');
          lastName.classList.remove('is-valid');
        }else{
          lastName.classList.add('is-valid');
          lastName.classList.remove('is-invalid');
        }
        if(alias.value == ''){
          errores.push('El alias no puede estar vacio.');
          alias.classList.add('is-invalid');
          alias.classList.remove('is-valid');
        }else{
          alias.classList.add('is-valid');
          alias.classList.remove('is-invalid');
        }
        if(alias.value.length < 3){
          errores.push('El alias tiene que tener al menos 3 carácteres.');
          alias.classList.add('is-invalid');
          alias.classList.remove('is-valid');
        }else{
          alias.classList.add('is-valid');
          alias.classList.remove('is-invalid');
        }
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
          errores.push('El password no puede estar vacio.');
          password.classList.add('is-invalid');
          password.classList.remove('is-valid');
        }else{
          password.classList.add('is-valid');
          password.classList.remove('is-invalid');
        }
        let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[¡!¿?@#$%^&*+-_])(?=.{8,})/
        if(!regexPassword.test(password.value)){
          errores.push('El password debe tener un mínimo de 8 carácteres incluyendo al menos una letraminúscula, una letra mayúscula, un número y un caracter especial.');
          password.classList.add('is-invalid');
          password.classList.remove('is-valid');
        }else{
          password.classList.add('is-valid');
          password.classList.remove('is-invalid');
        }
        if(confirm_password.value != password.value){
           errores.push('El password debe ser el mismo en ambos campos')
           confirm_password.classList.add('is-invalid');
           confirm_password.classList.remove('is-valid');
        }else{
           confirm_password.classList.add('is-valid');
           confirm_password.classList.remove('is-invalid');
        }
        
        //console.log(avatar.value + '================');
        let ext = avatar.value.split('.');
        //console.log(ext);
        if(ext[1] != 'jpg' && ext[1] != 'jpeg' && ext[1] != 'png' && ext[1] != 'gif'){
          errores.push('La imagen debe ser un archivo JPG, JPEG, PNG o GIF.');
          avatar.classList.add('is-invalid');
          avatar.classList.remove('is-valid');
        }else{
          avatar.classList.remove('is-invalid');
          avatar.classList.add('is-valid');
        }

        if(errores.length > 0){
          listaError.innerHTML = '';
          for(let i = 0; i < errores.length; i++){
              listaError.innerHTML += `<li>${errores[i]}</li>`;
          }
            }else{
                return true;
            }

    }
    
  let password = document.getElementById('frontPassword');
  let confirm_password = document.getElementById('confirm_password');

  password.onkeyup = ()=>{
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[¡!¿?@#$%^&*+-_])(?=.{8,})/
    if(!regexPassword.test(password.value)){
      password.classList.add('is-invalid');
      password.classList.remove('is-valid');
    }else{
      password.classList.add('is-valid');
      password.classList.remove('is-invalid');
    }
  };

  confirm_password.onkeyup = ()=>{
    if(confirm_password.value != password.value){
      confirm_password.classList.add('is-invalid');
      confirm_password.classList.remove('is-valid');
   }else{
      confirm_password.classList.add('is-valid');
      confirm_password.classList.remove('is-invalid');
   }
  };

})