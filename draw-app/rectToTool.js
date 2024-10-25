function RectToTool() { // Create a constructor function
	this.icon = "assets/rectTo.jpg"; // This assigns an icon to be displayed within the HTML from the assets folder
	this.name = "RectTo"; // Assigns a name property to the constructor function 

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    // Assigns variables values at the start of the function

	this.draw = function(){ // Opens the draw method within the constructor function. This allows for more interaction to happen
		if(mouseIsPressed) {
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();} // Calls Load Pixels

			else{
				updatePixels(); // Calls Update Pixels
				rect(startMouseX, startMouseY, mouseX, mouseY); // Draws a rectangle respective to the start MouseX and Y and mouseX and Y.
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
            
            // Reverts variables back to the start of the function. startMouseX and Y is set off the canvas and drawing is false.
		}
	};


}