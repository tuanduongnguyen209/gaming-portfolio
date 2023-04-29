import GameComponent from "./GameComponent";

class Player extends GameComponent {
    static readonly WIDTH = 100;
    static readonly HEIGHT = 200;
    static readonly IMAGE_URL = "/images/player.svg";
    private canvas: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(0, 0, Player.WIDTH, Player.HEIGHT, Player.IMAGE_URL, ctx);
        this.canvas = canvas;
    }

    newPos(): void {
        const screenW = this.canvas.width;
        const screenH = this.canvas.height;
        this.x = Math.round(screenW / 2) - Math.round(Player.WIDTH / 2);
        this.y = screenH - Player.HEIGHT - 100;
    }
}

export default Player;
