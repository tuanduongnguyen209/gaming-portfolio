import "./App.scss";
import MenuItem from "./MenuItem";
import Section from "./Section";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <main>
      <Section backgroundImage="/public/images/background-01.jpg">
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

          <div className="menu">
            <MenuItem selected>About me</MenuItem>
            <MenuItem>Experience</MenuItem>
            <MenuItem>Noteworthy Projects</MenuItem>
            <MenuItem>Contact</MenuItem>
          </div>
        </div>
      </Section>

      <Section backgroundImage="/public/images/background-01.jpg">
        <img src="/public/images/pxArt.png" alt="pixel art" width={400} className="left-corner-image" />
        <div className="pixel-frame">
          <div>
            <div className="heading-2">Tuan Duong Nguyen</div>
            <div className="heading-3">⭐⭐⭐ Full-stack developer ⭐⭐⭐</div>
          </div>

          <div className="mt-5">
            <Typewriter
              options={{
                cursor: "_",
                wrapperClassName: "heading-3",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString(
                    "With 4 years of experience in software development, I excel in web development using React, NodeJS, and Java. My passion for creating high-quality software is driven by continuous learning and a strong foundation in computer science principles. I possess excellent problem-solving skills and thrive in collaborative environments. My expertise and skills make me a dedicated software developer who is always eager to take on new challenges and contribute to project success."
                  )
                  .start();
              }}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}

export default App;
