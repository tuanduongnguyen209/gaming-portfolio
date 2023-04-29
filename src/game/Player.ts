import GameComponent from "./GameComponent";
import GameController from "./GameController";

class Player extends GameComponent {
    static readonly WIDTH = 50;
    static readonly HEIGHT = 40;
    static readonly IMAGE_URL = "/images/player.png";
    private canvas: HTMLCanvasElement;

    constructor(gameController: GameController) {
        super(0, 0, Player.WIDTH, Player.HEIGHT, Player.IMAGE_URL, gameController);
        this.canvas = gameController.getCanvas();
    }

    newPos(): void {
        const screenW = this.canvas.width;
        const screenH = this.canvas.height;
        this.x = Math.round(screenW / 2) - Math.round(Player.WIDTH / 2);
        this.y = screenH - Player.HEIGHT - 20;
    }
}

export default Player;
