import MenuItem from "../components/MenuItem";
import Section from "../components/Section";
import Typewriter from "typewriter-effect";
import useSplashScreenContext from "../hooks/useSplashScreenContext";

function HomeStage() {
    const splashScreenContext = useSplashScreenContext();
    function onReady() {
        splashScreenContext.setOpen(true);
    }
    return (
        <Section backgroundImage="/images/background-01.jpg" onReady={onReady}>
            <div className="d-flex flex-column justify-content-center">
                <div className="heading-1">Tuan Duong Nguyen</div>
                <div className="heading-2">
                    <Typewriter
                        options={{
                            cursor: "_",
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2000)
                                .typeString("I'm a Full-stack developer")
                                .start();
                        }}
                    />
                </div>

                <div className="menu" onClick={() => splashScreenContext.setOpen((open) => !open)}>
                    <MenuItem selected>About me</MenuItem>
                    <MenuItem>Experience</MenuItem>
                    <MenuItem>Noteworthy Projects</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </div>
            </div>
        </Section>
    );
}

export default HomeStage;
