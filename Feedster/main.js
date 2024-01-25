$(document).ready(() => {
    $(".menu").on("mouseenter", () => {
      $(".nav-menu").show();
    }).on("mouseleave", () => {
      $(".nav-menu").hide();
    });
    $(".btn").on("mouseenter", (e) => {
      $(e.currentTarget).addClass(".btn-hover");
    }).on("mouseleave",(e) => {
      $(e.currentTarget).removeClass(".btn-hover");
    });
    $(".postText").on("keyup", (e) => {
      $(".postText").focus();
      let post = $(e.currentTarget).val();
      let remaining = 140-post.length;
      $('.characters').html(remaining);
      if(remaining<=0) {
        $(".wordcount").addClass("red");
      } else {
         $(".wordcount").removeClass("red");
      }
    })
  });
  