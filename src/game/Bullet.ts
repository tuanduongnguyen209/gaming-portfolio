import GameComponent from "./GameComponent";

class Bullet extends GameComponent {
    speed: number;
    angle: number; // the direction represented as an angle in radians
    static readonly WIDTH = 10;
    static readonly HEIGHT = 5;
    static readonly SPEED = 10;
    static readonly IMAGE_URL = "bullet.png";

    constructor(x: number, y: number, angle: number, ctx: CanvasRenderingContext2D) {
        super(x, y, Bullet.WIDTH, Bullet.HEIGHT, Bullet.IMAGE_URL, ctx);
        this.speed = Bullet.SPEED;
        this.angle = angle;
    }

    newPos(): void {
        // Additional logic specific to Bullet's new position
    }
}

export default Bullet;
