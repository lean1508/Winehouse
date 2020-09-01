// funcionamiento de las validaciones del registro de productos

window.addEventListener("load", function () {

    let formulario = document.querySelector("form.formulario");

    form.formulario.addEventListener("submit", function(){

        let errores = []

        let sku = document.querySelector("input.form-control");
        if (sku.value.length == "") {
            errores.push("El campo SKU debe estar completo.");
        } else if (sku.value.lenght < 8 - 12) {
            errores.push("El campo SKU debe tener entre 8 y 12 caracteres.");
        }

        let nombre = document.querySelector("input.productos");
        if (nombre.value.length < 5) {
            errores.push("El campo producto/nombre debe tener más de 5 caracteres");
        }

        let categoria = document.querySelector("select.categorias")
        if (categoria.value == "") {
            errores.push("Debe seleccionar una categoria.");
        }

        let precio = document.querySelector("input.precio");
        if (precio.value == "") {
            errores.push("Debe seleccionar el precio del producto.");
        }

        let volumen = document.querySelector("input.volumen");
        if (volumen.value == "") {
            errores.push("Debe seleccionar el volumen del producto.");
        }

        function imagenchica() {
            let imgsm = document.querySelector("#label.imgsm");
            if (/\.(jpe?g|jpg|png|gif)$/i.test(file.files[0].name) === false) {
                errores.push("Colocar una imagén en formato JPEG, JPG, PNG o GIF.");
            }
        }

        function imagengrande() {
            let imglg = document.querySelector("#label.imglg");
            if (/\.(jpe?g|jpg|png|gif)$/i.test(file.files[0].name) === false) {
                errores.push("Colocar una imagén en formato JPEG, JPG, PNG o GIF.");
            }
        }

        let descripcion = document.querySelector("textarea.descripcion");
        if (descripcion.value = "") {
            errores.push("El campo descripción debe estar completo");
        }

        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector("div.errores ul")
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }



    })
})

