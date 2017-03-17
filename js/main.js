$(document).ready(function(){
  var mktgdiv = $("#marketing");
  var growdiv = $("#thegrow");
  var ratsdiv = $("#dirtyrats");
  var aboutdiv = $("#about");
  var indexdiv = $("index");
  var cdiv = "#marketing";

  $(".growbutton").on('click', function(){
    $(cdiv).hide(265);
    $(growdiv).show(265);
    $(window).scrollTop(65)
    cdiv = "#thegrow";
  });

  $(".dirtyratsbutton").on('click', function(){
    $(cdiv).hide(265);
    $(ratsdiv).show(265);
    $(window).scrollTop(65)
    cdiv = "#dirtyrats";
  });

  $(".homebutton").on('click', function(){
    $(cdiv).hide(265);
    $(mktgdiv).show(265);
    $(window).scrollTop(65)
    cdiv = "#marketing";
  });


  $(".aboutbutton").on('click', function(){
    $(cdiv).hide(265);
    $(aboutdiv).show(265);
    $(window).scrollTop(65)
    cdiv = "#about";
  });

  $(".infoblock button").on('click', function(){
    if (this.data-link) {
      window.open(this.data-link, "_blank");
    }
  });
})
