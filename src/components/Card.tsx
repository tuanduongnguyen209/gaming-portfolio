import "./Card.scss";

export interface CardProps {
    name: string;
    description: string;
    imageUrl: string;
    active?: boolean;
    link?: string;
}

function Card({ name, description, imageUrl, link }: CardProps) {
    return (
        <a href={link} target="_blank" className="card">
            <div className="card-content">
                <div className="card-name">{name}</div>
                <img src={imageUrl} alt={name} />
                <div className="card-description">{description}</div>
            </div>
        </a>
    );
}

export default Card;
