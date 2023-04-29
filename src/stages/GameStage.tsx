import { useEffect, useRef, useState } from "react";
import Section from "../components/Section";
import Canvas from "../game/Canvas";
import useSplashScreenContext from "../hooks/useSplashScreenContext";
import GameController from "../game/GameController";
import PixelFrame from "../components/PixelFrame";
import Typewriter from "typewriter-effect";
import Button from "../components/Button";
import useDebounceNavigate from "../hooks/useDebounceNavigate";

let gameController: GameController;

export type GameScore = {
    planeTerminated: number;
    bombTerminated: number;
};

function GameStage() {
    const splashScreenContext = useSplashScreenContext();
    const navigate = useDebounceNavigate();
    function onReady() {
        setTimeout(() => splashScreenContext.setOpen(true), 200);
    }

    const [started, setStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState<GameScore>({
        planeTerminated: 0,
        bombTerminated: 0,
    });

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        gameController = new GameController(canvas!);

        return () => {
            gameController.stopGame();
            setStarted(false);
        };
    }, []);

    function onStart() {
        setStarted(true);
        setGameOver(false);
        gameController.startGame();
        gameController.registerOnScoreChange(onScoreChange);
        gameController.registerOnGameOver(onGameOver);
    }

    function onScoreChange(newScore: GameScore) {
        setScore(newScore);
    }

    function onGameOver() {
        gameController.stopGame();
        setStarted(false);
        setGameOver(true);
    }
    function handleOkay() {
        if (gameOver) {
            navigate("/");
        } else {
            onStart();
        }
    }
    return (
        <Section backgroundImage="/images/city.png" onReady={onReady}>
            <Canvas canvasRef={canvasRef} />

            {started ? (
                <div className="game-score">
                    <div className="heading-3">B52 Terminated: {score.planeTerminated}</div>
                    <div className="heading-3">Bomb Terminated: {score.bombTerminated}</div>
                </div>
            ) : null}

            <div className={`game-overlay slide ${started ? "hide" : ""}`}>
                <PixelFrame>
                    <div>
                        <div className="heading-2">{gameOver ? "Game Over" : "Hanoi - 1972"}</div>
                        <div className="heading-3">
                            ⭐⭐⭐ {gameOver ? "To Quoc Ghi Cong" : "Your Mission"} ⭐⭐⭐
                        </div>
                    </div>

                    <div className="mt-3 mt-lg-5 overflow-y-auto flex-1">
                        {gameOver ? (
                            <Typewriter
                                key={"gameover"}
                                options={{
                                    cursor: "_",
                                    wrapperClassName: "heading-3 white-space-pre-line",
                                    cursorClassName: "heading-3",
                                    delay: 15,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            `B52 destroyed: ${score.planeTerminated}\nYou are honor of People's Army of Vietnam`
                                        )
                                        .start();
                                }}
                            />
                        ) : (
                            <Typewriter
                                key={"mission"}
                                options={{
                                    cursor: "_",
                                    wrapperClassName: "heading-3 white-space-pre-line",
                                    cursorClassName: "heading-3",
                                    delay: 15,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            "It is the year 1972, and you are in the Vietnamese air defense. Your mission is to protect the city of Hanoi, Vietnam from enemy bombers that are attempting to destroy it. You are the last line of defense, and failure is not an option. \n\nObjective: Protect Hanoi from enemy bombers"
                                        )
                                        .start();
                                }}
                            />
                        )}
                    </div>
                    <div className="d-flex justify-content-center p-3">
                        <Button onClick={() => handleOkay()} variant="warning">
                            Okay
                        </Button>
                    </div>
                </PixelFrame>
            </div>
            <audio autoPlay key={gameOver ? "gameover" : "background"}>
                {gameOver ? (
                    <source src="/gameover.mp3" type="audio/ogg"></source>
                ) : (
                    <source src="/background.mp3" type="audio/ogg"></source>
                )}
            </audio>
        </Section>
    );
}

export default GameStage;
