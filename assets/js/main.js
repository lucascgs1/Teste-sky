// variaveis
let resultado = [];

//metodo principal
$(document).ready(function () {
    // get
    $.get("https://sky-frontend.herokuapp.com/movies", (data, status) => {
        resultado = data;

        gerarCarousel(data);
        console.log(data);
    });
});


// funcoes
function gerarCarousel(lista) {
    let conteudo = '';

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].type == 'menu') {
            console.log('teste');
        } else {
            conteudo = '<div class="col-12" id="' + lista[i].type + '">' +
                '<div class="row">' +
                '<h3>' + lista[i].title + '</h3>' +
                '</div>' +
                '<div class="row">' +
                '<div class="' + lista[i].type + ' carousel">' +
                '<ul class="slides" id="' + lista[i].type + '-slides">' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>';
            console.log(lista[i].type);
            console.log(conteudo);
            $(".container-fluid").append(conteudo);

            if (lista[i].movies != null)
                lista[i].items = lista[i].movies;

            if (lista[i].items != null)
                for (let j = 0; j < lista[i].items.length; j++) {
                    let slide = '<li>' +
                        '<img src = "assets/images/' + lista[i].type + '/' + (j + 1) + '.jpeg" alt="' + lista[i].items[j].title + '" />' +
                        '<span class="icon-shop"><i class="fas fa-shopping-cart"></i></span>' +
                        '</li>';

                    console.log(slide)
                    $('#' + lista[i].type + '-slides').append(slide);
                }
        }
    }

    $('.highlights').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 700,
        itemMargin: 2,
        controlNav: false,
        directionNav: true,
    });

    $('.carousel-portrait').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 175,
        itemMargin: 2,
        controlNav: false,
        directionNav: true,
        // rtl: true
    });

}