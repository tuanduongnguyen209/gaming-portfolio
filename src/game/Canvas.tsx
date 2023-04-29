import { RefObject } from "react";
import "./Canvas.scss";
interface CanvasProps {
    canvasRef: RefObject<HTMLCanvasElement>;
}

function Canvas({ canvasRef }: CanvasProps) {
    return <canvas className="game-canvas" ref={canvasRef} />;
}

export default Canvas;
