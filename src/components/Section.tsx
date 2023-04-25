import { useEffect } from "react";

interface SectionProps {
    backgroundImage: string;
    onReady?: () => void;
    children?: React.ReactNode;
}

function Section(props: SectionProps) {
    const { backgroundImage, children, onReady } = props;

    useEffect(() => {
        const img = new Image();
        img.src = backgroundImage;
        img.onload = () => onReady && onReady();
    }, [backgroundImage, onReady]);

    return (
        <div
            className="slide"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {children}
        </div>
    );
}

export default Section;
