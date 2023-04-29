import { getRandomEnumValue, getRandomNumber } from "../utils/common";
import Bullet from "./Bullet";
import GameComponent from "./GameComponent";
import Plane, { PlaneType } from "./Plane";
import Player from "./Player";

const GAME_FPS = 20;
const ENEMY_SPAWN_INTERVAL_SECONDS = 6;
const NUMBER_OF_FRAME_TO_SPAWN_A_ENEMY = GAME_FPS * ENEMY_SPAWN_INTERVAL_SECONDS;
const BULLETS_PER_SECOND = 3;

class GameController {
    private planes: Plane[];
    private bullets: Bullet[];
    private player?: Player;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private intervalId?: number | null;
    private isStarted: boolean;
    private frameNo: number;
    private cursorX: number;
    private cursorY: number;
    private isFiring: boolean;

    constructor(canvas: HTMLCanvasElement) {
        this.planes = [];
        this.bullets = [];
        this.isStarted = false;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.frameNo = 0;
        this.isFiring = false;
        this.cursorX = 0;
        this.cursorY = 0;
    }

    startGame() {
        if (!this.ctx) {
            throw new Error("No canvas context attached!");
        }
        this.player = new Player(this.ctx, this.canvas);
        this.isStarted = true;
        this.frameNo = 0;
        this.intervalId = setInterval(() => this.gameLoop(), 1000 / GAME_FPS);
        this.canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
        this.canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
        this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
    }

    stopGame() {
        if (this.intervalId) clearInterval(this.intervalId);
        this.intervalId = null;
        this.canvas.removeEventListener("mousedown", this.handleMouseDown.bind(this));
        this.canvas.removeEventListener("mouseup", this.handleMouseUp.bind(this));
        this.canvas.removeEventListener("mousemove", this.handleMouseMove.bind(this));
    }

    private handleMouseMove(e: MouseEvent) {
        this.cursorX = e.clientX;
        this.cursorY = e.clientY;
    }

    private handleMouseDown() {
        this.isFiring = true;
        this.addBullet();
    }

    private handleMouseUp() {
        this.isFiring = false;
    }

    private gameLoop() {
        this.frameNo += 1;
        if (this.frameNo % NUMBER_OF_FRAME_TO_SPAWN_A_ENEMY === 0) {
            this.spawnPlane();
        }
        if (this.isFiring && this.frameNo % BULLETS_PER_SECOND) {
            this.addBullet();
        }
        this.update();
    }

    private spawnPlane(): void {
        const x = this.canvas.width;
        const y = getRandomNumber(0, Math.floor(this.canvas.height * 0.6));
        const type = getRandomEnumValue(PlaneType);
        const plane = new Plane(x, y, type, this.ctx, this.canvas);
        this.planes.push(plane);
    }

    private removePlane(plane: Plane): void {
        const index = this.planes.indexOf(plane);
        if (index > -1) {
            this.planes.splice(index, 1);
        }
    }

    private addBullet(): void {
        const x = this.player?.x || 0 + Math.floor(this.player?.width || 0 / 2);
        const y = this.player?.y || 0;
        const dx = this.cursorX - x;
        const dy = this.cursorY - y;
        const angle = Math.atan2(dy, dx);
        const bullet = new Bullet(x, y, angle, this.ctx);
        this.bullets.push(bullet);
    }

    private removeBullet(bullet: Bullet): void {
        const index = this.bullets.indexOf(bullet);
        if (index > -1) {
            this.bullets.splice(index, 1);
        }
    }

    private isOutsideOfScreen(object: GameComponent): boolean {
        const screenLeft = 0;
        const screenRight = this.canvas.width;
        const screenTop = 0;
        const screenBottom = this.canvas.height;
        const { x, y, width, height } = object;
        if (x + width < screenLeft || x > screenRight) {
            return true;
        }
        if (y + height < screenTop || y > screenBottom) {
            return true;
        }
        return false;
    }

    private update(): void {
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
        this.ctx.clearRect(0, 0, this.canvas?.width, this.canvas?.height);
        this.player?.newPos();
        this.player?.draw();
        this.planes.forEach((plane) => {
            plane.newPos();
            if (this.isOutsideOfScreen(plane)) {
                this.removePlane(plane);
            } else {
                plane.draw();
            }
        });

        this.bullets.forEach((bullet) => {
            bullet.newPos();
            if (this.isOutsideOfScreen(bullet)) {
                this.removeBullet(bullet);
            } else {
                bullet.draw();
            }
        });
    }
}

export default GameController;
