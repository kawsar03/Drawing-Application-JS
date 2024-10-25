function RainbowTool(){ // Starts a constructor function
	//set an icon and a name for the object
	this.icon = "assets/rainbow.jpg"; //Assigns an iucon to be displayed in the HTML from the assets folder
	this.name = "rbow"; //Assigns a name property for the function

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
    var previousMouseY = -1;
    
    //Sets variables values at the start of the function

    this.draw = function(){ // Opens draw method and allows for more interaction to take place.

      let brushColour = color((12 * frameCount) % 360, 40, 100);
        //if mouse has been pressed
        if(mouseIsPressed){
            //check if they previousX and Y are -1. set them to the current
            //mouse X and Y if they are.
            if (previousMouseX == -1){
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            //if we already have values for previousX and Y we can draw a line from 
            //there to the current mouse location
            else{
                fill(brushColour);
                stroke(brushColour);
                strokeWeight(5);
                strokeCap(ROUND);
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        //if the user has released the mouse we want to set the previousMouse values 
        //back to -1.
        //try and comment out these lines and see what happens!
        else{
            previousMouseX = -1;
            previousMouseY = -1;
        }
    };
}