import Canvas from '/js/utility/Canvas.js';
import MovingObject from '/js/classes/MovingObject.js';
import Ship from '/js/classes/Ship.js';

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
        this.move();
        this.draw();
        this.removeOutOfBounds();
        if (this.asteroids.length < MAX_ASTEROIDS) {
            this.repopulateAsteroids();
        }
        requestAnimationFrame(this.tick);
    }
}