import Button from "../components/Button";
import Card, { CardProps } from "../components/Card";
import PixelFrame from "../components/PixelFrame";
import Section from "../components/Section";
import useDebounceNavigate from "../hooks/useDebounceNavigate";
import useSplashScreenContext from "../hooks/useSplashScreenContext";

const cards: CardProps[] = [
    {
        name: "Gochimeshi",
        imageUrl: "/images/gochimeshi.png",
        description:
            "An e-commerce system that helps restaurants, shops, companies provide/sell meal tickets, vouchers.",
    },
    {
        name: "Hokatsu Assist",
        imageUrl: "/images/hokatsu.png",
        description:
            "An information lookup website that helps to search, manage, PR for nurseries.",
    },
    {
        name: "Manabie LMS",
        imageUrl: "/images/manabie.png",
        description:
            "A learning/teaching management system that provides powerful tool to manage various aspects of the education process.",
    },
    {
        name: "PoSA (Point-of-Sale Activation)",
        imageUrl: "/images/digital-safety.png",
        description:
            "A digital asset protection solution that uses 3S Smart Barcodes to track products from manufacturing to point-of-sale, making them non-functional until activated.",
    },
];

function ProjectStage() {
    const splashScreenContext = useSplashScreenContext();
    const navigate = useDebounceNavigate();
    function onReady() {
        setTimeout(() => splashScreenContext.setOpen(true), 200);
    }
    return (
        <Section backgroundImage="/images/background-01.jpg" onReady={onReady}>
            <PixelFrame>
                <div className="heading-2">Tuan Duong Nguyen</div>
                <div className="heading-3">⭐⭐⭐ Projects ⭐⭐⭐</div>

                <div className="mt-5 px-5 d-flex justify-content-center gap-4">
                    {cards.map((item, index) => (
                        <Card {...item} key={index} />
                    ))}
                </div>

                <div className="mt-auto d-flex justify-content-center p-3">
                    <Button onClick={() => navigate("/")} variant="warning">
                        Go back
                    </Button>
                </div>
            </PixelFrame>
        </Section>
    );
}

export default ProjectStage;
