import Canvas from '../utility/Canvas.js';

const getNonZeroRandomNumber = (num) => {
    let random = Math.random() * num - (num / 2);
    if (random === 0) return this.getNonZeroRandomNumber(num);
    return random; 
}

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

    static createRandom = () => {
        let randomPosition = {};
        let randomVelocity = {};
        randomPosition.x = Math.random() * 500;
        randomPosition.y = Math.random() * 500;
        randomVelocity.x = getNonZeroRandomNumber(4);
        randomVelocity.y = getNonZeroRandomNumber(4);
        const randomObject = new MovingObject({ position: randomPosition, velocity: randomVelocity });
        return randomObject;
    }

    inBounds = () => {
        return this.position.x - 10 < 500 &&
            this.position.x + 10 > 0 &&
            this.position.y - 10 < 500 &&
            this.position.y + 10 > 0;
    }

    move = () => {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw = () => {
        Canvas.drawCircle({ x: this.position.x, y: this.position.y, radius: 10, color: 'white', lineWidth: 2 });
    }
}