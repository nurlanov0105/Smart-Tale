import React, { useEffect, useState } from 'react';
import {createWebsocket} from '@/shared/lib/hooks/useWs2';
import {Client} from "@stomp/stompjs";
import {CookiesServices} from "@/shared/lib";

const ChatComponent3 = () => {
    // const [client, setClient] = useState<null | Client>(null);
    //
    // useEffect(() => {
    //     const newClient = createWebsocket();
    //
    //     if (!newClient.connected) {
    //         newClient.activate();
    //     }
    //
    //     setClient(newClient);
    //
    //     return () => {
    //         if (newClient.connected) {
    //             newClient.deactivate();
    //         }
    //     };
    // }, []);
    const token = CookiesServices.getTokens().accessToken || ""
    const headers={
        token: token
    }

    useEffect(() => {
        const token = CookiesServices.getTokens().accessToken || ""

        const client = new Client({
            brokerURL: `wss://helsinki-backender.org.kg/ws/chat/1/`,
            connectHeaders: {
                token: `${token}`,
            },
            reconnectDelay: 4000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,

            onConnect: (frame) => {
                client.subscribe('/chat/1/', message =>
                    console.log(`Received: ${message.body}`)
                );
                client.publish({ destination: '/chat/1', body: 'First Message' });
            },
            onStompError: (frame) => {
                console.log('Broker reported error: ' + frame.headers['message']);
                console.log('Additional details: ' + frame.body);
            },

        });

        console.log(client.connectHeaders)

        client.activate();
    }, []);


    return (
        <div>
            <h2>Chat Messages</h2>
            <ul></ul>
        </div>
    );
};

export default ChatComponent3;
