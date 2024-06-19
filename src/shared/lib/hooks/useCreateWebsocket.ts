
interface IProps{
    chatId: string
    handleMessage: (event: MessageEvent) => void;
    handleError: (event: Event) => void;
    handleClose: (event: CloseEvent) => void;
    handleOpen: (event: Event) => void;
}
export const createWebSocket = ({chatId, handleMessage, handleError, handleClose, handleOpen}: IProps) => {
    const ws = new WebSocket(`wss://helsinki-backender.org.kg/ws/chat/${chatId}`);

    ws.onopen = () => {
        console.log("Connected to the chat server.");
    };

    ws.onopen = handleOpen;

    ws.onmessage = handleMessage;

    ws.onerror = handleError;

    ws.onclose = handleClose;

    return ws;
};