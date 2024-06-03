import type {EffectsProps} from "@/features/auth/model/types";
import {useThemeStore} from "@/shared/store/themeStore";
import {useEffect, useRef} from "react";
import {useDebounce} from "@/shared/lib";

export const useThemeAndPasswordEffects = ({watch, trigger}:EffectsProps) => {
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const password = useRef<string | undefined>(undefined);
    password.current = watch("password", "");

    const debouncedValuePassword = useDebounce(password.current)

    useEffect(() => {
        trigger("rePassword");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValuePassword]);

    return {theme}
}
