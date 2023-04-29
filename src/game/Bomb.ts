import GameComponent from "./GameComponent";
import GameController from "./GameController";

class Bomb extends GameComponent {
    static readonly WIDTH = 10;
    static readonly HEIGHT = 5;
    static readonly SPEED = 10;
    static readonly IMAGE_URL = "/images/player.svg";
    private speed: number;

    constructor(x: number, y: number, gameController: GameController) {
        super(x, y, Bomb.WIDTH, Bomb.HEIGHT, Bomb.IMAGE_URL, gameController);
        this.speed = Bomb.SPEED;
    }

    public newPos(): void {
        if (this.destroyIn) return;
        this.y += this.speed;

        // check if the bomb is off the bottom of the screen
        if (this.y > this.ctx.canvas.height) {
            // this.destroy();
        }
    }
}

export default Bomb;
