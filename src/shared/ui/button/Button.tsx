import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import "./styles.scss";

const Button = ({
   className,
   imgName,
   children,
   ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { imgName?: string }) => {
   const [imgSrc, setImgSrc] = useState<string | null>(null);

   // useEffect(() => {
   //    const checkImage = async (path: string) => {
   //       return new Promise((resolve) => {
   //          const img = new window.Image();
   //          img.onload = () => resolve(true);
   //          img.onerror = () => resolve(false);
   //          img.src = path;
   //       });
   //    };

   //    const loadImage = async (name: string) => {
   //       const path = `/imgs/btn/${name}.svg`;
   //       const exists = await checkImage(path);
   //       if (exists) {
   //          setImgSrc(path);
   //       } else {
   //          setImgSrc(null);
   //       }
   //    };

   //    if (imgName) {
   //       loadImage(imgName);
   //    } else {
   //       setImgSrc(null);
   //    }
   // }, [imgName]);

   return (
      <button {...props} className={clsx("btn", className ? className : "")}>
         <span>{children}</span>
         {/* {imgSrc && <Image src={imgSrc} alt={imgName || ""} width={24} height={24} />} */}
      </button>
   );
};

export default Button;
