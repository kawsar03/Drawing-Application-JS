function eraserTool() { // Create a constructor function 
    this.name = 'eraserDrawTool'; // Assign name property to the function
    this.icon = 'assets/eraserTool.jpg'; // Assign icon to be displayed in HTML from assets folder

    var previousMouseY = -1; // Set variable off canvas

    this.draw = function () { // Open draw method this allows for more interaction. 
        if (mouseIsPressed) { // if mouse is pressed
            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            } else {
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        } else {
            previousMouseX = -1;
            previousMouseY = -1;
        }
    };
}
