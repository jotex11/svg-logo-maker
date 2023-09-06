class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    setColor(color) {
        this.shapeColor = color;
    }
    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
}

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

module.exports = {Circle, Square, Triangle};