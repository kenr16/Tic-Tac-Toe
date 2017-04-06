$(document).ready(function() {

  //event.preventDefault();

  function Square(square1, square2, square3, square4, square5, square6, square7, square8, square8, square9, square10) {
    this.square1 = square1;
    this.square2 = square2;
    this.square3 = square3;
    this.square4 = square4;
    this.square5 = square5;
    this.square6 = square6;
    this.square7 = square7;
    this.square8 = square8;
    this.square9 = square9;
    this.square10 = square10}

  var squareLog = new Square(
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ");


  var changeSymbol = function(inputSymbol) {
    if (inputSymbol === " ") {
      inputSymbol = "X";
    } else if (inputSymbol === "X") {
      inputSymbol = "O";
    } else if (inputSymbol === "O") {
      inputSymbol = " ";
    }
    return inputSymbol
  }



  $(".square1").click(function() {
    var inputSymbol = changeSymbol(squareLog.square1);
    squareLog.square1 = inputSymbol;
    $(".square1").text(inputSymbol);
  });

  $(".square2").click(function() {
    var inputSymbol = changeSymbol(squareLog.square2);
    squareLog.square2 = inputSymbol;
    $(".square2").text(inputSymbol);
  });

  $(".square3").click(function() {
    var inputSymbol = changeSymbol(squareLog.square3);
    squareLog.square3 = inputSymbol;
    $(".square3").text(inputSymbol);
  });

  $(".square4").click(function() {
    var inputSymbol = changeSymbol(squareLog.square4);
    squareLog.square4 = inputSymbol;
    $(".square4").text(inputSymbol);
  });

  $(".square5").click(function() {
    var inputSymbol = changeSymbol(squareLog.square5);
    squareLog.square5 = inputSymbol;
    $(".square5").text(inputSymbol);
  });

  $(".square6").click(function() {
    var inputSymbol = changeSymbol(squareLog.square6);
    squareLog.square6 = inputSymbol;
    $(".square6").text(inputSymbol);
  });

  $(".square7").click(function() {
    var inputSymbol = changeSymbol(squareLog.square7);
    squareLog.square7 = inputSymbol;
    $(".square7").text(inputSymbol);
  });

  $(".square8").click(function() {
    var inputSymbol = changeSymbol(squareLog.square8);
    squareLog.square8 = inputSymbol;
    $(".square8").text(inputSymbol);
  });

  $(".square9").click(function() {
    var inputSymbol = changeSymbol(squareLog.square9);
    squareLog.square9 = inputSymbol;
    $(".square9").text(inputSymbol);
  });




































});
