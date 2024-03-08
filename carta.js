$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });

  // Mostrar modal al hacer clic en la carta
  $(".card").click(function () {
    $("#myModal").css("display", "block");
  });

  // Cerrar modal al hacer clic en la "x"
  $(".close").click(function () {
    $("#myModal").css("display", "none");
  });

  // Cerrar modal al hacer clic fuera del modal
  $(window).click(function (event) {
    if (event.target.id === "myModal") {
      $("#myModal").css("display", "none");
    }
  });
});
