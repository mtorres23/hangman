//var name =prompt("Whats your name?");
//alert("Hello " + name + " , hope you're ready to play some hangman!");//


// Word Bank

Words = {};
Words.List = [];

Words.List[0] = "soul food";
Words.List[1] = "greek";
Words.List[2] = "japanese";
Words.List[3] = "spanish";
Words.List[4] = "american";
Words.List[5] = "indian";
Words.List[6] = "cajun";
Words.List[7] = "thai";
Words.List[8] = "caribbean";
Words.List[9] = "italian";

Words.Length = Words.List.length;

Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 9;
Main.NumInWordBank = Words.Length;

Main.Word = "test";
Main.WordU = "";

// Functions

Main.PullWord = function() {
  Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];
}

Main.SetUnderline = function() {
  Main.PullWord();
  for (i=0; i < Main.Word.length; i++) {
    Main.WordArray[i] = Main.Word.charAt(i);
    Main.WordUArray[i] = "_";
  }
  Main.WordU = Main.WordUArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;
  document.getElementById("numLetters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter){
  Main.Changes = 0;
  for(i=0; i < Main.Word.length; i++){
    Main.WordArray[i] = Main.Word.charAt(i);
    if(Main.Word.charAt(i) == letter){
    Main.WordUArray[i] = letter;
    Main.Changes += 1;
    }
  }
  if(Main.Changes < 1){
    Main.Lives -= 1;
    document.getElementById("lives").innerHTML = Main.Lives;
  }
  Main.WordU = Main.WordUArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;

  Main.Word1 = Main.WordArray.join("");
  Main.Word2 = Main.WordUArray.join("");

  if(Main.Lives < 1){
    document.getElementById("WORD").innerHTML = Main.Word1;
    alert("You Are Out Of Lives, you lose!");
    window.location.reload();

  }
  if(Main.Word1 === Main.Word2){
    alert("You Won!");
    window.location.reload();
  }
}

Main.PullWord();

Main.SetUnderline();





// Buttons

$(function(){
  $("#a").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("a");
  });
  }
);

$(function(){
  $("#b").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("b");
  });
  }
);

$(function(){
  $("#c").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("c");
  });
  }
);

$(function(){
  $("#d").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("d");
  });
  }
);

$(function(){
  $("#e").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("e");
  });
  }
);

$(function(){
  $("#f").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("f");
  });
  }
);

$(function(){
  $("#g").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("g");
  });
  }
);

$(function(){
  $("#h").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("h");
  });
  }
);

$(function(){
  $("#i").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("i");
  });
  }
);

$(function(){
  $("#j").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("j");
  });
  }
);

$(function(){
  $("#k").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("k");
  });
  }
);$(function(){
  $("#l").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("l");
  });
  }
);

$(function(){
  $("#m").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("m");
  });
  }
);

$(function(){
  $("#n").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("n");
  });
  }
);

$(function(){
  $("#o").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("o");
  });
  }
);

$(function(){
  $("#p").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("p");
  });
  }
);

$(function(){
  $("#q").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("q");
  });
  }
);

$(function(){
  $("#r").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("r");
  });
  }
);

$(function(){
  $("#s").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("s");
  });
  }
);

$(function(){
  $("#t").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("t");
  });
  }
);

$(function(){
  $("#u").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("u");
  });
  }
);

$(function(){
  $("#v").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("v");
  });
  }
);$(function(){
  $("#w").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("w");
  });
  }
);

$(function(){
  $("#x").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("x");
  });
  }
);

$(function(){
  $("#y").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("y");
  });
  }
);

$(function(){
  $("#z").click(function(event) {
      event.preventDefault();
      Main.UpdateLetter("z");
  });
  }
);

function myFunction() {
    document.getElementById("motivation").innerHTML = "Psych! You're on your own";
}
