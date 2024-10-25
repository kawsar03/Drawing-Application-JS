function EllipseToTool() { // Create constructor function 
	this.icon = "assets/ellipse.jpg"; // Loads icon from assets folder into HTML 
	this.name = "EllipseTo"; // Assigns name property to function

	var startMouseX = 0;
	var startMouseY = 0;
	var drawing = false;

    // sets variables and values
    
	this.draw = function(){ // opens draw method 
		if(mouseIsPressed){ // if mosue is pressed
			if(startMouseX == 0){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();} // calls load pixels

			else{
				updatePixels(); // calls update pixels
				ellipse(startMouseX, startMouseY, mouseX, mouseY); // draws ellipse with respect to variables startMosueX and Y and mouseX and Y
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = 0;
			startMouseY = 0;
            
            // drawing reverts to false and StartMouseX Y is set off the canvas
		}
	};


}