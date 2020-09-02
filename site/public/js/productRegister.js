// Validaciones del registro de productos
window.addEventListener('load', function () {

    let formulario = document.getElementById('formulario');
    let erroresProductos = document.getElementById('erroresProductos')

    formulario.addEventListener('submit', function (evento) {
        if (!validaciones(evento)) {
            return evento.preventDefault();
        } else {
            return formulario.onsubmit();
        }
    });


    function validaciones(evento) {
        let {sku,categoria_id, nombre, precio, img_sm, img_lg, volumen,descripcion} = formulario.elements;
        let errores = []
        erroresProductos.classList.add('alert-danger');

        let regexSku = /^[0-9]{8,}$/
        if (!regexSku.test(sku.value)) {
            errores.push("El campo SKU debe tener un mínimo de 8 dígitos numéricos");
            sku.classList.add('is-invalid');
            sku.classList.remove('is-valid');
        } else {
            sku.classList.add('is-valid');
            sku.classList.remove('is-invalid');
        }

        if (nombre.value.length < 5) {
            errores.push("El campo producto/nombre debe tener un mínimo de 5 caracteres");
            nombre.classList.add('is-invalid');
            nombre.classList.remove('is-valid');
        } else {
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');
        }

        if (categoria_id.value == "") {
            errores.push("Debe seleccionar una categoria.");
            categoria_id.classList.add('is-invalid');
            categoria_id.classList.remove('is-valid');
        } else {
            categoria_id.classList.add('is-valid');
            categoria_id.classList.remove('is-invalid');
        }

        let regexPrecio = /^[0-9]*$/
        if (!regexPrecio.test(precio.value)) {
            errores.push("El campo precio es obligatorio y sólo acepta números");
            precio.classList.add('is-invalid');
            precio.classList.remove('is-valid');
        } else {
            precio.classList.add('is-valid');
            precio.classList.remove('is-invalid');
        }

        let ism = img_sm.value.split('.');
        if (ism[1] != 'jpg' && ism[1] != 'jpeg' && ism[1] != 'png' && ism[1] != 'gif') {
            errores.push('La imagen chica es obligatoria y debe ser un archivo JPG, JPEG, PNG o GIF.');
            img_sm.classList.add('is-invalid');
            img_sm.classList.remove('is-valid');
        } else {
            img_sm.classList.remove('is-invalid');
            img_sm.classList.add('is-valid');
        }

        let ilm = img_lg.value.split('.');
        if (ilm[1] != 'jpg' && ilm[1] != 'jpeg' && ilm[1] != 'png' && ilm[1] != 'gif') {
            errores.push('La imagen grande es obligatoria y debe ser un archivo JPG, JPEG, PNG o GIF.');
            img_lg.classList.add('is-invalid');
            img_lg.classList.remove('is-valid');
        } else {
            img_lg.classList.remove('is-invalid');
            img_lg.classList.add('is-valid');
        }

        let regexVol = /^[0-9]{3,}$/
        if (!regexVol.test(volumen.value)) {
            errores.push("El campo volumen debe tener un mínimo de tres dígitos");
            volumen.classList.add('is-invalid');
            volumen.classList.remove('is-valid');
        } else {
            volumen.classList.add('is-valid');
            volumen.classList.remove('is-invalid');
        }

        if (descripcion.value.length < 20) {
            errores.push("El campo descripción debe tener un mínimo de 20 caracteres");
            descripcion.classList.add('is-invalid');
            descripcion.classList.remove('is-valid');
        } else {
            descripcion.classList.add('is-valid');
            descripcion.classList.remove('is-invalid');
        }

        if (errores.length > 0) {
            erroresProductos.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                erroresProductos.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            return true;
        }
    }

})