import React, { useEffect, useState } from 'react';
import {CookiesServices, EnumTokens} from "@/shared/lib";
import {Message} from "postcss";

const ChatComponent3 = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    useEffect(() => {

        const token = CookiesServices.getCookiesValue(EnumTokens.ACCESS_TOKEN);

        const url = ` wss://helsinki-backender.org.kg/ws/chat/15/?token=${token}`;

        const ws = new WebSocket(url);

        ws.onopen = () => {
            console.log("WebSocket connection established");
        };

        ws.onmessage = (event) => {
            console.log("Received message:", JSON.parse(event.data));
            // const newNotification = JSON.parse(event.data).notifications;
            // if (newNotification) {
            //     setMessages((prevNotifications) => [...newNotification, ...prevNotifications]);
            // }
        };
        ws.onerror = (error) => {
           console.error("WebSocket error:", error);
        };

        ws.onclose = () => {
            console.log("WebSocket connection closed");
        };

        // if (depencies?.deleteSuccess) {
        //     return () => {
        //         ws.close();
        //     };
        // }

        return () => {
            ws.close();
            setMessages([]);
        };
    }, []);


    return (
        <div>
            <h2>Chat Messages</h2>
            <ul></ul>
        </div>
    );
};

export default ChatComponent3;
