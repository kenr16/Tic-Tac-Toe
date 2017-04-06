(function(){

// Player, Space, Board, and Game

function Player(marker, name, active){
  this.marker = marker;
  this.name = name;
  this.active = active;
  this.arrayOfMarks = [];
}

Player.prototype.checkVictory = function() {
  //123
  if (this.arrayOfMarks.includes("1") && this.arrayOfMarks.includes("2") && this.arrayOfMarks.includes("3"))  {
    alert("Victory " + this.name +"!");
  //456
  } else if (this.arrayOfMarks.includes("4") && this.arrayOfMarks.includes("5") && this.arrayOfMarks.includes("6")){
    alert("Victory " + this.name + " !");
  //789
  } else if (this.arrayOfMarks.includes("7") && this.arrayOfMarks.includes("8") && this.arrayOfMarks.includes("9")){
    alert("Victory " + this.name + " !");
  //147
  } else if (this.arrayOfMarks.includes("1") && this.arrayOfMarks.includes("4") && this.arrayOfMarks.includes("7")){
    alert("Victory " + this.name + " !");
  //258
  } else if (this.arrayOfMarks.includes("2") && this.arrayOfMarks.includes("5") && this.arrayOfMarks.includes("8")){
    alert("Victory " + this.name + " !");
    //369
  } else if (this.arrayOfMarks.includes("3") && this.arrayOfMarks.includes("6") && this.arrayOfMarks.includes("9")){
    alert("Victory " + this.name + " !");
    //159
  } else if (this.arrayOfMarks.includes("1") && this.arrayOfMarks.includes("5") && this.arrayOfMarks.includes("9")){
    alert("Victory " + this.name + " !");
    //357
  } else if (this.arrayOfMarks.includes("3") && this.arrayOfMarks.includes("5") && this.arrayOfMarks.includes("7")){
    alert("Victory " + this.name + " !");
  } else {
    console.log("Next player's turn!");
  }
}

Player.prototype.clickFunction = function(clickedSquare) {
  this.arrayOfMarks.push(clickedSquare);
  this.checkVictory();
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



  $(".square").click(function() {
    var clickedSquare = $(this).attr("id");
    if (player1.arrayOfMarks.includes(clickedSquare) || player2.arrayOfMarks.includes(clickedSquare)) {
      return;
    }
    if (player1.active == 1) {
      var marker = player1.clickFunction(clickedSquare);
      player1.active = 0;
    } else {
       var marker = player2.clickFunction(clickedSquare);
       player1.active = 1;
    }
    $(this).text(marker);
  });


});

})();
