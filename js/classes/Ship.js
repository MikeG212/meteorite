import key from 'keymaster';

import MovingObject from './MovingObject.js';
import Canvas from '../utility/Canvas.js';
import Vec2 from './Vec2.js';


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
            this.velocity = this.velocity.add(this.getAcceleration());
            this.position = this.position.add(this.velocity);
        }

        else {
            this.velocity = new Vec2({ x: 0, y: 0});
        }

        this.wrap();
    }

    shoot = () => {
        return new MovingObject({ position: {x: this.position.x + Math.cos(this.direction) * 30,
            y: this.position.y + Math.sin(this.direction) * 30},
            velocity: {
                x: Math.cos(this.direction) * 10,
                y: Math.sin(this.direction) * 10,
            }
        })
        
    }

    getAcceleration = () => {
        if (key.isPressed('up')) {
            return new Vec2({ x: Math.cos(this.direction) * .1, y: Math.sin(this.direction) * .1});
        } else {
            return new Vec2({ x: 0, y: 0 })
        }
    }
}