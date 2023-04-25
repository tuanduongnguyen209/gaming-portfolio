import { ReactNode } from "react";
import "./Button.scss";

interface ButtonProps {
    children: ReactNode;
    variant: "success" | "warning" | "error";
}

function Button({ children, variant = "success" }: ButtonProps) {
    return <div className={`eightbit-btn ${variant}`}>{children}</div>;
}

export default Button;
