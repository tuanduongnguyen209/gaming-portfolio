import "./ListItem.scss";

export interface ListItemProps {
    title: string;
    subtitle: string;
    imageUrl: string;
}

function ListItem({ title, subtitle: subTitle, imageUrl }: ListItemProps) {
    return (
        <div className="list-item">
            <img className="list-item-image" src={imageUrl} width={50} height={50} />
            <div className="list-item-content">
                <div className="list-item-title">{title}</div>
                <div className="list-item-subtitle">{subTitle}</div>
            </div>
        </div>
    );
}

export default ListItem;
