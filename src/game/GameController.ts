import Bullet from "./Bullet";
import Plane, { PlaneType } from "./Plane";
import Player from "./Player";

const GAME_FPS = 0.25;

class GameController {
    private planes: Plane[];
    private bullets: Bullet[];
    private player?: Player;
    private ctx?: CanvasRenderingContext2D | null;
    private isStarted: boolean;

    constructor() {
        this.planes = [];
        this.bullets = [];
        this.isStarted = false;
    }

    setCanvasContext(ctx?: CanvasRenderingContext2D | null) {
        this.ctx = ctx;
    }

    startGame() {
        if (!this.ctx) {
            throw new Error("No canvas context attached!");
        }
        this.player = new Player(0, 0, this.ctx);
        this.isStarted = true;
        setInterval(() => this.gameLoop(), 1000 / GAME_FPS);
    }

    private gameLoop() {
        this.update();
    }

    private addPlane(x: number, y: number, type: PlaneType): void {
        if (!this.ctx) {
            throw new Error("No canvas context attached!");
        }
        const plane = new Plane(x, y, type, this.ctx);
        this.planes.push(plane);
    }

    private removePlane(plane: Plane): void {
        if (!this.ctx) {
            throw new Error("No canvas context attached!");
        }
        const index = this.planes.indexOf(plane);
        if (index > -1) {
            this.planes.splice(index, 1);
        }
    }

    private addBullet(x: number, y: number, angle: number): void {
        if (!this.ctx) {
            throw new Error("No canvas context attached!");
        }
        const bullet = new Bullet(x, y, angle, this.ctx);
        this.bullets.push(bullet);
    }

    private removeBullet(bullet: Bullet): void {
        if (!this.ctx) {
            throw new Error("No canvas context attached!");
        }
        const index = this.bullets.indexOf(bullet);
        if (index > -1) {
            this.bullets.splice(index, 1);
        }
    }

    private update(): void {
        console.log("UPDATED", this.player);
        if (!this.ctx) {
            throw new Error("No canvas context attached!");
        }
        this.player?.update();
        this.planes.forEach((plane) => {
            plane.update();
        });

        this.bullets.forEach((bullet) => {
            bullet.update();
        });
    }
}

export default new GameController();
