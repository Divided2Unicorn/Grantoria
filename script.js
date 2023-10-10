const socket = io("wss://localhost/Grantoria/", { transports: ["websocket"] });
socket.on("connection", (socket) => {
    console.log(socket);
})