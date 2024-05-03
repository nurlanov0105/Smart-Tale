import {useOrdersStore} from "@/entities/general/navbarPanel";
import {useShallow} from "zustand/react/shallow";

export const useNavbar = () => {

    const { hidden, hover, addHover, removeHover, toggleHidden } = useOrdersStore(
        useShallow((state) => ({
            hidden: state.hidden,
            hover: state.hover,
            addHover: state.addHover,
            removeHover: state.removeHover,
            toggleHidden: state.toggleHidden,
        }))
    );


    const handleMouseOver = () => {
        if (hidden) {
            addHover();
        }
    };
    const handleMouseOut = () => {
        if (hidden && hover) {
            removeHover();
        }
    };
    const handleOverlayClick = () => {
        toggleHidden();
    };

    const handlePanelClick = () => {
        removeHover();
        toggleHidden();
    };



    return {hidden, hover, handleMouseOut, handleMouseOver, handleOverlayClick, handlePanelClick}
}