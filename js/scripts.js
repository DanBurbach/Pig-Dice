function random() {
  return Math.floor((Math.random() * 6) + 1);
};
var score = 0;
var hold = 0;
var p1score = 0;
var p2score = 0;
var turn = 0;
function Player() {
  this.score = 0;
}


$(document).ready(function(){
  function gameStuff() {
    if (turn === 0) {
      $("#player1").css("text-decoration", "none");
      player1.score = player1.score + hold;
      $("#p1score").text(player1.score);
      hold = 0;
      $("#holdvalue").text(hold);
      turn = 1;
      $("#player2").css("text-decoration", "underline");
      if (player1.score >= 100) {
        alert("Player1 wins");
      }
    }
    else {
      $("#player2").css("text-decoration", "none");
      player2.score = player2.score + hold;
      $("#p2score").text(player2.score);
      hold = 0;
      $("#holdvalue").text(hold);
      turn = 0;
      $("#player1").css("text-decoration", "underline");
      if (player2.score >= 100) {
        alert("Player2 wins");
      }
    }
  };
  $(".click").click(function(){
    $(".click").hide();
    $("#game").show();
    $("#title").hide();
    player1 = new Player();
    player2 = new Player();
  });
  $("#roll").click(function(){
    score = random();
    if (score === 1) {
      hold = 0;
      gameStuff();
    };
    $("#dicevalue").text(score);
    hold = hold+score;
    $("#holdvalue").text(hold);
    console.log(score);
  });
  $("#hold").click(function(){
    gameStuff();
  })
});
