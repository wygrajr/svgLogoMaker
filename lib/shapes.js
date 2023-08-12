
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


const circle = new Circle('green', 'blue', 'hello').render()

module.exports = {
    circle
}
