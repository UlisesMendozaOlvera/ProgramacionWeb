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

$("#validatedCustomFile1").change(function () {
  readURL1(this,'#urlImage1');
});
$("#validatedCustomFile2").change(function () {
  readURL1(this,'#urlImage2');});
$('[data-toggle2="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover({
  placement: "bottom",
  trigger: "hover",
});

});

function readURL1(input,img) {
  if (input.files[0].type == 'image/jpeg' || input.files[0].type == 'image/png') {
      $.each(jQuery(input)[0].files, function (i, file) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $(img).attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      });
  } else {
      alert("Solo se permiten archivos .jpg y .png");
  }
};

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

