import { createContext, useState } from "react";

export const SplashScreenContext = createContext<SplashScreenContextType>({
    open: false,
    setOpen: () => {},
});

export interface SplashScreenContextType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SplashScreenContextProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <SplashScreenContext.Provider
            value={{
                open,
                setOpen,
            }}
        >
            {children}
        </SplashScreenContext.Provider>
    );
}

export default SplashScreenContextProvider;
