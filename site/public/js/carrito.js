window.onload = function() {

    let checkout = document.querySelector('.checkout');
    let contenidoAlertModal = document.getElementById('contenido-alert-modal'); 

    loggedUser == 'false' ? loggedUser=false : loggedUser=true;

    checkout.addEventListener('click', function(event){
        contenidoAlertModal.innerHTML = '';
        event.preventDefault();
        fetch('/cart/contentStockControl')
        .then(response => response.json())
        .then(check => {
            if (check.meta.result == false) {
                check.data.forEach(item => {
                    contenidoAlertModal.innerHTML += item.msg + '<br>'
                    $('#alert-modal').modal()
                });
                
            } else if (loggedUser==false) {
                contenidoAlertModal.innerText += "Debe iniciar sesión para finalizar la compra"
                $('#alert-modal').modal()
            } else {
                window.location.href = '/cart/delivery';
            }
        })
        .catch(e => console.log(e));
    });
      
}