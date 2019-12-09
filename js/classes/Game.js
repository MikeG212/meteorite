import Canvas from '/js/utility/Canvas.js';
import MovingObject from '/js/classes/MovingObject.js';

const { requestAnimationFrame } = window;

const movingObject = new MovingObject({ position: {x: 250, y: 250}, velocity: {x: 1, y: 1} });
const randomObject = MovingObject.createRandom();

export default class Game {
    constructor() {
        this.asteroids = [movingObject, randomObject];
    }

    move = () => {
        this.asteroids.forEach(asteroid => {
            asteroid.move();
        })
    }

    draw = () => {
        this.asteroids.forEach(asteroid => {
            asteroid.draw();
        })
    }

    tick = () => {
        Canvas.clear();
        this.move();
        this.draw();
        requestAnimationFrame(this.tick);
    }
}