
class Shape {
    constructor(shapeColor, textColor, text) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.text = text;
    }

    render() { 
        // stub 
    }
}

class Circle extends Shape {
    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />   
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.Color}">${this.text}</text>

            </svg>
        `
    }
}

class Rectangle extends Shape {
    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="75" y="50" width="160" height="160" fill="${this.shapeColor}"/>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.Color}">${this.text}</text>

            </svg>
        `
    }
}

class Triangle extends Shape {
    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 10 50, 170 250, 170" fill="${this.shapeColor}"/>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.Color}">${this.text}</text>

            </svg>
        `
    }
}

const circle = new Circle('green', 'blue', 'hello').render()
const rectangle = new Rectangle('green', 'blue', 'hello').render()
const triangle = new Triangle('green','blue','hello').render()


module.exports = {
    circle,
    rectangle,
    triangle
}
