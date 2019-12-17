import MovingObject from './MovingObject.js';
import Canvas from '../utility/Canvas.js';

export default class Bullet extends MovingObject {
    constructor(position, velocity) {
        super({ position, velocity });
        this.color = 'RED';
    }

    draw = () => {
        Canvas.drawCircle({ x: this.position.x, y: this.position.y, radius: 4, color: this.color, lineWidth: 2 });
    }
}