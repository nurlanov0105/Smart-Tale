"use client";

import { useEffect, useRef, useState } from "react";
import { CookiesServices, EnumTokens } from "@/shared/lib";
import { useChatsStore } from "@/shared/store/chatStore/chatsStore";
import {useGetMessages} from "@/widgets/general/chats/model/useQueries";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

interface IMessage{
    sender: string,
    message: string

}

export const useWs = () => {
    const [isReady, setIsReady] = useState(false);
    const [firstRender, setFirstRender] = useState(true)

    const messages = useChatsStore(state => state.messages);
    const setMessages = useChatsStore(state => state.setChatState);


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

    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    useEffect(() => {
        if (isSuccess && data) {
            const newData = data.message_set?.map(item => ({
                sender: item.sender.slug,
                message: item.text,
                timestamp: item.timestamp,
                id: item.timestamp + item.text
            })) || [];
            setMessages({
                messages: messages ? messages.concat(newData) : newData
            });
        }
    }, [isSuccess, isError, chatId]);


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
            setFirstRender(false)
        };

        ws.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            if (newMessage?.sender) {
                setMessages({
                    messages: [{...newMessage, timestamp: getCurrentTime(), id: Date.now() + newMessage.message}].concat(messages)
                });
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
    }, [chatId, token, messages]);


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
        user,
        isLoading,
        sendMessage,
        isError
    } ;
};
