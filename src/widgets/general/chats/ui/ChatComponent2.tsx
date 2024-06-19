"use client"
import React, {useEffect, useRef} from 'react';
import {useWs} from "@/shared/lib/hooks/useWebsockets";
import {CookiesServices, EnumTokens} from "@/shared/lib";

const ChatComponent2 = () => {

    const token = CookiesServices.getTokens().accessToken || ""

    const url = `wss://helsinki-backender.org.kg/ws/chat/2/`
    const [isReady, val, send] = useWs({ url, token });

    useEffect(() => {
        const messageData = {
            sender: "adilet-adilet",
            message: "brown-start",
        };
        send && send(JSON.stringify(messageData))
    }, [isReady, send]);

    return (
        <div>
            Ready: {JSON.stringify(isReady)}, Value: {JSON.stringify(val)}
        </div>
    );
};

export default ChatComponent2;