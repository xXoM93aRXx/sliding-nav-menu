$(document).ready(function () {
  let isClicked = false;
  let blue = $(".blue");
  let container = $("#container");

  $("#btn").click(function () {
    isClicked = !isClicked;

    if (isClicked) {
      blue.css("transform", "skewX(-20deg)");
      container.css("right", "0px");
    } else {
      blue.css("transform", "skewX(0deg)");
      container.css("right", "-1000px");
    }
  });
});
