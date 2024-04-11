"use client";
import { useOutside } from "@/shared/lib";
import { showModal } from "@/widgets/modal";

const Header = () => {
   const { ref, isShown, toggleShow } = useOutside(false);
   const handleClick = () => {
      showModal("");
   };

   return (
      <>
         <div onClick={handleClick}>Header</div>
         <div>
            <button onClick={toggleShow}>Toggle</button>
            {isShown && <div ref={ref}>This is the content</div>}
         </div>
      </>
   );
};

export default Header;
