function sprayCanTool()// Create Constructor Function 
{

    this.name = "sprayCanTool"; // Assigns a unqiue name to this function

    this.icon = "assets/sprayCan.jpg"; // Assigns an icon to be displayed on the HTML from the assets folder

    var points = 13; 

    var spread = 10;
    
    // Calls and assigns values to new variables. Points refer to the amount of dots within the spray and the spread refers to the space in between each dots. 

    this.draw = function()// This starts the draw method within the function. This allows for more interaction to take place and for the properties of variables to be overrided.
    {

        var r = random(5, 10);
        if(mouseIsPressed)
        {
            for(var i = 0; i < points; i++)
            {
                point (random (mouseX-spread, mouseX + spread) , random (mouseY-spread, mouseY + spread));
            }
        }
        
        // This for loop function randomises the spread for the tool in order for it to look more like a realistic spray
    };
}