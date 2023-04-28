import Section from "../components/Section";
import Canvas from "../game/Canvas";
import useSplashScreenContext from "../hooks/useSplashScreenContext";

function GameStage() {
    const splashScreenContext = useSplashScreenContext();
    function onReady() {
        setTimeout(() => splashScreenContext.setOpen(true), 200);
    }
    return (
        <Section backgroundImage="/images/background-01.jpg" onReady={onReady}>
            <Canvas />
        </Section>
    );
}

export default GameStage;
