import { ReactNode } from "react";
import "./Button.scss";

interface ButtonProps {
    children: ReactNode;
    variant: "success" | "warning" | "error";
    onClick?: () => void;
}

function Button({ children, variant = "success", onClick }: ButtonProps) {
    return (
        <div className={`eightbit-btn ${variant}`} onClick={onClick}>
            {children}
        </div>
    );
}

export default Button;
