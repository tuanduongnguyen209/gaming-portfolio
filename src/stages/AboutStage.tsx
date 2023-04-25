import PixelFrame from "../components/PixelFrame";
import Section from "../components/Section";
import Typewriter from "typewriter-effect";
import useSplashScreenContext from "../hooks/useSplashScreenContext";
import NavigationMenu from "../components/NavigationMenu";

const MENU_ITEMS = [
    {
        name: "/badges",
        title: "Cool! Show me your skills.",
    },
    {
        name: "/",
        title: "I don't believe it!",
    },
];

function AboutStage() {
    const splashScreenContext = useSplashScreenContext();
    function onReady() {
        setTimeout(() => splashScreenContext.setOpen(true), 200);
    }

    return (
        <Section backgroundImage="/images/background-01.jpg" onReady={onReady}>
            <img
                src="/images/pxArt.png"
                alt="pixel art"
                width={250}
                className="left-corner-image"
            />
            <PixelFrame>
                <div>
                    <div className="heading-2">Tuan Duong Nguyen</div>
                    <div className="heading-3">⭐⭐⭐ About ⭐⭐⭐</div>
                </div>

                <div className="mt-3 mt-lg-5 overflow-y-auto flex-1">
                    <Typewriter
                        options={{
                            cursor: "_",
                            wrapperClassName: "heading-3",
                            cursorClassName: "heading-3",
                            delay: 15,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(
                                    "With 4 years of experience in software development, I excel in web development using React, NodeJS, and Java. My passion for creating high-quality software is driven by continuous learning and a strong foundation in computer science principles. I possess excellent problem-solving skills and thrive in collaborative environments. My expertise and skills make me a dedicated software developer who is always eager to take on new challenges and contribute to project success."
                                )
                                .start();
                        }}
                    />
                </div>

                <div className="dialog-option">
                    <NavigationMenu className="p-1 p-lg-3" menuItems={MENU_ITEMS} />
                </div>
            </PixelFrame>
        </Section>
    );
}

export default AboutStage;
