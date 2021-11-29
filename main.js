
// Create canvas variable
var canvas= new fabric.Canvas('myCanvas');


//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_x=400;
hole_y=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("gold-h.png",function(IMG) {
      hole_obj= IMG;
	  hole_obj.scaleToHeight(50);
	  hole_obj.scaleToWidth(50);
	  hole_obj.set({
         top:hole_x,
		 left:hole_y
	  });
	  canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(IMG) {
		ball_obj= IMG;
		ball_obj.scaleToHeight(50);
		ball_obj.scaleToWidth(50);
		ball_obj.set({
		   top:ball_x,
		   left:ball_y
		});
		canvas.add(ball_obj);
	  });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="YOU HADE HIT THE GOAL !!!!**";
		document.getElementById("myCanvas").style.borderColor="red";
	}

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
	function up()
	{
		
		
			if(ball_x>=0){
			   ball_x= ball_x-block_image_height;
			   console.log("block image height =" + block_image_height );
			console.log("When Up arrow key is pressed, X ="+ ball_x + ", Y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		
			}
		
	}

	function down()
	{
		 
		 if(ball_x<=470){
			ball_x= ball_x+block_image_height;
			console.log("block image height =" + block_image_height );
		 console.log("When Down arrow key is pressed, X ="+ ball_x + ", Y =" + ball_y);
		 canvas.remove(ball_obj);
		 new_image();
	 
		 }
		 
	}

	function left()
	{
		if(ball_y >5)
		{
			
			ball_y= ball_y-block_image_width;
			console.log("block image width =" + block_image_width);
		 console.log("When left arrow key is pressed, X ="+ ball_x + ", Y =" + ball_y);
		 canvas.remove(ball_obj);
		 new_image();
		}
	}

	function right()
	{
		if(ball_y<=1050)
		{
			
			ball_y= ball_y+block_image_width;
			console.log("block image width =" + block_image_width);
		 console.log("When right arrow key is pressed, X ="+ ball_x + ", Y =" + ball_y);
		 canvas.remove(ball_obj);
		 new_image();
		}
	}
	
}

