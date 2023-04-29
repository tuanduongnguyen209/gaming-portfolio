import Bomb from "./Bomb";
import GameComponent from "./GameComponent";
import GameController from "./GameController";

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
            speed: 3,
            imageUrl: "/images/bomber-small.svg",
        },
        [PlaneType.MEDIUM]: {
            width: 80,
            height: 40,
            speed: 2,
            imageUrl: "/images/bomber-medium.svg",
        },
        [PlaneType.LARGE]: {
            width: 200,
            height: 120,
            speed: 1,
            imageUrl: "/images/bomber-large.svg",
        },
    };

    constructor(x: number, y: number, type: PlaneType, gameController: GameController) {
        const { width, height, speed } = Plane.TYPE_SPECS[type];
        const imageUrl = Plane.TYPE_SPECS[type].imageUrl;
        super(x, y, width, height, imageUrl, gameController);
        this.speed = speed;
    }

    newPos(): void {
        if (this.destroyIn) return;
        this.x -= this.speed;
    }

    public dropBomb(): void {
        // Calculate the position of the bomb based on the position of the plane
        const x = this.x + this.width / 2 - Bomb.WIDTH / 2;
        const y = this.y + this.height;

        // Create a new bomb object and add it to the GameController's array
        const bomb = new Bomb(x, y, this.gameController);
        this.gameController.addBomb(bomb);
    }
}

export default Plane;
