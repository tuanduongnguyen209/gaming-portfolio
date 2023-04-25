import useSplashScreenContext from "../hooks/useSplashScreenContext";
import "./SplashScreen.scss";

function SplashScreen() {
    const { open } = useSplashScreenContext();
    return (
        <div className={`splash-screen ${open ? "open" : ""}`}>
            <div className="top" />
            <div className="bottom"/>
        </div>
    );
}

export default SplashScreen;
