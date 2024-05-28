const { Circle, Triangle, Square, Hexagon } = require("./shapes")

describe("Test: Logo Creator", () => {


  //Circle Test
  describe("Test: Circle", () => {
    it("should return the circle tag of the circle class", () => {
      const circle = new Circle("Orange");
      console.log(circle.render())
    })
  })


  // Triangle Test
  describe("Test: Triangle", () => {
    it("should return the triangle tag of the triangle class", () => {
      const triangle = new Triangle("Blue");
      console.log(triangle.render())
    })
  })


  // Square Test
  describe("Test: Square", () => {
    it("should return the square tag of the square class", () => {
      const square = new Square("Red");
      console.log(square.render())
    })
  })

 
  // Hexagon Test
  describe("Test: Hexagon", () => {
    it("should return the hexagon tag of the hexagon class", () => {
      const hexagon = new Hexagon("Magenta");
      console.log(hexagon.render())
    })
  })
})