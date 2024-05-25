
const inquirer = require("inquirer");
const fs = require("fs");


const generateSVG = require('./lib/shapes');


const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);




inquirer-maxlength-input-prompt



function SVGquestions() {
// These are the questions for the user prompted for the logo maker
  inquirer.prompt(
    [
      {
        type: "maxlength-input",
        message: "Welcome to the SVG Generator! Let's start by choosing  your short hand logo. Please enter up to 3 characters to use as your short hand logo.",
        name: "shorthand",
        maxlength: 3,
      },
      {
        type: "input", 
        message: "Please choose a text color by typing that color's name or by entering a hex code. Example: Magenta or #EA3788",
        name: "hextext"
      },
      {
        type: "input", 
        message: "What kind of shape would you like use for your logo? Choose from the selection below:",
        name: "shapeshape",
        choices: ["Circle", "Triangle", "Square"]
      },
      {
        type: "input", 
        message: "Please choose a shape color by typing that color's name or by entering a hex code. Example: Magenta or #EA3788",
        name: "hexshape"
      }
    ]
  )
    .then((response) => {

      fs.writeFile("./exampleSVG", generateSVG.generateSVG(response), function(err){
        if( err ) return console.log("writeFile is not working")
        console.log("SVG logo Generated Successfully!")
      })
    });
}


SVGquestions();