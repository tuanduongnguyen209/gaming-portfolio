import GameComponent from "./GameComponent";

export enum PlaneType {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

class Plane extends GameComponent {
    speed: number;
    static readonly TYPE_SPECS = {
        [PlaneType.SMALL]: {
            width: 50,
            height: 30,
            speed: 20,
            imageUrl: "/images/player.svg",
        },
        [PlaneType.MEDIUM]: {
            width: 80,
            height: 40,
            speed: 20,
            imageUrl: "/images/player.svg",
        },
        [PlaneType.LARGE]: {
            width: 100,
            height: 60,
            speed: 20,
            imageUrl: "/images/player.svg",
        },
    };
    private canvas: HTMLCanvasElement;

    constructor(
        x: number,
        y: number,
        type: PlaneType,
        ctx: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement
    ) {
        const { width, height, speed } = Plane.TYPE_SPECS[type];
        const imageUrl = Plane.TYPE_SPECS[type].imageUrl;
        super(x, y, width, height, imageUrl, ctx);
        this.speed = speed;
        this.canvas = canvas;
    }

    newPos(): void {
        this.x -= this.speed;
    }
}

export default Plane;
