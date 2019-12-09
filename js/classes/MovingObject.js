import Canvas from "../utility/Canvas.js";

export default class MovingObject {
    constructor() {
        this.position = {
            x: 100,
            y: 250,
        }
        this.velocity = {
            x: 1,
            y: 1
        }
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw() {
        Canvas.drawCircle({ x: this.position.x, y: this.position.y, radius: 10, color: 'white', lineWidth: 2 })
    }
}