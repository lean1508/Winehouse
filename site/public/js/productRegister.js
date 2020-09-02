// funcionamiento de las validaciones del registro de productos
window.addEventListener('load', function () {

    let formulario = document.getElementById('formulario');
    let productoErrores = document.getElementById('erroresProductos')

    formulario.addEventListener('submit', function (evento) {
        if (!validaciones(evento)) {
            return evento.preventDefault();
        } else {
            return formulario.submit();
        }

    })

    function validaciones(evento) {
        let {
            sku,categoria_id, nombre, precio, img_sm, img_lg, volumen,descripcion} = formulario.elements;
        let errores = []
        erroresProductos.classList.add('alert-danger');

        if (sku.value == '') {
            errores.push("El campo SKU debe estar completo.");
            sku.classList.add('is-invalid');
            sku.classList.remove('is-valid');
        } else {
            sku.classList.add('is-valid');
            sku.classList.remove('is-invalid');
        }

        if (nombre.lenght < 5) {
            errores.push("El campo producto/nombre debe tener más de 5 caracteres");
            nombre.classList.add('is-invalid');
            nombre.classList.remove('is-valid');
        } else {
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');
        }

        if (document.getElementById('categoria_id').value == "") {
            errores.push("Debe seleccionar una categoria.");
            categoria_id.classList.add('is-invalid');
            categoria_id.classList.remove('is-valid');
        } else {
            categoria_id.classList.add('is-valid');
            categoria_id.classList.remove('is-invalid');
        }

        if (precio.value == '') {
            errores.push("Debe seleccionar el precio del producto.");
            precio.classList.add('is-invalid');
            precio.classList.remove('is-valid');
        } else {
            precio.classList.add('is-valid');
            precio.classList.remove('is-invalid');
        }

        let ism = img_sm.value.split('.');
        if (ism[1] != 'jpg' && ism[1] != 'jpeg' && ism[1] != 'png' && ism[1] != 'gif') {
            errores.push('La imagen debe ser un archivo JPG, JPEG, PNG o GIF.');
            img_sm.classList.add('is-invalid');
            img_sm.classList.remove('is-valid');
        } else {
            img_sm.classList.remove('is-invalid');
            img_sm.classList.add('is-valid');
        }

        let ilm = img_lg.value.split('.');
        if (ilm[1] != 'jpg' && ilm[1] != 'jpeg' && ilm[1] != 'png' && ilm[1] != 'gif') {
            errores.push('La imagen debe ser un archivo JPG, JPEG, PNG o GIF.');
            img_lg.classList.add('is-invalid');
            img_lg.classList.remove('is-valid');
        } else {
            img_lg.classList.remove('is-invalid');
            img_lg.classList.add('is-valid');
        }

        if (volumen.value == '') {
            errores.push("Debe seleccionar el volumen del producto.");
            volumen.classList.add('is-invalid');
            volumen.classList.remove('is-valid');
        } else {
            volumen.classList.add('is-valid');
            volumen.classList.remove('is-invalid');
        }

        if (descripcion.value < 20) {
            errores.push("El campo descripción debe estar completo");
            descripcion.classList.add('is-invalid');
            descripcion.classList.remove('is-valid');
        } else {
            descripcion.classList.add('is-valid');
            descripcion.classList.remove('is-invalid');
        }

        if (erroresProductos.length > 0) {
            erroresProductos.innerHTML = '';
            for (let i = 0; i > errores.length; i++) {
                erroresProductos.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            return true;
        }
    }

})