import { getRandomEnumValue, getRandomNumber } from "../utils/common";
import Bomb from "./Bomb";
import Bullet from "./Bullet";
import GameComponent from "./GameComponent";
import Plane, { PlaneType } from "./Plane";
import Player from "./Player";

const GAME_FPS = 20;
const ENEMY_SPAWN_INTERVAL_SECONDS = 6;
const BULLETS_INTERVAL_SECONDS = 0.1;
const BOMB_DROPED_INTERVAL_SECONDS = 0.3;

class GameController {
    private planes: Plane[];
    private bullets: Bullet[];
    private bombs: Bomb[] = [];
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
        this.bombs = [];
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
        this.player = new Player(this);
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

    getCtx() {
        return this.ctx;
    }

    getCanvas() {
        return this.canvas;
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
        if (this.everyInterval(ENEMY_SPAWN_INTERVAL_SECONDS)) {
            this.spawnPlane();
        }
        if (this.isFiring && this.everyInterval(BULLETS_INTERVAL_SECONDS)) {
            this.addBullet();
        }
        this.update();
    }

    private spawnPlane(): void {
        const x = this.canvas.width;
        const y = getRandomNumber(0, Math.floor(this.canvas.height * 0.6));
        const type = getRandomEnumValue(PlaneType);
        const plane = new Plane(x, y, type, this);
        this.planes.push(plane);
    }

    private removePlane(plane: Plane): void {
        const index = this.planes.indexOf(plane);
        if (index > -1) {
            this.planes.splice(index, 1);
        }
    }

    public addBomb(bomb: Bomb): void {
        this.bombs.push(bomb);
    }

    private addBullet(): void {
        const x = this.player?.x || 0 + Math.floor(this.player?.width || 0 / 2);
        const y = this.player?.y || 0;
        const dx = this.cursorX - x;
        const dy = this.cursorY - y;
        const angle = Math.atan2(dy, dx);
        const bullet = new Bullet(x, y, angle, this);
        this.bullets.push(bullet);
    }

    private removeBullet(bullet: Bullet): void {
        const index = this.bullets.indexOf(bullet);
        if (index > -1) {
            this.bullets.splice(index, 1);
        }
    }

    private removeBomb(bomb: Bomb): void {
        const index = this.bombs.indexOf(bomb);
        if (index > -1) {
            this.bombs.splice(index, 1);
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

    private everyInterval(intervalInSeconds: number) {
        const totalFrameInEachInterval = Math.floor(GAME_FPS * intervalInSeconds);
        return this.frameNo % totalFrameInEachInterval === 0;
    }

    private update(): void {
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
        this.ctx.clearRect(0, 0, this.canvas?.width, this.canvas?.height);
        this.player?.newPos();
        this.player?.draw();
        this.planes.forEach((plane) => {
            plane.newPos();
            if (this.isOutsideOfScreen(plane) || plane.destroyIn === this.frameNo) {
                this.removePlane(plane);
            } else {
                plane.draw();
                if (this.everyInterval(BOMB_DROPED_INTERVAL_SECONDS)) {
                    plane.dropBomb();
                }
            }
        });

        this.bullets.forEach((bullet) => {
            bullet.newPos();
            if (this.isOutsideOfScreen(bullet)) {
                this.removeBullet(bullet);
            } else {
                const terminatedPlane = this.planes.find((plane) => plane.crashWith(bullet));
                if (terminatedPlane) {
                    this.removeBullet(bullet);
                    terminatedPlane.destroyIn = this.frameNo + GAME_FPS * 1; // destroy after 1s
                    return;
                }
                const terminatedBomb = this.bombs.find((bomb) => bomb.crashWith(bullet));
                if (terminatedBomb) {
                    this.removeBullet(bullet);
                    terminatedBomb.destroyIn = this.frameNo + GAME_FPS * 1; // destroy after 1s
                    return;
                }
                bullet.draw();
            }
        });

        this.bombs.forEach((bomb) => {
            bomb.newPos();
            if (this.isOutsideOfScreen(bomb) || bomb.destroyIn === this.frameNo) {
                this.removeBomb(bomb);
            } else {
                bomb.draw();
            }
        });
    }
}

export default GameController;
