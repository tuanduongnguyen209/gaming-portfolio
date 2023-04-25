import "./App.scss";
import SplashScreen from "./components/SplashScreen";
import SplashScreenContextProvider from "./components/SplashScreenContextProvider";
import AboutStage from "./stages/AboutStage";
import HomeStage from "./stages/HomeStage";
import ProjectStage from "./stages/ProjectStage";
import SkillStage from "./stages/SkillStage";

function App() {

    return (
        <SplashScreenContextProvider>
            <SplashScreen />
            <main>
                <HomeStage />
                <AboutStage />
                <SkillStage />
                <ProjectStage />
            </main>
        </SplashScreenContextProvider>
    );
}

export default App;
