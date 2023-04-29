import { useEffect, useRef } from "react";
import "./Canvas.scss";
import GameController from "./GameController";

interface CanvasProps {}

function Canvas(props: CanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gameController = new GameController(canvas!);
        gameController.startGame();

        return () => gameController.stopGame();
    }, []);

    return <canvas className="game-canvas" ref={canvasRef} {...props} />;
}

export default Canvas;
