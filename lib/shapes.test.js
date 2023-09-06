const { Circle, Square, Triangle } = require("./shpaes");

describe("Circle Test", () => {
  test("test for a blue circle", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
  });
});

describe("Square Test", () => {
  test("test for a red sqaure", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(`<rect x="80" y="40" width="160" height="160" fill="red" />`);
  });
});

describe("Triangle Test", () => {
  test("test for a purple triangle", () => {
    const shape = new Triangle();
    shape.setColor("purple");
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="purple" />`);
  });
}); test("test for a purple triangle", () => {
        const shape = new Triangle();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="purple" />`

        );
    });