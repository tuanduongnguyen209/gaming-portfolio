import "./MenuItem.scss";
interface MenuItemProps {
    selected?: boolean;
    selecting?: boolean;
    onSelect?: () => void;
    children: string;
}

function MenuItem({ selected, selecting, onSelect, children }: MenuItemProps) {
    return (
        <div
            onClick={onSelect}
            className={`menu-item${selected ? " selected" : ""}${selecting ? " selecting" : ""}`}
        >
            <span>{children.toUpperCase()}</span>
        </div>
    );
}

export default MenuItem;
