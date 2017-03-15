$(document).ready(function(){
  var mktgdiv = $("#marketing")
  var growdiv = $("#thegrow")
  var ratsdiv = $("#dirtyrats")
  var aboutdiv = $("#about")
  var cdiv = "#marketing"
  $(".growbutton").on('click', function(){
    $(cdiv).hide(250);
    $(growdiv).show(250);
    cdiv = "#thegrow";
  });

  $(".dirtyratsbutton").on('click', function(){
    $(cdiv).hide(250);
    $(ratsdiv).show(250);
    cdiv = "#dirtyrats";
  });

  $(".homebutton").on('click', function(){
    $(cdiv).hide(250);
    $(mktgdiv).show(250);
    cdiv = "#marketing";
  });


  $(".aboutbutton").on('click', function(){
    $(cdiv).hide(250);
    $(aboutdiv).show(250);
    cdiv = "#about";
  });

})
