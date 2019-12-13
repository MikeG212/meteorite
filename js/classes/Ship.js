import MovingObject from './MovingObject.js';
import Canvas from '../utility/Canvas.js';

const canvasStage = document.getElementById('canvas-stage');

export default class Ship extends MovingObject {
    constructor(direction = 0, position = { x: canvasStage.width / 2, y: canvasStage.height / 2 }, velocity = { x: 0, y: 0 }) {
        super({ position, velocity });
        this.direction = direction;
        this.color = 'RED';
    }

    draw = () => {
        Canvas.drawCircle({ x: this.position.x, y: this.position.y, radius: 30, color: this.color, lineWidth: 2 });
        Canvas.drawCircle({ x: this.position.x - 35, y: this.position.y, radius: 5, color: this.color, lineWidth: 2 });
    }
}