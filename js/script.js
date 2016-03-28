var offset = 5;
var car1clicks = 0;
var car2clicks = 0;
var winner = false;
//moves cars
$("body").keyup(function moveCar1 (e) {
  if (e.keyCode == '39') {
    var pos = $("#d").position();
    $("#d").css('left', pos.left + offset);
    car1clicks++;
    console.log("car 1 has " + car1clicks + " moves");

    } else if (e.keyCode == '88') {
      var pos = $("#c").position();
      $("#c").css('left', pos.left + offset);
      car2clicks++;
      console.log("car 2 has " + car2clicks + " moves");

    } if (car2clicks > 100) {
          alert("player 2 wins");

    } if (car1clicks > 100) {
          alert("player 1 wins");
    }
  });

$('#reset').on('click', function(){
  location.reload();
});
