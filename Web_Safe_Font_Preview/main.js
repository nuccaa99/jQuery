$(document).ready(() => {
    $("#text").on("keyup", (e) => {
      $(".preview").html($(e.currentTarget).val());
    });
    $("#font").on("change", (e) => {
      $(".preview").css({
        fontFamily: $(e.currentTarget).val(),
      });
    });
  
    $("#weight").on("change", (e) => {
      $(".preview").css({
        fontWeight: $(e.currentTarget).val(),
      });
    });
  
    $("#size").on("keyup", (e) => {
      let fontSize = $(e.currentTarget).val()+"px";
      $(".preview").css({
        fontSize: fontSize
      });
    });
    
  });
  