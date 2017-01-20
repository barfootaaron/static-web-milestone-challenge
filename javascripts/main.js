/* Initialize and Manually Populate an Array */
var projects = [
	{
	name: "project 1"
	description: "HTML/CSS"
	url: "#"
	},
	{
	name: "project 2"
	description: "HTML/CSS"
	url: "#"
	},
	{
	name: "project 3"
	description: "HTML/CSS"
	url: "#"
	},
	{
	name: "project 4"
	description: "HTML/CSS"
	url: "#"
	},
	{
	name: "Music History Project"
	description: "HTML/CSS/JavaScript"
	url: "#"
	},
	{
	name: "Rubber Baby Ducky Bumpers Brand Site"
	description: "HTML/CSS/JavaScript"
	url: "#"
	}
];

/* Initialize a loop, which continues for the length of the array */
for (var i=0; i < projects.length; i++) {

	/*Create Separate DOM Elements for the Data */
	var card = document.getElementById("productCard" + i);
	
	/* Create a DOM Element for the Name */
 	var projectName = "<h3>" + projects[i].name + "</h3";
 	
 	/* Populate the Element with Data */
 	card.innerHTML += projectName;
 	
 	/* Wash, Rinse, Repeat. . .*/
  	var projectImage = '<img src="' + projects[i].URL + '">';
 	card.innerHTML += duckImage;
 	var projectDescription = "<p>" + projects[i].description + "</p>";
 	card.innerHTML += duckDescription;
}

