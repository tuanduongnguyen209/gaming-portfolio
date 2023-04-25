import { useContext } from "react";
import { SplashScreenContext } from "../components/SplashScreenContextProvider";

function useSplashScreenContext() {
    return useContext(SplashScreenContext);
}

export default useSplashScreenContext;
