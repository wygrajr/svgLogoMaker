const { Circle, Rectangle, Triangle } = require('./shapes');

test('Verify renderTri work', () => {
    const shape = new Triangle("blue", "green", "svg");
    expect(shape.render()).toEqual(
        `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">svg</text>
            </svg>
        `
    );
  });

test('Verify renderRect work', () => {
    const shape = new Rectangle("blue", "green", "svg");
    expect(shape.render()).toEqual(
        `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="75" y="50" width="160" height="160" fill="blue"/>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">svg</text>
            </svg>
        `
    );
  });

test('Verify renderCirc work', () => {
    const shape = new Circle("blue", "green", "svg");
    expect(shape.render()).toEqual(
        `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="blue"/>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">svg</text>
            </svg>
        `
    );
  });