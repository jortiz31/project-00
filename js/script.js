var whiteShip = new Ufo("Player 1",39, '#player1');
var greenShip = new Ufo("Player 2",88, '#player2');

function Ufo(name, keyCode, id){
  $('body').on("keyup", function (event){
    if (event.keyCode===keyCode){
    $(id).offset({left:position += 50});
    console.log($(document).width());
    getWinner(id, position);
      }
    });
    this.name = name;
    this.keycode = keyCode;
    this.id = id;
    var position = 80;
  }

function getWinner(id, position){
    if (position >= $(window).width()) {
      alert(id + ' is the winner!');
    }
}

$('#reset').on('click', function(){
  location.reload();
});
