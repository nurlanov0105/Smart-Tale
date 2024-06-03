"use client"

import React from "react";
import {useThemeStore} from "@/shared/store/themeStore";
import clsx from "clsx";

const NotFound = () => {
    const theme = useThemeStore(state => state.theme)

    return (
      <div className={clsx(`${theme}`, "not-found")}>
         <h2 className="h2">Page not found. Error 404 😕</h2>
      </div>
    );
};

export default NotFound;
