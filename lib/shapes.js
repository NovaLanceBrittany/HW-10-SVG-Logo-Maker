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
    return `<polygon points="50 15, 100 100, 0 100" fill="${this.hexshape}" />`
  }
};

class Square {
  constructor(hexshape) {
    this.hexshape = hexshape
  }
  render() {
    return `<rect  fill="${this.hexshape}" />`
  }
};

class Hexigon {
  constructor(hexshape) {
    this.hexshape = hexshape
  }
  render() {
    return `<polygon points="150,15 258,77 258,202 150,265 42,202 42,77" fill="${this.hexshape}" />`
  }
};
