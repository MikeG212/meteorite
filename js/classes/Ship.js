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
        Canvas.drawCircle({ x: this.position.x + Math.cos(this.direction) * 30, y: this.position.y + Math.sin(this.direction) * 30, radius: 5, color: this.color, lineWidth: 2 });
    }

    move = () => {
        if (key.isPressed('left')) { 
            this.direction -= Math.PI /48
        }
        if (key.isPressed('right')) {
            this.direction += Math.PI /48
        }
        this.direction %= 2 * Math.PI;

        if (key.isPressed('up')) {
            this.position.y -= .5;
        }
        // if (key.isPressed('down')) {
        //     this.position.x -= .5;
        // }

        let acc = this.getAcceleration();

        // this.velocity.x += this.getAcceleration().x;
        // this.velocity.y += this.getAcceleration().y;

        this.position.x += this.velocity.x + acc.x;
        this.position.y += this.velocity.y + acc.y;
        this.wrap();
    }


    //return an accleration that is in the direction of my ship
    //x is cos of angle of ship
    //y is sin of angle of ship
    getAcceleration = () => {
        if (key.isPressed('up')) {
            return { x: Math.cos(this.direction), y: Math.sin(this.direction) }
        }

        return { x: 0, y: 0};
    }
}