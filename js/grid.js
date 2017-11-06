$("#sprite-button").on("click", function(){
  $("#coffee-info").fadeIn("slow");
  $("#film-info").delay(100).fadeIn("slow");
  $("#climb-info").delay(200).fadeIn("slow");
  $("#music-info").delay(300).fadeIn("slow");
});

$("#coffee-info").on("mouseover", function(){
  $("#long").addClass("long-color");
});

$("#film-info").on("mouseover", function(){
  $("#creative").addClass("creative-color");
  $("#expressive").addClass("expressive-color");
});

$("#climb-info").on("mouseover", function(){
  $("#challenge").addClass("challenge-color");
});

$("#music-info").on("mouseover", function(){
  $("#unique").addClass("unique-color");
  $("#interactive").addClass("interactive-color");
});

var container = document.querySelector(".grid-container-circle");
var comp = document.querySelector("#sprite-comp")

container.addEventListener("mouseover", function() {
  comp.style.animation = ("sprite-4-steps-800 .5s steps(4) infinite");
  container.addEventListener("mouseout", function() {
    comp.style.animation = ("");
  });
});
