import "./App.css";
import MenuItem from "./MenuItem";
import Section from "./Section";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <main>
      <Section backgroundImage="/public/images/background-01.jpg">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="heading-1">Tuan Duong Nguyen</div>
          <div className="heading-2">
            <Typewriter
              options={{
                cursor: "_"
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("I'm a Full-stack developer")
                  .start();
              }}
            />
          </div>

          <div className="menu">
            <MenuItem selected>About me</MenuItem>
            <MenuItem>Experience</MenuItem>
            <MenuItem>Noteworthy Projects</MenuItem>
            <MenuItem>Contact</MenuItem>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default App;
