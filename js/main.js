$(document).ready(function(){
  var mktgdiv = $("#marketing")
  var growdiv = $("#thegrow")
  var ratsdiv = $("#dirtyrats")
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


})
