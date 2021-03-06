import Canvas from '../utility/Canvas.js';
import Vec2 from './Vec2.js';

const canvasStage = document.getElementById('canvas-stage');

const getNonZeroRandomNumber = (num) => {
    let random = Math.random() * num - (num / 2);
    if (random === 0) return this.getNonZeroRandomNumber(num);
    return random; 
}

export default class MovingObject {
    constructor({ position, velocity }) {
        this.position = new Vec2({ x: position.x, y: position.y });
        this.velocity = new Vec2({ x: velocity.x, y: velocity.y });
    }

    static createRandomOnEdge = () => {
        let position = {};
        let velocity = {};
        position.x = Math.random() * 500;
        position.y = Math.random() * 500;
        velocity.x = getNonZeroRandomNumber(6);
        velocity.y = getNonZeroRandomNumber(6);

        let edgeSelector = Math.floor(Math.random() * 4);
        switch(edgeSelector) {
            case 0: //left edge
                position.x = 0;
                velocity.x = Math.abs(velocity.x);
                break;
            case 1: //right edge
                position.x = canvasStage.width;
                velocity.x = -Math.abs(velocity.x);
                break;
            case 2: //top edge
                position.y = 0;
                velocity.y = Math.abs(velocity.y);
                break;
            case 3: //bottom edge
                position.y = canvasStage.height;
                velocity.y = -Math.abs(velocity.y);
                break;
            default:
                break;
        }

        return new MovingObject({ position, velocity });
    }

    outOfBounds = () => {
        return this.outOfBoundsDirection();
    }

    wrap = () => {
        switch(this.outOfBoundsDirection()) {
            case '+x':
                this.position.x = 0;
                break;
            case '-x':
                this.position.x = canvasStage.width;
                break;
            case '+y':
                this.position.y = 0;
                break;
            case '-y':
                this.position.y = canvasStage.height;
                break;
            default:
                break;
        }
    }

    outOfBoundsDirection = () => {
        if (this.position.x > canvasStage.width) {
            return '+x';
        }
        if (this.position.x < 0) {
            return '-x';
        }
        if (this.position.y > canvasStage.height) {
            return '+y';
        }
        if (this.position.y < 0) {
            return '-y';
        }
        return false;
    }
 
    move = () => {
        this.position = this.position.add(this.velocity)
    }

    draw = () => {
        Canvas.drawCircle({ x: this.position.x, y: this.position.y, radius: 50, color: 'white', lineWidth: 2 });
    }
}