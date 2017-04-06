// Player, Space, Board, and Game

function Player(marker, name, active){
  this.marker = marker;
  this.name = name;
  this.active = active;
  this.arrayOfMarks = [];
}

Player.prototype.checkVictory = function() {
  //123
  if (this.arrayOfMarks.includes(1) && this.arrayOfMarks.includes(2) && this.arrayOfMarks.includes(3))  {
    return true;
  //456
  } else if (this.arrayOfMarks.includes(4) && this.arrayOfMarks.includes(5) && this.arrayOfMarks.includes(6)){
    return true;
  //789
  } else if (this.arrayOfMarks.includes(7) && this.arrayOfMarks.includes(8) && this.arrayOfMarks.includes(9)){
    return true;
  //147
  } else if (this.arrayOfMarks.includes(1) && this.arrayOfMarks.includes(4) && this.arrayOfMarks.includes(7)){
    return true;
  //258
  } else if (this.arrayOfMarks.includes(2) && this.arrayOfMarks.includes(5) && this.arrayOfMarks.includes(8)){
    return true;
    //369
  } else if (this.arrayOfMarks.includes(3) && this.arrayOfMarks.includes(6) && this.arrayOfMarks.includes(9)){
    return true;
    //159
  } else if (this.arrayOfMarks.includes(1) && this.arrayOfMarks.includes(5) && this.arrayOfMarks.includes(9)){
    return true;
    //357
  } else if (this.arrayOfMarks.includes(3) && this.arrayOfMarks.includes(5) && this.arrayOfMarks.includes(7)){
    return true;
  } else {
    console.log("Next player's turn!");
  }
}

Player.prototype.clickFunction = function(clickedSquare) {
  var toPush = parseInt(clickedSquare);
  this.arrayOfMarks.push(toPush);
  return this.marker;
}


function Space(state, coordinate, owner){
  this.state = state;
  this.coordinate = coordinate;
  this.owner = owner;
}

// function Board(spaces){
// }

// Board.prototype.isThreeInARow = function () {
// }

// Board.prototype.findSpaceByCoord = function () {
// }

// function Game(players, board){
// }

// Game.prototype.methodName = function () {
// }


// **********************************************************
// User Interface Logic:
// **********************************************************
$(document).ready(function() {
  var player1 = new Player("X", "Player 1", 1); // This establishes the players.
  var player2 = new Player("O", "Player 2", 0);




  $(".btn-danger").click(function() {
    location.reload();
  });

  $(".btn-primary").click(function() {
    do
      var aiSquare = Math.floor((Math.random() * 9) + 1);
    while ((player1.arrayOfMarks.includes(aiSquare) || player2.arrayOfMarks.includes(aiSquare))
    && ((player1.arrayOfMarks.length + player2.arrayOfMarks.length) < 9))


    if (player1.active == 1) {
      var marker = player1.clickFunction(aiSquare);
      if (player1.checkVictory() === true) {
        alert("Victory for Player 1");
        location.reload();
      }
      player1.active = 0;
    } else {
       var marker = player2.clickFunction(aiSquare);
       if (player2.checkVictory() === true) {
         alert("Victory for Player 2");
         location.reload();
       }
       player1.active = 1;
    }
    var takeThisSquare = document.getElementById(aiSquare);
    $(takeThisSquare).text(marker);

  });



  $(".square").click(function() {
    var clickedSquare = parseInt($(this).attr("id"));
    $(".player").toggleClass("hidden");
    if (!(player1.arrayOfMarks.includes(clickedSquare) || player2.arrayOfMarks.includes(clickedSquare))) {
      if (player1.active == 1) {
        var marker = player1.clickFunction(clickedSquare);
        if (player1.checkVictory() === true) {
          alert("Victory for Player 1");
          $(".congrats").toggleClass("hidden");
        }
        player1.active = 0;
      } else {
         var marker = player2.clickFunction(clickedSquare);
         if (player2.checkVictory() === true) {
           alert("Victory for Player 2");
           $(".congrats").toggleClass("hidden");
         }
         player1.active = 1;
      }
    }
    $(this).text(marker);
  });


});
