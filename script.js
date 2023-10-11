var WS = io("wss://localhost/", {
    path: "/Grantoria/",
    transports: ["websocket"]
});
WS.on("connection", (socket) => {
    console.log(socket);
});