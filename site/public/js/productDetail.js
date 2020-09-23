window.onload = function() {

    let calificaciones = document.getElementById('calificaciones');
    let review = document.querySelector('.review');

    calificaciones.onclick = function(){
        
        fetch('/ratings/product/'+ id)
        .then(response => response.json())
        .then(ratings => {
            if (ratings.data.length > 0) {
                review.innerHTML += '<h4> Puntaje Promedio: <span class="Stars" style="--rating:'+ ratings.meta.average + ';" aria-label="Rating of this product is' + ratings.meta.average + 'out of 5.">' + ratings.meta.average + ' de 5</span></h4>';
                for (let i=0; i<ratings.data.length; i++) {
                    let contenido = '<article><div>'
                    let fecha = new Date(ratings.data[i].createdAt)
                    contenido += '<h6><b>' + ratings.data[i].user.alias + '</b><span class="Stars" style="--rating: ' + ratings.data[i].rating +';" aria-label="Rating of this product is' + ratings.data[i].rating + 'out of 5."></span></h6>';
                    contenido += '<p>'+ fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear() + '</p>';
                    contenido += '</div>';
                    contenido += '<p>' + ratings.data[i].review + '</p>';
                    contenido += '</article>';

                    review.innerHTML += contenido;
                };
            } else {
                review.innerHTML += '<h4>No existen reseñas para este producto</h4>';
            }        
        })
        .catch(e => console.log(e));
    }
}