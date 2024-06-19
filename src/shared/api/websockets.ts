// var ws = new WebSocket(`wss://${window.location.host}/ws/socket-server/chat/{{ chat.id }}`);
//
//
// ws.onopen = function() {
//     console.log("Connected to the chat server.");
//     messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the bottom
// };
//
// ws.onmessage = function(event) {
//     var data = JSON.parse(event.data);
//     console.log(data);
//     const userEmail = "{{ user.email }}";
//     var messageContainer = document.getElementById("messageContainer");
//     var messageElement = document.createElement("div");
//     <!--    var formattedTime = timestamp.toLocaleString('ru-RU', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace('.', '');-->
//     const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
//
//     if (data.message.user === userEmail) {
//
//         messageElement.innerHTML = `
//             <div class="shadow-card-shadow py-[14px] px-2.5 mt-[25px] rounded-[20px] bg-[#FBFBFB] rounded-br-none lg-md:max-w-[426px] ml-auto">
//                 <p>${data.message.message}</p>
//                 <div class="text-right text-[#747474] text-sm">${currentTime}</div>
//             </div>`;
//     } else {
//         messageElement.innerHTML = `
//             <div class="shadow-card-shadow py-[14px] px-2.5 mt-[25px] rounded-[20px] rounded-tl-none lg-md:max-w-[427px] lg-md:bg-[#FFFEDF]">
//                 <p>${data.message.message}</p>
//                 <div class="text-right text-[#747474] text-sm">${currentTime}</div>
//             </div>`;
//     }
//     messageContainer.appendChild(messageElement);
//     messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the bottom
// };
//
// ws.onerror = function(error) {
//     console.log("WebSocket error: " + error);
// };
//
// ws.onclose = function(event) {
//     console.log("Disconnected from the chat server.");
// };
//
// function sendMessage() {
//     var input = document.getElementById("messageInput");
//     if (ws.readyState === WebSocket.OPEN && input.value.trim() !== "") {
//         ws.send(JSON.stringify({
//             'message': input.value,
//             'user': "{{ user.id }}"
//         }));
//         input.value = ""; // Clear input after send
//         messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the bottom
//     }
// }
//
// document.getElementById("messageInput").addEventListener("keypress", function(e) {
//     if (e.key === "Enter") {
//         sendMessage();
//
//     }
// });
// ws.onclose = function(event) {
//     console.log("Disconnected from the chat server. Code:", event.code, "Reason:", event.reason);
//     // Здесь можно добавить код для переподключения или уведомления пользователя
// };
//
// ws.onerror = function(error) {
//     console.log("WebSocket error:", error);
//     // Обработка ошибки, например, показ уведомления
// };
