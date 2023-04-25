import { useNavigate } from "react-router-dom";
import useSplashScreenContext from "./useSplashScreenContext";
import { useCallback } from "react";

function useDebounceNavigate() {
    const splashContext = useSplashScreenContext();
    const navigate = useNavigate();
    return useCallback(
        (route: string) => {
            splashContext.setOpen(false);
            setTimeout(() => {
                navigate(route);
            }, 300);
        },
        [navigate, splashContext]
    );
}

export default useDebounceNavigate;
