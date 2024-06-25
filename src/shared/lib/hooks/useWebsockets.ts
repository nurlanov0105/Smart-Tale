"use client";

import { useEffect, useRef, useState } from "react";
import { CookiesServices, EnumTokens } from "@/shared/lib";
import { useChatsStore } from "@/shared/store/chatStore/chatsStore";

interface IMessage {
    sender: string;
    message: string;
}

export const useWs = () => {
    const chatId = useChatsStore(state => state.selectedChat);
    const [isReady, setIsReady] = useState(false);
    const token = CookiesServices.getCookiesValue(EnumTokens.ACCESS_TOKEN);
    const wsRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        if (!chatId) {
            return;
        }

        const url = `wss://helsinki-backender.org.kg/ws/chat/${chatId}/?token=${token}`;
        const ws = new WebSocket(url);
        wsRef.current = ws;

        ws.onopen = () => {
            console.log("WebSocket connection established");
            setIsReady(true);
        };

        ws.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
            setIsReady(false);
        };

        ws.onclose = () => {
            console.log("WebSocket connection closed");
            setIsReady(false);
        };

        return () => {
            ws.close();
            wsRef.current = null;
        };
    }, [chatId, token]);

    const sendMessage = (message: IMessage) => {
        if (wsRef.current && isReady) {
            wsRef.current.send(JSON.stringify(message));
        } else {
            console.error("WebSocket is not ready to send messages");
        }
    };

    return [isReady, sendMessage] as const;
};
