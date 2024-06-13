// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 300;

// Building Variables
let building1 = "blue";
let lightFrame = 0;

// Sky
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 800, 500);

// building 1
// blue: `rgb(0,0,255)`
// gray: `rgb(128,128,128)`
let rValue = 128;
let gValue = 128;
let bValue = 127;

ctx.fillStyle = `rgb(${rValue},${gValue},${bValue})`;
ctx.fillRect(100, 75, 100, 225);

// building 2
ctx.fillStyle = "blue";
ctx.fillRect(300, 75, 100, 225);

// building 3
ctx.fillStyle = "pink";
ctx.fillRect(230, 225, 60, 225);

// building 4
ctx.fillStyle = "lightblue";
ctx.fillRect(40, 90, 50, 225);

// building 5
ctx.fillStyle = "lightblue";
ctx.fillRect(420, 90, 50, 225);

// Star
ctx.strokeStyle = "yellow";
ctx.beginPath();
ctx.moveTo(430, 50);
ctx.lineTo(435, 45);
ctx.lineTo(440, 50);
ctx.lineTo(430, 47);
ctx.lineTo(435);
ctx.stroke();

// Building animation
if (lightFrame > 0 && lightFrame <= 128) {

}