abstract class GameComponent {
    x: number;
    y: number;
    width: number;
    height: number;
    imageUrl: string;
    ctx: CanvasRenderingContext2D;
    img: HTMLImageElement;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        imageUrl: string,
        ctx: CanvasRenderingContext2D
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageUrl = imageUrl;
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = imageUrl;
    }

    draw() {
        if (this.img.complete) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    crashWith(otherObj: GameComponent) {
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
