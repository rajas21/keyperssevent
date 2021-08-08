canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
        alphabetkey();
	    document.getElementById("d1").innerHTML="you pressed Alphabetkey";
	else if(keyPressed >=48 && keyPressed<=57)
		{
		
			numberkey();
			document.getElementById(d1).innerHTML
	document.getElementById("d1").innerHTML="You pressed symbol or other key";
	console.log(arrowkey);
		}
	else if(keyPressed>=37 && keyPressed<=40)
{
	else if((==17)|| (keyPressed18|| keyPressed==27))

function aplhabetkey()
{
	
Alpkey.png
}
function numberkey()
numkey.png
	{
	
}
function arrowkey()
Arrkey.png
	{
}
function specialkey()
spkey.png
	{
	
}
function otherkey()
otherkey.png
	{
	img_image="otherkey.png";
	add();
}
	
