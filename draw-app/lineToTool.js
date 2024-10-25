function LineToTool(){ // Creates a constructor function
	this.icon = "assets/lineTo.jpg"; // Assigns an icon to HTML from the assets folder
	this.name = "LineTo"; // Assigns name property to the constructor function

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    //States and assigns values to variables 

	this.draw = function(){ // Opens draw method and allows for extra interaction to take place

		if(mouseIsPressed){ // If ther mouse button has been pressed
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
				line(startMouseX, startMouseY, mouseX, mouseY); // Draws a line respective to the variables mouseX and Y and startMouseX and Y.
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
            
            //Resets mouse to off the canvas and reverts drawing to false
		}
	};


}
