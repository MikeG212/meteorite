import Canvas from '../utility/Canvas.js';
import MovingObject from './MovingObject.js';
import Ship from './Ship.js';

const MAX_ASTEROIDS = 10;

const { requestAnimationFrame } = window;

export default class Game {
    constructor() {
        this.asteroids = [];
        this.ship = new Ship();
    }

    move = () => {
        this.asteroids.forEach(asteroid => {
            asteroid.move();
        })
        this.ship.move();
    }

    draw = () => {
        this.asteroids.forEach(asteroid => {
            asteroid.draw();
        })
        this.ship.draw();
    }

    removeOutOfBounds = () => {
        this.asteroids = this.asteroids.filter(asteroid => asteroid.inBounds());
    }

    repopulateAsteroids = () =>  {
        this.asteroids.push(MovingObject.createRandomOnEdge());
    }

    tick = () => {
        Canvas.clear();
        this.ship.draw();
        this.ship.move();
        this.move();
        this.draw();
        this.removeOutOfBounds();
        if (this.asteroids.length < MAX_ASTEROIDS) {
            this.repopulateAsteroids();
        }
        requestAnimationFrame(this.tick);
    }
}