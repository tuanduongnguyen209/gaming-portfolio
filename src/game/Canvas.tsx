import { useEffect, useRef } from "react";
import "./Canvas.scss";
import GameController from "./GameController";

interface CanvasProps {}

function Canvas(props: CanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        const img = new Image();
        img.src = "/images/player.svg";
        img.width = 60;
        img.height = 60;
        context!.fillStyle = "black";
        // context!.fillRect(100, 100, 100, 100);
        img.onload = () => {
            context?.drawImage(img, 0, 0, 100, 100);
        };
        // GameController.setCanvasContext(context);
        // GameController.startGame();

        return () => GameController.setCanvasContext(null);
    }, []);

    return <canvas className="game-canvas" ref={canvasRef} {...props} />;
}

export default Canvas;
