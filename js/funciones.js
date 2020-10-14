

$(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $('[data-toggle="popover"]').popover({
    placement: "bottom",
    trigger: "hover",
  });
  
modInicio();

});


function modInicio() {
  $("#contenedor").empty();
 
  
  $("#contenedor").load("pages/inicio.html", function () {
  });
 
};
function modCategorias() {
  $("#contenedor").empty();
  $("#contenedor").load("pages/Cat.html", function () {
  });
};
function modComponentes() {
  $("#contenedor").empty();
  $("#contenedor").load("pages/comp.html", function () {
  });
};
function modContactanos() {
  $("#contenedor").empty();
  $("#contenedor").load("pages/cont.html", function () {
  });
};
function modNosotros() {
  $("#contenedor").empty();
  $("#contenedor").load("pages/nosotros.html", function () {
  });
};


/*$(function () {

  $('[data-toggle="popover"]').popover({
    placement: "bottom",
    trigger: "hover",
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
*/
