interface PixelFrameProps {
    children: React.ReactNode;
}

function PixelFrame({children}: PixelFrameProps) {
    return (
        <div className="pixel-frame">
            {children}
        </div>
    )
}

export default PixelFrame;
