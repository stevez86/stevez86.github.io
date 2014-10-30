 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description:
// Overall mission:
// Goals:
// Characters:
// Objects:
// Functions:

// Pseudocode
// a square layout of a field with 4 buttons below it. Each button corresponds to a direction to have
//
//
//
//

// Initial Code

// NA

// Refactored Code

var BALL_DIAMETER = 86
var MOVE_DISTANCE = 86;
var FIELD_WIDTH = 6 * MOVE_DISTANCE + BALL_DIAMETER;
var FIELD_HEIGHT = 6 * MOVE_DISTANCE + BALL_DIAMETER;
var FIELD_BORDER = 5;
var BALL_BORDER = 1;

var positionLeft = 3 * MOVE_DISTANCE;
var positionTop = 3 * MOVE_DISTANCE;

var field = document.getElementById("field");
var ball = document.getElementById("ball");

field.style.width = FIELD_WIDTH + 2*BALL_BORDER + "px";
field.style.height = FIELD_HEIGHT + 2*BALL_BORDER + "px";
field.style.border = FIELD_BORDER + "px dotted red";
field.style["border-radius"] = BALL_DIAMETER/2 +"px";

ball.style.border = BALL_BORDER + "px solid black";
// ball.style["background-size"] = "110%";

ball.style.width = BALL_DIAMETER + "px";
ball.style.height = BALL_DIAMETER + "px";
ball.style["border-radius"] = BALL_DIAMETER/2 + "px";
ball.style.background = "url('happy-face.jpeg')";
ball.style["background-size"] = "111%";
ball.style["background-position"] = "center";

ball.style.top = positionTop + "px";
ball.style.left = positionLeft + "px";
ball.ishappy = true;

function changehappiness() {
  if (ball.ishappy == true) {
    makeunhappy();
  }
  else {
    makehappy();
  }
}

function makehappy() {
  ball.style.background = "url('happy-face.jpeg')";
  ball.style["background-size"] = "111%";
  ball.style["background-position"] = "center";
  document.getElementById("title").innerHTML = "Steve's Happy Ball";
  document.getElementById("happinessbutton").innerHTML = "Make Unhappy";
  ball.ishappy = true;
}

function makeunhappy() {
  ball.style.background = "url('unhappy-face.jpeg')";
  ball.style["background-size"] = "135%";
  ball.style["background-position"] = "center";
  document.getElementById("title").innerHTML = "Steve's Unhappy Ball";
  document.getElementById("happinessbutton").innerHTML = "Make Happy";
  ball.ishappy = false;
}

function moveLeft() {
  if (positionLeft > 0) {
    positionLeft -= MOVE_DISTANCE;
    ball.style.left = positionLeft + "px";
  }
  else {
    makeunhappy();
  }
}
function moveRight() {
  if (positionLeft < FIELD_WIDTH-BALL_DIAMETER) {
    positionLeft += MOVE_DISTANCE;
    ball.style.left = positionLeft + "px";
  }
  else {
    makeunhappy();
  }
}
function moveUp() {
  if (positionTop > 0) {
    positionTop -= MOVE_DISTANCE;
    ball.style.top = positionTop + "px";
  }
  else {
    makeunhappy();
  }
}
function moveDown() {
  if (positionTop < FIELD_HEIGHT-BALL_DIAMETER) {
    positionTop += MOVE_DISTANCE;
    ball.style.top = positionTop + "px";
  }
  else {
    makeunhappy();
  }
}


// Reflection
//
//
//
//
//
//
//
//