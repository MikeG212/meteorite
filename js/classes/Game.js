import Canvas from '/js/utility/Canvas.js';
import MovingObject from '/js/classes/MovingObject.js';

const MAX_ASTEROIDS = 10;

const { requestAnimationFrame } = window;

export default class Game {
    constructor() {
        this.asteroids = [];
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

    removeOutOfBounds = () => {
        this.asteroids = this.asteroids.filter(asteroid => asteroid.inBounds());
    }

    repopulateAsteroids = () =>  {
        this.asteroids.push(MovingObject.createRandom());
    }

    tick = () => {
        Canvas.clear();
        this.move();
        this.draw();
        this.removeOutOfBounds();
        if (this.asteroids.length < MAX_ASTEROIDS) {
            this.repopulateAsteroids();
        }
        requestAnimationFrame(this.tick);
    }
}