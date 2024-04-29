export type NavbarPanelType = {
   isHover?: boolean;
};
export type NavbarType = {
   hidden: boolean;
   hover: boolean;

   toggleHidden: () => void;
   addHover: () => void;
   removeHover: () => void;
};
