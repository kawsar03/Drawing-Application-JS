function TriangleToTool(){ // create constructor function
	this.icon = "assets/triangle.jpg";// Link this with the icon photo is the assets folder
	this.name = "TriTo";//Name this constructor function

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    // Assigns the variables values at the start of the function

	this.draw = function(){
        // This starts the draw method with in the constructor function. By doing so this allows for more interaction to take place.

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
//                This loads up the data for the pixels for the blank canvas into the pixel array. This has to be called before reading or writing to the array.
			}

			else{
				updatePixels();
//                This loads data from the pixel array to the canvas and updates it. Needs to be used alongside loadPixels().
				triangle(mouseX, mouseY, startMouseX, startMouseY, mouseX -200, mouseY - 200);//This will draw a triangle with repsect to the postion of MouseX and Y and the start Mousex and Y.
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
            // If there's been nothing is drawn on the canvas, the start Mouse X and Y is set to -1 (off the canvas) and drawing is set to false as the mouse is let onto the canvas
		}
	};


}