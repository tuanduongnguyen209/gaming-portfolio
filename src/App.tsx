import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import SplashScreen from "./components/SplashScreen";
import SplashScreenContextProvider from "./components/SplashScreenContextProvider";
import AboutStage from "./stages/AboutStage";
import HomeStage from "./stages/HomeStage";
import ProjectStage from "./stages/ProjectStage";
import SkillStage from "./stages/SkillStage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeStage />,
    },
    {
        path: "/about",
        element: <AboutStage />,
    },
    {
        path: "/badges",
        element: <SkillStage />,
    },
    {
        path: "/projects",
        element: <ProjectStage />,
    },
]);

function App() {
    return (
        <SplashScreenContextProvider>
            <SplashScreen />
            <RouterProvider router={router} />
        </SplashScreenContextProvider>
    );
}

export default App;
