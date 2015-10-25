var r = {x:725,y:23,s:20}
var g = {x:748,y:55,s:20}
var b = {x:771,y:23,s:20}
var game = function()
	{
		this.draw = function()
		{
			dI(hud.img,hud.x,hud.y,hud.w,hud.h)
		}
		this.update = function ()
		{
			for(var i = 0;i < linha;i++)
			{
				for (var n = 0;n < coluna;n++)
				{
					if(mouse_x >= grid_x[i] && mouse_x <= grid_x[i] + grid_w && mouse_y >= grid_y[n] && mouse_y <= grid_y[n] + grid_h && mouse_pressed)
					{
						dR(grid_x[i],grid_y[n],grid_w,grid_h,color)
					}
				}
			}
			if(E)
			{
				scene = 'pause';
			}
			if(mouse_x >= r.x && mouse_x <= r.x+ r.y && mouse_y >= r.y && mouse_y <= r.y + r.s && mouse_pressed)
			{
				color = 'red'
			}
			if(mouse_x >= b.x && mouse_x <= b.x+ b.y && mouse_y >= b.y && mouse_y <= b.y + b.s && mouse_pressed)
			{
				color = 'blue'
			}
			if(mouse_x >= g.x && mouse_x <= g.x+ g.y && mouse_y >= g.y && mouse_y <= g.y + g.s && mouse_pressed)
			{
				color = 'green'
			}
		}
	}
var game = new game();