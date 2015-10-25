var menu = new Image();
menu.src = "Images/MainScreen.png"
var jogar = {x: 309,y:337, w:138, h:28}
var cre3 = {x: 311,y:388, w:138, h:28}
// Menu Object
var Menu2 = function(){
	this.draw = function()
	{
		dI(menu,0,0,800,600)
	}
	this.update = function ()
	{
		if(mouse_x >= jogar.x && mouse_x <= jogar.x + jogar.w && mouse_y >= jogar.y && mouse_y <= jogar.y + jogar.h && mouse_pressed)
		{
			context.clearRect(0,0,canvas.width,canvas.height)
			E = false;
			mouse_pressed = false;
			scene = "game";
		}
		if(mouse_x >= cre3.x && mouse_x <= cre3.x + cre3.w && mouse_y >= cre3.y && mouse_y <= cre3.y + cre3.h && mouse_pressed)
		{
			context.clearRect(0,0,canvas.width,canvas.height)
			mouse_pressed = false;
			scene = "creditos";
		}
	}
}
var Menu2 = new Menu2();
//Pause Object
var pause = function(){
	this.draw = function()
	{
		 dI(mp,0,0,800,900)
	}
	this.update = function ()
	{
		if(!E)
		{
			context.clearRect(0,0,canvas.width,canvas.height)
			clear = 1;
			scene = "game";
		}
		if(mouse_x >= 230 && mouse_x <= 310 && mouse_y >= 250 && mouse_y <= 340 && mouse_pressed)
		{
			context.clearRect(0,0,canvas.width,canvas.height)
			E = false;
			clear = 1;
			scene = 'Menu2';
		}
	}
}
var pause = new pause();

var cre = function(){
	this.draw = function()
	{
		dI(cre2,0,0,800,600)
	}
	this.update = function ()
	{
		if(mouse_x >= jogar.x && mouse_x <= jogar.x + jogar.w && mouse_y >= jogar.y && mouse_y <= jogar.y + jogar.h && mouse_pressed)
		{
			context.clearRect(0,0,canvas.width,canvas.height)
			mouse_pressed = false;
			scene = "game";
		}
	}
}
var cre = new cre();