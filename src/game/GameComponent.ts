import GameController from "./GameController";

const EXPLOSION_IMG = new Image();
EXPLOSION_IMG.src = "/images/explosion.gif";

abstract class GameComponent {
    x: number;
    y: number;
    width: number;
    height: number;
    imageUrl: string;
    ctx: CanvasRenderingContext2D;
    img: HTMLImageElement;
    gameController: GameController;
    destroyIn?: number;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        imageUrl: string,
        gameController: GameController
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageUrl = imageUrl;
        this.gameController = gameController;
        this.ctx = gameController.getCtx();
        this.img = new Image();
        this.img.src = imageUrl;
    }

    draw() {
        if (this.destroyIn) {
            this.ctx.drawImage(EXPLOSION_IMG, this.x, this.y, 100, 100);
        } else if (this.img.complete) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    crashWith(otherObj: GameComponent) {
        if (this.destroyIn || otherObj.destroyIn) return false; // If any object is destroying, no collision
        var myleft = this.x;
        var myright = this.x + this.width;
        var mytop = this.y;
        var mybottom = this.y + this.height;
        var otherleft = otherObj.x;
        var otherright = otherObj.x + otherObj.width;
        var othertop = otherObj.y;
        var otherbottom = otherObj.y + otherObj.height;
        var crash = true;
        if (
            mybottom < othertop ||
            mytop > otherbottom ||
            myright < otherleft ||
            myleft > otherright
        ) {
            crash = false;
        }
        return crash;
    }

    abstract newPos(): void;
}

export default GameComponent;
