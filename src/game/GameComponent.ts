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

    update() {
        this.ctx.drawImage(this.img, this.x, this.y);
    }

    abstract newPos(): void;
}

export default GameComponent;
