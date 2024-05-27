class Circle {
  constructor(hexshape) {
    this.hexshape = hexshape
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.hexshape}" />`
  }
};

class Triangle {
  constructor(hexshape) {
    this.hexshape = hexshape
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.hexshape}" />`
  }
};

class Square {
  constructor(hexshape) {
    this.hexshape = hexshape
  }
  render() {
    return `<rect rect width="200" height="200" x="10" y="10" fill="${this.hexshape}" />`
  }
};

class Hexagon {
  constructor(hexshape) {
    this.hexshape = hexshape
  }
  render() {
    return `<polygon points="150,15 258,77 258,202 150,265 42,202 42,77" fill="${this.hexshape}" />`
  }
};


module.exports = {
  Circle,
  Triangle,
  Square,
  Hexagon
}