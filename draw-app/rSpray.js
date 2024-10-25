function RainbowSprayTool()// Create a constructor function 
{

    this.name = "RsprayCanTool";// Create unique name property for the function

    this.icon = "assets/RainbowSpray.jpg"; // Assign an icon tro be displayed in HTML from the assets folder

    var points = 13; 

        var spread = 10;
    
    // Create and assign value to variables

        this.draw = function() // Start the draw method within the function to allow more interaction to take place.
        {
            let brushColour = color((12 * frameCount) % 360, 40, 100);
            
            //This array function means within 12 frames the Hue of the colour changes multiple times and with multiple shades.

            var r = random(5, 10);
            if(mouseIsPressed)
            {
                fill(brushColour);
                    stroke(brushColour);
                for(var i = 0; i < points; i++)
                {
                    point (random (mouseX-spread, mouseX + spread) , random (mouseY-spread, mouseY + spread));
                }
                
                //This for loop randomises spread between the dots
            }
        };
    }