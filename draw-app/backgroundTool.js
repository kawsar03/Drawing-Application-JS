function BackgroundTool(){ // Creates constructor function 
    this.icon = "assets/background.jpg"; // Assigns icon from assets
    this.name = "backgroundTool"; // Assigns name property

this.draw = function () { //opens draw method
        if (
            mouseIsPressed &&
            mouseX > 0 &&
            mouseY > 0 &&
            mouseY < canvasContainer.elt.offsetHeight
        ) {
            background(colourP.selectedColour);
        }
    };
}