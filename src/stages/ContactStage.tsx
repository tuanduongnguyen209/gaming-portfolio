import Button from "../components/Button";
import Card, { CardProps } from "../components/Card";
import PixelFrame from "../components/PixelFrame";
import Section from "../components/Section";
import useDebounceNavigate from "../hooks/useDebounceNavigate";
import useSplashScreenContext from "../hooks/useSplashScreenContext";

const cards: CardProps[] = [
    {
        name: "Email",
        imageUrl: "/images/gmail.png",
        description: "nguyentuanduong097@gmail.com",
        link: "mailto:nguyentuanduong097@gmail.com"
    },
    {
        name: "LinkedIn",
        imageUrl: "/images/linkedin.png",
        description: "linkedin.com/in/nguyentuanduong097",
        link: "https://linkedin.com/in/nguyentuanduong097"
    },
    {
        name: "GitHub",
        imageUrl: "/images/github.png",
        description: "github.com/tuanduongnguyen209",
        link: "https://github.com/tuanduongnguyen209"
    },
];

function ContactStage() {
    const splashScreenContext = useSplashScreenContext();
    const navigate = useDebounceNavigate();
    function onReady() {
        setTimeout(() => splashScreenContext.setOpen(true), 200);
    }

    return (
        <Section backgroundImage="/images/background-01.jpg" onReady={onReady}>
            <img
                src="/images/pxArt.png"
                alt="pixel art"
                width={400}
                className="left-corner-image"
            />
            <PixelFrame>
                <div>
                    <div className="heading-2">Tuan Duong Nguyen</div>
                    <div className="heading-3">⭐⭐⭐ Contact ⭐⭐⭐</div>
                </div>

                <div className="mt-3 mt-lg-5 px-2 px-lg-5 container overflow-y-auto">
                    <div className="row justify-content-center">
                        {cards.map((item, index) => (
                            <div className="col col-lg-3 mb-3" key={index}>
                                <Card {...item} />
                            </div>
                        ))}
                    </div>
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

export default ContactStage;
