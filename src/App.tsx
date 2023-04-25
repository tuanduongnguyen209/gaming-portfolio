import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import SplashScreen from "./components/SplashScreen";
import SplashScreenContextProvider from "./components/SplashScreenContextProvider";
import HomeStage from "./stages/HomeStage";
import AboutStage from "./stages/AboutStage";
import SkillStage from "./stages/SkillStage";
import ProjectStage from "./stages/ProjectStage";
import { useMemo } from "react";

function App() {
    const ROUTES = useMemo(
        () => [
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
        ],
        []
    );
    const router = createBrowserRouter(ROUTES);
    return (
        <SplashScreenContextProvider>
            <SplashScreen />
            <RouterProvider router={router} />
        </SplashScreenContextProvider>
    );
}

export default App;
