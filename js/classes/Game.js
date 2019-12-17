import Canvas from '../utility/Canvas.js';
import MovingObject from './MovingObject.js';
import Ship from './Ship.js';

const MIN_ASTEROIDS = 10;

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
        this.asteroids = this.asteroids.filter(asteroid => !asteroid.outOfBounds());
        console.log(this.asteroids);
    }

    repopulateAsteroids = () =>  {
        while (this.asteroids.length < MIN_ASTEROIDS) {
            var newAsteroid = MovingObject.createRandomOnEdge();
            this.asteroids.push(newAsteroid);
        }
    }

    tick = () => {
        Canvas.clear();
        this.ship.draw();
        this.ship.move();
        this.move();
        this.draw();
        this.removeOutOfBounds();
        this.repopulateAsteroids();
        requestAnimationFrame(this.tick);
    }
}