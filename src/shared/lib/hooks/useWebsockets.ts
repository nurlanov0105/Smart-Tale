"use client";

import { useEffect, useRef, useState } from "react";
import { CookiesServices, EnumTokens } from "@/shared/lib";
import { useChatsStore } from "@/shared/store/chatStore/chatsStore";
import {ChatUserTypes, IMessageFullTypes} from "@/widgets/general/chats/model/types";
import {useGetMessages} from "@/widgets/general/chats/model/useQueries";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

interface IMessageType {
    sender: ChatUserTypes;
    text: string;
    timestamp: string
}

interface IMessage{
    sender: string,
    message: string
}

export const useWs = () => {
    const [messages, setMessages] = useState<IMessageType[]>();
    const [isReady, setIsReady] = useState(false);

    const chatId = useChatsStore(state => state.selectedChat);
    const slug = useSubscribeStore(state => state.data?.profile.slug);
    const token = CookiesServices.getCookiesValue(EnumTokens.ACCESS_TOKEN);
    const wsRef = useRef<WebSocket | null>(null);

    const {
        data,
        isLoading ,
        isError,
        isSuccess
    } = useGetMessages(chatId ? chatId : "");

    useEffect(() => {
        if (isSuccess && data) {
            setMessages(prevState => {
                const newData = data.message_set?.map(item => ({
                    sender: item.sender,
                    text: item.text,
                    timestamp: item.timestamp
                })) || [];
                return prevState ? [...prevState, ...newData] : newData;
            });
        }
    }, [isSuccess, data, isError]);

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
            if (newMessage?.sender) {
                setMessages(prevState => (prevState ? [newMessage, ...prevState] : [newMessage]));
            }
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
    const user = slug === data?.initiator.slug ? data?.receiver : data?.initiator;

    return {
        isReady,
        messages,
        sendMessage,
        user,
        isLoading,
        isError
    } ;
};
