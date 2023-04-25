import Section from "../components/Section";
import Typewriter from "typewriter-effect";
import useSplashScreenContext from "../hooks/useSplashScreenContext";
import NavigationMenu from "../components/NavigationMenu";

const MENU_ITEMS = [
    {
        name: "/about",
        title: "About me",
    },
    {
        name: "/badges",
        title: "Badges",
    },
    {
        name: "/projects",
        title: "Noteworthy Projects",
    },
    {
        name: "/contact",
        title: "Contact",
    },
];

function HomeStage() {
    const splashScreenContext = useSplashScreenContext();
    function onReady() {
        setTimeout(() => splashScreenContext.setOpen(true), 200);
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

                <NavigationMenu menuItems={MENU_ITEMS} />
            </div>
        </Section>
    );
}

export default HomeStage;
