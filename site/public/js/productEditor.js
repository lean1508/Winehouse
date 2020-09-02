window.onload = function() {

    let formSku = document.getElementById('form-sku');
    let formName = document.getElementById('form-name');
    let formPrice = document.getElementById('form-price');
    let formVolume = document.getElementById('form-volume');
    let formDescription = document.getElementById('form-description');
    let formImgSm = document.getElementById('form-img-sm');
    let formImgLg = document.getElementById('form-img-lg');

    let ulErroresSku = document.getElementById('errores-sku');
    let ulErroresName = document.getElementById('errores-name');
    let ulErroresPrice = document.getElementById('errores-price');
    let ulErroresVolume = document.getElementById('errores-volume');
    let ulErroresDescription = document.getElementById('errores-description');
    let ulErroresImgSm = document.getElementById('errores-img-sm');
    let ulErroresImgLg = document.getElementById('errores-img-lg');

    formSku.addEventListener('submit', function (evento) {
        if (!validacionSku(evento)) {
            return evento.preventDefault();
        } else {
            return formSku.onsubmit();
        }
    });

    formName.addEventListener('submit', function (evento) {
        if (!validacionName(evento)) {
            return evento.preventDefault();
        } else {
            return formName.onsubmit();
        }
    });

    formPrice.addEventListener('submit', function (evento) {
        if (!validacionPrice(evento)) {
            return evento.preventDefault();
        } else {
            return formPrice.onsubmit();
        }
    });

    formVolume.addEventListener('submit', function (evento) {
        if (!validacionVolume(evento)) {
            return evento.preventDefault();
        } else {
            return formVolume.onsubmit();
        }
    });

    formDescription.addEventListener('submit', function (evento) {
        if (!validacionDescription(evento)) {
            return evento.preventDefault();
        } else {
            return formDescription.onsubmit();
        }
    });

    formImgSm.addEventListener('submit', function (evento) {
        if (!validacionImgSm(evento)) {
            return evento.preventDefault();
        } else {
            return formImgSm.onsubmit();
        }
    });

    formImgLg.addEventListener('submit', function (evento) {
        if (!validacionImgLg(evento)) {
            return evento.preventDefault();
        } else {
            return formImgLg.onsubmit();
        }
    });

    function validacionSku(evento) {
        let sku = formSku.elements[0];
        let errores = []
        ulErroresSku.classList.add('alert-danger');

        let regexSku = /^[0-9]{8,}$/
        if (!regexSku.test(sku.value)) {
            errores.push("El campo SKU debe tener un mínimo de 8 dígitos numéricos");
            sku.classList.add('is-invalid');
            sku.classList.remove('is-valid');
        } else {
            sku.classList.add('is-valid');
            sku.classList.remove('is-invalid');
        }

        if (errores.length > 0) {
            ulErroresSku.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErroresSku.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            return true;
        }
    }

    function validacionName(evento) {
        let nombre = formName.elements[0];
        let errores = []
        ulErroresName.classList.add('alert-danger');

        if (nombre.value.length < 5) {
            errores.push("El campo producto/nombre debe tener un mínimo de 5 caracteres");
            nombre.classList.add('is-invalid');
            nombre.classList.remove('is-valid');
        } else {
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');
        }

        if (errores.length > 0) {
            ulErroresName.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErroresName.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            return true;
        }
    }

    function validacionPrice(evento) {
        let precio = formPrice.elements[0];
        let errores = []
        ulErroresPrice.classList.add('alert-danger');

        let regexPrecio = /^[0-9]*$/
        if (!regexPrecio.test(precio.value)) {
            errores.push("El campo precio es obligatorio y sólo acepta números");
            precio.classList.add('is-invalid');
            precio.classList.remove('is-valid');
        } else {
            precio.classList.add('is-valid');
            precio.classList.remove('is-invalid');
        }

        if (errores.length > 0) {
            ulErroresPrice.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErroresPrice.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            return true;
        }
    }

    function validacionVolume(evento) {
        let volumen = formVolume.elements[0];
        let errores = []
        ulErroresVolume.classList.add('alert-danger');

        let regexVol = /^[0-9]{3,}$/
        if (!regexVol.test(volumen.value)) {
            errores.push("El campo volumen debe tener un mínimo de tres dígitos");
            volumen.classList.add('is-invalid');
            volumen.classList.remove('is-valid');
        } else {
            volumen.classList.add('is-valid');
            volumen.classList.remove('is-invalid');
        }

        if (errores.length > 0) {
            ulErroresVolume.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErroresVolume.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            return true;
        }
    }

    function validacionDescription(evento) {
        let descripcion = formDescription.elements[0];
        let errores = []
        ulErroresDescription.classList.add('alert-danger');

        if (descripcion.value.length < 20) {
            errores.push("El campo descripción debe tener un mínimo de 20 caracteres");
            descripcion.classList.add('is-invalid');
            descripcion.classList.remove('is-valid');
        } else {
            descripcion.classList.add('is-valid');
            descripcion.classList.remove('is-invalid');
        }

        if (errores.length > 0) {
            ulErroresDescription.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErroresDescription.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            return true;
        }
    }

    function validacionImgSm(evento) {
        let img_sm = formImgSm.elements[0];
        let errores = []
        ulErroresImgSm.classList.add('alert-danger');

        let ism = img_sm.value.split('.');
        if (ism[1] != 'jpg' && ism[1] != 'jpeg' && ism[1] != 'png' && ism[1] != 'gif') {
            errores.push('La imagen debe ser un archivo JPG, JPEG, PNG o GIF.');
            img_sm.classList.add('is-invalid');
            img_sm.classList.remove('is-valid');
        } else {
            img_sm.classList.remove('is-invalid');
            img_sm.classList.add('is-valid');
        }

        if (errores.length > 0) {
            ulErroresImgSm.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErroresImgSm.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            return true;
        }
    }

    function validacionImgLg(evento) {
        let img_lg = formImgLg.elements[0];
        let errores = []
        ulErroresImgLg.classList.add('alert-danger');

        let ilg = img_lg.value.split('.');
        if (ilg[1] != 'jpg' && ilg[1] != 'jpeg' && ilg[1] != 'png' && ilg[1] != 'gif') {
            errores.push('La imagen debe ser un archivo JPG, JPEG, PNG o GIF.');
            img_lg.classList.add('is-invalid');
            img_lg.classList.remove('is-valid');
        } else {
            img_lg.classList.remove('is-invalid');
            img_lg.classList.add('is-valid');
        }

        if (errores.length > 0) {
            ulErroresImgLg.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErroresImgLg.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            return true;
        }
    }

}