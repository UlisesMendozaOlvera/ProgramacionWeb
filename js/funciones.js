$(function(){ 
modInicio();
$('#Vermas').on('show.bs.modal', function (e) {
  console.log('el modal se está mostrando');
  $('#Vermas').removeClass('btn-primary');
  $('#Vermas').addClass('btn-success');
  $('#Vermas').prop('disabled', true)
});

$('#Vermas').on('shown.bs.modal', function (e) {
  console.log('el modal se mostró');
});

$('#Vermas').on('hide.bs.modal', function (e) {
  console.log('el modal se oculta');
});

$('#Vermas').on('hidden.bs.modal', function (e) {
  console.log('el modal se ocultó');
  $('#Vermas').prop('disabled', false)
});
});

$(function () {
  $('[data-toggle2="tooltip"]').tooltip();
});
$(function () {
  $('[data-toggle="popover"]').popover({
    placement: "bottom",
    trigger: "hover",
  });
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