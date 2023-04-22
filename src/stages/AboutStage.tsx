import MenuItem from "../components/MenuItem";
import PixelFrame from "../components/PixelFrame";
import Section from "../components/Section";
import Typewriter from "typewriter-effect";

function AboutStage() {
    return (
        <Section backgroundImage="/public/images/background-01.jpg">
            <img
                src="/public/images/pxArt.png"
                alt="pixel art"
                width={400}
                className="left-corner-image"
            />
            <PixelFrame>
                <div>
                    <div className="heading-2">Tuan Duong Nguyen</div>
                    <div className="heading-3">⭐⭐⭐ About ⭐⭐⭐</div>
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

                <div className="dialog-option">
                    <div className="menu p-3">
                        <MenuItem selected>That's look good! Show me your skills.</MenuItem>
                        <MenuItem>I don't believe it!</MenuItem>
                        <MenuItem>Back</MenuItem>
                    </div>
                </div>
            </PixelFrame>
        </Section>
    );
}

export default AboutStage;
