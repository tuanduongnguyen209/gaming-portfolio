import "./Card.scss";

export interface CardProps {
    name: string;
    description: string;
    imageUrl: string;
    active?: boolean;
}

function Card({ name, description, imageUrl }: CardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-name">{name}</div>
                <img src={imageUrl} alt={name} />
                <div className="card-description">{description}</div>
            </div>
        </div>
    );
}

export default Card;
