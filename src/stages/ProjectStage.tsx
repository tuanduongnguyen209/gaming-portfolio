import Card, { CardProps } from "../components/Card";
import PixelFrame from "../components/PixelFrame";
import Section from "../components/Section";

const cards: CardProps[] = [
    {
        name: "Gochimeshi",
        imageUrl: "/public/images/gochimeshi.png",
        description: "An e-commerce system that helps restaurants, shops, companies provide/sell meal tickets, vouchers."
    },
    {
        name: "Hokatsu Assist",
        imageUrl: "/public/images/hokatsu.png",
        description: "An information lookup website that helps to search, manage, PR for nurseries."
    },
    {
        name: "Manabie LMS",
        imageUrl: "/public/images/manabie.png",
        description: "A learning/teaching management system that provides powerful tool to manage various aspects of the education process."
    },
    {
        name: "PoSA (Point-of-Sale Activation)",
        imageUrl: "/public/images/digital-safety.png",
        description: "A digital asset protection solution that uses 3S Smart Barcodes to track products from manufacturing to point-of-sale, making them non-functional until activated."
    }
];

function ProjectStage() {
    return (
        <Section backgroundImage="/public/images/background-01.jpg">
            <PixelFrame>
                <div className="heading-2">Tuan Duong Nguyen</div>
                <div className="heading-3">⭐⭐⭐ Projects ⭐⭐⭐</div>

                <div className="d-flex">
                    {cards.map((item, index) => (
                        <Card {...item} key={index} />
                    ))}
                </div>
            </PixelFrame>
        </Section>
    );
}

export default ProjectStage;
