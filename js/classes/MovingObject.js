import Canvas from "../utility/Canvas.js";

export default class MovingObject {
    constructor({ position, velocity }) {
        this.position = {
            x: position.x,
            y: position.y,
        }
        this.velocity = {
            x: velocity.x,
            y: velocity.y,
        }
    }

    static createRandom() {
        let randomPosition = {};
        let randomVelocity = {};
        randomPosition.x = Math.floor(Math.random() * 500);
        randomPosition.y = Math.floor(Math.random() * 500);
        randomVelocity.x = Math.floor(Math.random() * 6) - 3;
        randomVelocity.y = Math.floor(Math.random() * 6) - 3;
        const randomObject = new MovingObject({ position: randomPosition, velocity: randomVelocity });
        return randomObject;
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw() {
        Canvas.drawCircle({ x: this.position.x, y: this.position.y, radius: 10, color: 'white', lineWidth: 2 })
    }
}