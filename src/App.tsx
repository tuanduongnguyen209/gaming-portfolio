import "./App.scss";
import AboutStage from "./stages/AboutStage";
import HomeStage from "./stages/HomeStage";
import ProjectStage from "./stages/ProjectStage";
import SkillStage from "./stages/SkillStage";

function App() {
    return (
        <main>
          <HomeStage />
          <AboutStage />
          <SkillStage />
          <ProjectStage />
        </main>
    );
}

export default App;
