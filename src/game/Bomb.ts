import GameComponent from "./GameComponent";
import GameController, { GAME_FPS } from "./GameController";

class Bomb extends GameComponent {
    static readonly WIDTH = 30;
    static readonly HEIGHT = 10;
    static readonly SPEED = 1;
    static readonly IMAGE_URL = "/images/bomb.png";
    private speed: number;

    constructor(x: number, y: number, gameController: GameController) {
        super(x, y, Bomb.WIDTH, Bomb.HEIGHT, Bomb.IMAGE_URL, gameController);
        this.speed = Bomb.SPEED;
    }

    public newPos(): void {
        if (this.destroyIn) return;
        this.y += this.speed;

        // check if the bomb is off the bottom of the screen
        if (this.y > this.ctx.canvas.height - 100) {
            this.destroyIn = this.gameController.getFrameNo() + GAME_FPS * 0.25; // destroy after 0.25s
        }
    }
}

export default Bomb;
