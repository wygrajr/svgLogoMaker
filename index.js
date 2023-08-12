const fs = require('fs');
const { circle } = require('./lib/shapes');

const filename = `circle.svg`;

fs.writeFile(filename, circle, (err) =>
    err ? console.log(err) : console.log('Success!')
);
