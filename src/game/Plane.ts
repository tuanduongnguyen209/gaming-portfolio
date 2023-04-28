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
            speed: 5,
            imageUrl: "small_plane.png",
        },
        [PlaneType.MEDIUM]: {
            width: 80,
            height: 40,
            speed: 7,
            imageUrl: "medium_plane.png",
        },
        [PlaneType.LARGE]: {
            width: 100,
            height: 60,
            speed: 10,
            imageUrl: "large_plane.png",
        },
    };

    constructor(x: number, y: number, type: PlaneType, ctx: CanvasRenderingContext2D) {
        const { width, height, speed } = Plane.TYPE_SPECS[type];
        const imageUrl = Plane.TYPE_SPECS[type].imageUrl;
        super(x, y, width, height, imageUrl, ctx);
        this.speed = speed;
    }

    update(): void {
        this.x += this.speed;
    }

    newPos(): void {
        // Additional logic specific to Plane's new position
    }
}

export default Plane;
