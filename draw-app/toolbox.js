//container object for storing the tools. Functions to add new tools and select a tool
function Toolbox() {

	var self = this;

	this.tools = [];
	this.selectedTool = null;

	var toolbarItemClick = function() {
		//Gets rid of any existing borders
		var items = selectAll(".sideBarItem");
		for (var i = 0; i < items.length; i++) {
			items[i].style('border', '0');
		}

		var toolName = this.id().split("sideBarItem")[0];
		self.selectTool(toolName);

		//call loadPixels to make sure most recent changes are saved to pixel array
		loadPixels();
	};

	//add a new tool icon to the html page
	var addToolIcon = function(icon, name) {
		var sideBarItem = createDiv("<img src='" + icon + "'></div>");
		sideBarItem.class("sideBarItem");
		sideBarItem.id(name + "sideBarItem");
		sideBarItem.parent("sidebar");
		sideBarItem.mouseClicked(toolbarItemClick);


	};

	//add a tool to the tools array
	this.addTool = function(tool) {
		//check that the object tool has an icon and a name
		if (!tool.hasOwnProperty("icon") || !tool.hasOwnProperty("name")) {
			alert("make sure your tool has both a name and an icon");
		}
		this.tools.push(tool);
		addToolIcon(tool.icon, tool.name);
		//if no tool is selected (ie. none have been added so far)
		//make this tool the selected one.
		if (this.selectedTool == null) {
			this.selectTool(tool.name);
		}
	};

	this.selectTool = function (toolName) {
        //This sifts through a list of all the tools until it finds one that matches
        

        if (toolName == 'stampDrawTool') {
            selectAll('.shapeSwatches').forEach((shape) => {
                shape.style('visibility', 'visible');
            });
        } else {
            selectAll('.shapeSwatches').forEach((shape) => {
                shape.style('visibility', 'hidden');
            });
        }

        if (toolName == 'eraserDrawTool') {
            erase();
            strokeWeight(10);
        } else {
            noErase();
            strokeWeight(1);
        }

        for (var i = 0; i < this.tools.length; i++) {
            if (this.tools[i].name == toolName) {
                //This will run the unselect tool if the code has one
                if (
                    this.selectedTool != null &&
                    this.selectedTool.hasOwnProperty('unselectTool')
                ) {
                    this.selectedTool.unselectTool();
                }
                //This section allows for the tool to be selected and to highlighted on the toolbar.
                this.selectedTool = this.tools[i];
                select('#' + toolName + 'sideBarItem').style(
                    'border',
                    '2px solid blue'
                );

                //This will populate the options area if there is an options area.
                if (this.selectedTool.hasOwnProperty('populateOptions')) {
                    this.selectedTool.populateOptions();
                }
            }
        }
    };
}
