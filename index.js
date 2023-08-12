const fs = require('fs');
const { circle, rectangle, triangle } = require('./lib/shapes');

const filename = `circle.svg`;

fs.writeFile(filename, triangle, (err) =>
    err ? console.log(err) : console.log('Success!')
);
