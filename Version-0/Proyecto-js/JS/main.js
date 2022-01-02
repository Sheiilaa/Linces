$(document).ready(function() {
 //slider
  $('.bxslider').bxSlider({
     mode: 'fade',
     captions: true,
     slideWidth: 600
   });

//selector de terma
var theme= $("#theme");

$("#style-1").click(function() {
  theme.attr("href", "CSS/style-1.css");

});

$("#style-2").click(function() {
  theme.attr("href", "CSS/style-2.css");

});

$("#style-3").click(function() {
  theme.attr("href", "CSS/style-3.css");

});

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

 });
