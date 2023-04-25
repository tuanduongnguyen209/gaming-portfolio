import "./PixelFrame.scss";
interface PixelFrameProps {
    children: React.ReactNode;
}

function PixelFrame({ children }: PixelFrameProps) {
    return (
        <div className="pixel-frame">
            <div className="pixel-frame-content">{children}</div>
        </div>
    );
}

export default PixelFrame;
