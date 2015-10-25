	function _kd(e)
	{
		switch (e.keyCode)
		{
			case 27:
				if(qe <=1)
				E = !E
				qe += 1;
				break;
			case 32:
				window.print();
				break;
			default:
				console.log("Key " + e.keyCode);
				break;
		}
	}
	function _ku(e)
	{
		switch (e.keyCode)
		{
			case 27:
				qe = 0;
				break;
		}
	}
	document.addEventListener("keydown", _kd, true);
	document.addEventListener("keyup", _ku, true);
	//MOUSE
	function mouseMove(e)
	{
		if(e.offsetX) {
			mouse_x = e.offsetX;
			mouse_y = e.offsetY;
		}
		else if(e.layerX) {
			mouse_x = e.layerX;
			mouse_y = e.layerY;
		}
		if(mouse_pressed)
		console.log(mouse_x + "  " + mouse_y)
	}
	var _mouseUp = function(e)
	{
		mouse_pressed = false;
	}
	var _mouseDown = function(e)
	{
		mouse_pressed = true;
	}
	canvas.addEventListener("mousemove", mouseMove);
	canvas.addEventListener("mouseup",_mouseUp);
	canvas.addEventListener("mousedown",_mouseDown);
	
	function dC(x,y,r,a,b,d,c)
	{
		context.strokeStyle=c;
		context.stroke();
		context.beginPath();
		context.arc( x, y, r, a,b * Math.PI,d);
	}
	function L(x,y,zx,zy)
	{
		context.moveTo(x,y);
		context.lineTo(zx,zy);
		context.strokeStyle="#3b6b5a";
	}
	function dR(x,y,w,h,c,id)
	{
		context.fillStyle = c;
		context.fillRect(x,y,w,h)
	}
	function dRs(x,y,w,h,l,s)
	{
		context.beginPath();
		context.lineWidth= l;
		context.strokeStyle= s;
		context.rect(x,y,w,h); 
		context.stroke();
	}
	function dT(x,y,text,color,font)
	{
		context.fillStyle = color;
		context.font = font;
		context.fillText(text, x, y);		
	}
	function dI(img,x,y,w,h)
	{
		context.drawImage(img,x,y,w,h)
	}	