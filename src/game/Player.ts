import GameComponent from "./GameComponent";

class Player extends GameComponent {
    static readonly WIDTH = 10;
    static readonly HEIGHT = 5;
    static readonly IMAGE_URL = "/images/player.svg";

    constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
        super(x, y, Player.WIDTH, Player.HEIGHT, Player.IMAGE_URL, ctx);
    }

    newPos(): void {
        // Additional logic specific to Player's new position
    }
}

export default Player;
