import {FC, useEffect, useRef, useState} from "react";
import {createWebSocket} from "@/shared/lib/hooks/useCreateWebsocket";
import {CookiesServices} from "@/shared/lib";

interface ChatComponentProps {
    chatId: string;
    userEmail: string;
    userId: string;
}

interface Message {
    sender: string;
    message: string;
    attachment?: File | null;
}

const ChatComponent: FC<ChatComponentProps> = ({ chatId, userEmail, userId }) => {

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const wsRef = useRef<WebSocket | null>(null);
    const messageContainerRef = useRef<HTMLDivElement | null>(null);

    const token = CookiesServices.getTokens().accessToken

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const data = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, data]);
            if (messageContainerRef.current) {
                messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
            }
        };

        const handleError = (error: Event) => {
            console.log("WebSocket error:", error);
        };

        const handleClose = (event: CloseEvent) => {
            console.log("Disconnected from the chat server. Code:", event.code, "Reason:", event.reason);
            setIsConnected(false);

            setTimeout(() => {
                console.log("Reconnecting...");
                wsRef.current = createWebSocket();
            }, 5000);
        };

        const handleOpen = (event: Event) => {
            console.log("Connected to the chat server.");
            setIsConnected(true);
        };

        const createWebSocket = () => {
            const ws = new WebSocket(`wss://helsinki-backender.org.kg/ws/chat/${chatId}/`);
            ws.onopen = handleOpen;
            ws.onmessage = handleMessage;
            ws.onerror = handleError;
            ws.onclose = handleClose;

            // Set the token in the WebSocket protocols (assuming the server supports this method)
            ws.addEventListener('open', () => {
                ws.send(JSON.stringify({ action: 'authenticate', token: token }));
            });

            return ws;
        };

        wsRef.current = createWebSocket();

        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, [chatId, token]);

    const sendMessage = () => {
        if (wsRef.current?.readyState === WebSocket.OPEN && input.trim() !== "") {
            const messageData: Message = {
                sender: userId,
                message: input,
            };

            wsRef.current.send(JSON.stringify(messageData));
            setInput("");
            if (messageContainerRef.current) {
                messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div>
            <div id="messageContainer" ref={messageContainerRef} style={{maxHeight: "400px", overflowY: "auto"}}>
                {messages.map((msg, index) => {
                    // const currentTime = new Date(msg.timestamp).toLocaleTimeString([], {
                    //     hour: "2-digit",
                    //     minute: "2-digit",
                    //     hour12: false
                    // });
                    return (
                        <div
                            key={index}
                            className={`shadow-card-shadow py-[14px] px-2.5 mt-[25px] rounded-[20px] ${
                                msg.sender === userEmail ? "bg-[#FBFBFB] rounded-br-none lg-md:max-w-[426px] ml-auto" : "rounded-tl-none lg-md:max-w-[427px] lg-md:bg-[#FFFEDF]"
                            }`}
                        >
                            <p>{msg.message}</p>
                            <div className="text-right text-[#747474] text-sm"></div>
                        </div>
                    );
                })}
            </div>
            <input
                id="messageInput"
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
            <div>{isConnected ? "Connected to WebSocket" : "Disconnected from WebSocket"}</div>
        </div>
    );
};

export default ChatComponent;