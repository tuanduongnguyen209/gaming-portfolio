interface MenuItemProps {
  selected?: boolean;
  children: string;
}

function MenuItem({ selected, children }: MenuItemProps) {
  return (
    <div className={`menu-item ${selected ? "selected" : ""}`}>
      {children.toUpperCase()}
    </div>
  );
}

export default MenuItem;
