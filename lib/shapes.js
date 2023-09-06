// Defining shape class
class Shape {
    // Constructor for shape properties
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor; // Shape color
        this.text = text; // Text that is inside of shape
        this.textColor = textColor; // Color of the text in shape 
    }
    // Method for shape color
    setColor(color) {
        this.shapeColor = color;
    }
    // Method for text and text color
    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
}

// Defining circle class that extends shape 
class Circle extends Shape {
    render() {
         return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">
              ${this.text}
            </text>
          </svg>
        `;

    }
}

// Defining square class that extends shape
class Square extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="40" width="160" height="160" fill="${this.shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">
              ${this.text}
            </text>
          </svg>
        `;
    }
}

// Defining triangle class that extends shape
class Triangle extends Shape {
    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
          </text>
        </svg>
      `;
    }
}

// Exports all of the shape classes
module.exports = {Circle, Square, Triangle};