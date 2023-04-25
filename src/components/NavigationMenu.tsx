import { memo, useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import useDebounceNavigate from "../hooks/useDebounceNavigate";

export interface NavigationMenuProps {
    menuItems: {
        name: string;
        title: string;
    }[];
    className?: string;
}

function NavigationMenu({ menuItems, className }: NavigationMenuProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectingIndex, setSelectingIndex] = useState<null | number>(null);
    const navigate = useDebounceNavigate();

    const handleArrowUp = useCallback(() => {
        setActiveIndex((current) => (current === 0 ? menuItems.length - 1 : current - 1));
    }, [menuItems.length]);
    const handleArrayDown = useCallback(() => {
        setActiveIndex((current) => (current === menuItems.length - 1 ? 0 : current + 1));
    }, [menuItems.length]);

    const handleSelect = useCallback(
        (index: number) => {
            setSelectingIndex(null);
            navigate(menuItems[index].name);
        },
        [menuItems, navigate]
    );

    const onSelect = useCallback(
        (index: number) => {
            setSelectingIndex(index);
            setActiveIndex(index);
            setTimeout(() => handleSelect(index), 1000);
        },
        [handleSelect]
    );

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.code === "ArrowUp") {
                handleArrowUp();
            } else if (event.code === "ArrowDown") {
                handleArrayDown();
            } else if (event.code === "Enter") {
                onSelect(activeIndex);
            }
        },
        [activeIndex, handleArrayDown, handleArrowUp, onSelect]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);
    return (
        <div className={`menu ${className || ""}`}>
            {menuItems.map((item, index) => (
                <MenuItem
                    selected={index === activeIndex}
                    selecting={index === selectingIndex}
                    onSelect={() => onSelect(index)}
                    key={item.name}
                >
                    {item.title}
                </MenuItem>
            ))}
        </div>
    );
}

export default memo(NavigationMenu);
