import { ReactNode } from "react";
import "./Button.scss";

interface ButtonProps extends React.HTMLProps<HTMLAnchorElement> {
    children: ReactNode;
    variant: "success" | "warning" | "error";
    onClick?: () => void;
}

function Button({ children, variant = "success", onClick, ...rest }: ButtonProps) {
    return (
        <a className={`eightbit-btn ${variant}`} onClick={onClick} {...rest}>
            {children}
        </a>
    );
}

export default Button;
