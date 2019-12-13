import key from 'keymaster';

import MovingObject from './MovingObject.js';
import Canvas from '../utility/Canvas.js';

const canvasStage = document.getElementById('canvas-stage');
const INITIAL_DIRECTION = 0;

export default class Ship extends MovingObject {
    constructor( position = { x: canvasStage.width / 2, y: canvasStage.height / 2 }, velocity = { x: 0, y: 0 }) {
        super({ position, velocity });
        this.direction = INITIAL_DIRECTION;
        this.color = 'RED';
    }

    draw = () => {
        Canvas.drawCircle({ x: this.position.x, y: this.position.y, radius: 30, color: this.color, lineWidth: 2 });
        Canvas.drawCircle({ x: this.position.x, y: this.position.y - 35, radius: 5, color: this.color, lineWidth: 2 });
    }

    move = () => {
        if (key.isPressed('left')) { 
            this.direction -= 0.1
            this.direction %= 2 * Math.PI;
            console.log(this.direction);
        }
        if (key.isPressed('right')) {
            this.direction += 0.1
            this.direction %= 2 * Math.PI;
            console.log(this.direction);
        }
        if (key.isPressed('up')) {
            this.position.y -= .5;
        }
        // if (key.isPressed('down')) {
        //     this.position.x -= .5;
        // }

        this.position.x += this.velocity.x + this.getAcceleration().x;
        this.position.y += this.velocity.y + this.getAcceleration().y;
        this.wrap();
    }

    getAcceleration = () => {
        if (key.isPressed('up')) {
            return { x: 0, y: -1 }
        }

        return { x: 0, y: 0};
    }
}