import {Client} from "@stomp/stompjs";
import {CookiesServices} from "@/shared/lib";

export const createWebsocket = () => {

    const token = CookiesServices.getTokens().accessToken || ""

    const client = new Client({
        brokerURL: `wss://helsinki-backender.org.kg/ws`,
        connectHeaders: {
            Authorization: token,
        },

        onConnect: (frame) => {
            console.log('connected');
            client.subscribe(`/chat/${2}/`, (message) => {
                const messages = JSON.parse(message.body);
                console.log(message, messages)
            });

        },
        onDisconnect: async (frame) => {
            console.log("disconnect " + frame)
        },
    });

    return client;
};