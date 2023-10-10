const socket = io("wss://localhost/", { path: "/Grantoria/", transports: ["websocket"] });
socket.on("connection", (socket) => {
    console.log(socket);
})