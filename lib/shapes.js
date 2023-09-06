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
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> `;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="80" y="40" width="160" height="160" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

module.exports = {Circle, Square, Triangle};