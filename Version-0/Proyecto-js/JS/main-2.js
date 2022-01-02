$(document).ready(function() {

//Scroll arriba de la web

$('.subir').click(function(e) {
  e.preventDefault();

  $('html,body').animate({
      scrollTop: 0
  },500);
   return false;
});


//Login falso
$('#login form').submit(function(){
    var form_name= $("#form_name").val();

    localStorage.setItem("form_name", form_name);
});

  var form_name= localStorage.getItem("form_name");

  if (form_name!= null && form_name!="undefined") {
    var usuario=$("#usuario");
    usuario.html("<strong>Bienvenido,  "+form_name+"</strong>");
    usuario.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();

    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    });
  }

  //acordeon
  $("#acordeon").accordion();

 });

 //formulario

 $("form input[name='date']").datepicker({
   dateFormat: 'dd-mm-yy'

 });

$.validate({
  lang: 'es'
});
