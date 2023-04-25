import Button from "../components/Button";
import ListItem, { ListItemProps } from "../components/ListItem";
import PixelFrame from "../components/PixelFrame";
import Section from "../components/Section";
import useDebounceNavigate from "../hooks/useDebounceNavigate";
import useSplashScreenContext from "../hooks/useSplashScreenContext";

const languageItems: ListItemProps[] = [
    {
        title: "Responsive Design Dynamo",
        subtitle:
            "Build responsive websites that adapt to different screen sizes and devices using CSS media queries.",

        imageUrl: "/images/CSS3_logo.png",
    },
    {
        title: "JavaScript Maestro",
        subtitle:
            "Successfully demonstrate mastery in all aspects of JavaScript, including DOM manipulation, event handling, functions, arrays, objects, asynchronous programming, ES6 features, design patterns, testing, performance optimization, cross-browser compatibility, security best practices, and more.",

        imageUrl: "/images/JavaScript-logo.png",
    },
    {
        title: "TypeScript Mastermind",
        subtitle:
            "Demonstrate exceptional mastery of TypeScript concepts and best practices through various projects and contributions.",

        imageUrl: "/images/typescript-logo.png",
    },
    {
        title: "Java Jedi",
        subtitle:
            "Demonstrate mastery in Java programming, including object-oriented concepts, data structures, algorithms, and exception handling.",

        imageUrl: "/images/Java-Logo.png",
    },
    {
        title: "SQL Sorcerer",
        subtitle:
            "Demonstrate proficiency in writing SQL queries, managing databases, and optimizing database performance.",

        imageUrl: "/images/sql-logo.png",
    },
    {
        title: "Spring Boot Specialist",
        subtitle:
            "Master the basics of the Spring Boot framework, including building RESTful APIs and implementing microservices architecture.",
        imageUrl: "/images/spring.svg",
    },
    {
        title: "Node.js Ninja",
        subtitle:
            "Showcase expertise in Node.js, including event-driven programming and building server-side applications.",
        imageUrl: "/images/Node.js_logo.png",
    },
    {
        title: "Express.js Expert",
        subtitle:
            "Excel in building web applications using Express.js, including handling routes and middleware.",
        imageUrl: "/images/expressjs-logo.svg",
    },
    {
        title: "React Pro",
        subtitle:
            "Master the fundamentals of React, including building reusable UI components and managing component state.",
        imageUrl: "/images/React-icon.png",
    },
    {
        title: "React Native Rockstar",
        subtitle:
            "Demonstrate proficiency in developing cross-platform mobile applications using React Native, including building UI components and handling state management.",
        imageUrl: "/images/React-icon.png",
    },
    {
        title: "Docker Dynamo",
        subtitle:
            "Master the basics of Docker containerization, including creating and managing containers for application deployment.",
        imageUrl: "/images/docker-logo.webp",
    },
    {
        title: "Git Guru",
        subtitle:
            "Demonstrate proficiency in version control with Git, including basic branching, merging, and conflict resolution.",
        imageUrl: "/images/git-logo.svg",
    },
    {
        title: "AWS Enthusiast",
        subtitle:
            "Showcase basic knowledge of Amazon Web Services (AWS), including deploying and managing applications on cloud platforms such as EC2 and S3.",
        imageUrl: "/images/aws-logo.png",
    },
    {
        title: "PostgreSQL Pro",
        subtitle:
            "Excel in working with PostgreSQL, including basic database design and writing simple queries.",
        imageUrl: "/images/postgres-logo.png",
    },
];

function SkillStage() {
    const navigate = useDebounceNavigate();
    const splashScreenContext = useSplashScreenContext();
    function onReady() {
        setTimeout(() => splashScreenContext.setOpen(true), 200);
    }
    return (
        <Section backgroundImage="/images/background-01.jpg" onReady={onReady}>
            <PixelFrame>
                <div className="heading-2">Tuan Duong Nguyen</div>
                <div className="heading-3">⭐⭐⭐ Badges ⭐⭐⭐</div>

                <div className="mt-3 mt-lg-5 px-lg-5 overflow-y-auto">
                    {languageItems.map((item, index) => (
                        <ListItem key={`language-item-${index}`} {...item} />
                    ))}
                </div>
                <div className="d-flex justify-content-center p-3">
                    <Button onClick={() => navigate("/")} variant="warning">
                        Go back
                    </Button>
                </div>
            </PixelFrame>
        </Section>
    );
}

export default SkillStage;
