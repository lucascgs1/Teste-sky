// variaveis
let resultado = [];

//metodo principal
$(document).ready(function () {
  // get
  $.get("https://sky-frontend.herokuapp.com/movies", (data, status) => {
    resultado = data;

    teste(data);
    console.log(data);
    
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5
    });
  });
});


// funcoes
function teste(lista) {
  resultado.forEach(e => {
    console.log(e);


  });
}

