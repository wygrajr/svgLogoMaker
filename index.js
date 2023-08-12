const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Rectangle, Triangle } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Pick up to 3 characters for your logo',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Please enter a text color (OR a hexadecimal number)',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Pick a shape',
      name: 'shape',
      choices: ['circle', 'rectangle', 'triangle'],
    },
    {
      type: 'input',
      message: 'Please enter a shape color (OR a hexadecimal number)',
      name: 'shapeColor',
    },
  ])
  .then((data) => {
    const filename = `logo.svg`;
    let logo;

    switch (data.shape) {
        case "circle":
            logo = new Circle(data.shapeColor, data.textColor, data.text);
        case "rectangle":
            logo = new Rectangle(data.shapeColor, data.textColor, data.text);
        case "triangle":
            logo = new Triangle(data.shapeColor, data.textColor, data.text);
    }

    fs.writeFile(filename, logo.render(), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
    );
  });