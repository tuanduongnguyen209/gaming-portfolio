import "./App.scss";
import AboutStage from "./stages/AboutStage";
import HomeStage from "./stages/HomeStage";
import SkillStage from "./stages/SkillStage";

function App() {
    return (
        <main>
          <HomeStage />
          <AboutStage />
          <SkillStage />
        </main>
    );
}

export default App;
