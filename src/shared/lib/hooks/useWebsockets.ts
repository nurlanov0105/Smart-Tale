"use client";

// import { useEffect, useRef, useState } from "react";
//
// interface UseWsProps {
//     url: string;
//     token: string;
// }
//
// export const useWs = ({ url, token }: UseWsProps) => {
//     const [isReady, setIsReady] = useState(false);
//     const [val, setVal] = useState<any>(null);
//
//     const ws = useRef<WebSocket | null>(null);
//
//     useEffect(() => {
//         const socket = new WebSocket(url);
//
//         socket.onopen = () => {
//             setIsReady(true);
//             socket.send(JSON.stringify({ action: token }));
//         };
//
//         socket.onclose = () => setIsReady(false);
//
//         socket.onmessage = (event) => {
//             setVal(JSON.parse(event.data));
//         };
//
//         socket.onerror = (error) => {
//             console.error("WebSocket error:", error);
//         };
//
//         ws.current = socket;
//
//         return () => {
//             socket.close();
//         };
//     }, [url, token]);
//
//     return [isReady, val, ws.current?.send.bind(ws.current)] as const;
// };


"use client";

import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

interface UseWsProps {
    url: string;
    token: string;
}

export const useWs = ({ url, token }: UseWsProps) => {
    const [isReady, setIsReady] = useState(false);
    const [val, setVal] = useState<any>(null);

    const socket = useRef<ReturnType<typeof io> | null>(null);

    useEffect(() => {

        const socketInstance = io(url, {
            transports: ['websocket', 'polling', 'flashsocket'],
            extraHeaders: {
                token: token
            },
            auth: {
                token: token
            }
        });


        socketInstance.on("connect", () => {
            setIsReady(true);
            console.log("Connected to WebSocket server");
        });

        socketInstance.on("disconnect", () => {
            setIsReady(false);
            console.log("Disconnected from WebSocket server");
        });

        socketInstance.on("message", (data) => {
            setVal(data);
        });

        socketInstance.on("connect_error", (error) => {
            console.error("WebSocket connection error:", error);
        });

        socket.current = socketInstance;

        return () => {
            socketInstance.close();
        };
    }, [url, token]);

    const send = (message: any) => {
        if (socket.current){
            socket.current.send(message)
        }
    };

    return [isReady, val, send] as const;
};