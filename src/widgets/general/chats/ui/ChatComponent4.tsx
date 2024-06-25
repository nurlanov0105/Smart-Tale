// WebSocketComponent.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import {CookiesServices} from "@/shared/lib";

const WebSocketComponent = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const token = CookiesServices.getTokens().accessToken || ""
    const url = `wss://helsinki-backender.org.kg/ws/notifications/32/?token=${token}`

    const socket = io(url); // Укажите URL вашего сервера WebSocket

    // useEffect(() => {
    //     // Подписка на входящие сообщения от сервера
    //     socket.on('message', (message) => {
    //         setMessages((prevMessages) => [...prevMessages, message]);
    //     });
    //
    //     // Функция очистки эффекта
    //     return () => {
    //         socket.disconnect();
    //     };
    // }, []); // [] - зависимость пустая, что бы эфект сработал только 1 раз

    const sendMessage = () => {
        // Отправка сообщения на сервер
        socket.emit('message', inputMessage);
        setInputMessage(''); // Очистка поля ввода
    };

    return (
        <div>
            <h1>WebSocket Example</h1>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Enter message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default WebSocketComponent;
