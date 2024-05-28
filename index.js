// Node Packages
const inquirer = require("inquirer");
const fs = require("fs");

// Calling in other files
const Shapes = require('./lib/shapes');

// This is a Node Package that adds a conditionial requirement per developer digression. 
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


function SVGquestions() {
// These are the questions for the user prompted for the logo maker
  inquirer.prompt(
    [
      {
        type: "maxlength-input",
        message: "Welcome to the SVG Generator! Let's start by choosing  your short hand logo. Please enter up to 3 characters to use as your short hand logo.",
        name: "shorthand",
        maxLength: 3,
      },
      {
        type: "input", 
        message: "Please choose a text color by typing that color's name or by entering a hex code. Example: Magenta or #EA3788",
        name: "hextext"
      },
      {
        type: "list", 
        message: "What kind of shape would you like use for your logo? Choose from the selection below:",
        name: "shapeshape",
        choices: ["Circle", "Triangle", "Square", "Hexagon"]
      },
      {
        type: "input", 
        message: "Please choose a shape color by typing that color's name or by entering a hex code. Example: Magenta or #EA3788",
        name: "hexshape"
      }
    ]
  )
    .then((response) => {


      switch(response.shapeshape) {
        case 'Circle':
          response.shapeshape = new Shapes.Circle(response.hexshape);
          break;
        case 'Triangle':
          response.shapeshape = new Shapes.Triangle(response.hexshape);
          break;
        case 'Square':
          response.shapeshape = new Shapes.Square(response.hexshape);
         break;
        case 'Hexagon':
          response.shapeshape = new Shapes.Hexagon(response.hexshape);
          break;
      }

      // console.log("Testing for shapes", response.shapeshape)

      const result = 
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      ${response.shapeshape.render()}
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.hextext}">${response.shorthand}</text>
    
      </svg>`


      //This is the writeFile function that takes all of the information inputed by the user and generates an SVG File. 
      fs.writeFile("./assets/exampleSVG/example.svg", result, function(err){
        if( err ) return console.log("writeFile is not working")
        console.log("SVG logo Generated Successfully!")
      })
    });
}


SVGquestions();