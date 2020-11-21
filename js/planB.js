// in planB.js listeners are not used.
var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");
// Set the width and color of the stroke.
pen.lineWidth = 1;
pen.strokeStyle = "blue";
// Press to start drawing.
canvas.onmousedown = start;
// Move to draw.
canvas.onmousemove = draw;
// Not press to finish drawing.
canvas.onmouseup = finish;
// mousePress indicates whether or not the mouse is pressed.
var mousePress = false;
var last = null;
function start(event) {
	mousePress = true;
}
function finish(event) {
	mousePress = false;
	last = null;
}
// Obtain the position of the mouse cursor on the canvas.
function pos(event){
	var ex=event.pageX - event.target.offsetLeft;
	var ey=event.pageY - event.target.offsetTop;
	return{
		x:ex,
		y:ey
	};
}
function draw(event) {
	if (!mousePress) return;
	var xy = pos(event);
	if (last!=null) {
		pen.beginPath();
		pen.moveTo(last.x, last.y);
		pen.lineTo(xy.x, xy.y);
		pen.stroke();
	}
	last=xy;	
}
// Click the pencil button, and the width of the stroke becomes 1.
var pencil = document.getElementById('pencil');
pencil.onclick = function() {
	pen.lineWidth = 1;
}
// Click the brush button, and the width of the stroke becomes 5.
var brush = document.getElementById('brush');
brush.onclick = function() {
	pen.lineWidth = 5;	
}
// Click the blue button, and the color of the stroke becomes blue.
var blue = document.getElementById('blue');
blue.onclick = function() {
	pen.strokeStyle = "blue";
}
// Click the red button, and the color of the stroke becomes red.
var red = document.getElementById('red');
red.onclick = function() {
	pen.strokeStyle = "red";
}
// Click the black button, and the color of the stroke becomes red.
var black = document.getElementById('black');
black.onclick = function() {
	pen.strokeStyle = "black";
}
// Click the day button, and the background becomes bright.
var day = document.getElementById('day');
day.onclick = drawInDay;
function drawInDay() {
	document.body.style.backgroundColor = "white";
	canvas.style.cssText = "border: 1px solid black;";
}
// Click the night button, and the background becomes dark.
var night = document.getElementById('night');
night.onclick = drawInNight;
function drawInNight() {
	document.body.style.backgroundColor = "grey";
	canvas.style.cssText = "border: 1px solid grey;";
}
// The background is bright during the day, while dark at night.
var date = new Date();
var hours = date.getHours();
if (hours > 6 && hours < 18) {
	drawInDay();
} else {drawInNight();}
// Click the new button, and a new canvas shows.
var another = document.getElementById('new');
another.onclick = function() {
	pen.clearRect(0,0,860,480);
}






