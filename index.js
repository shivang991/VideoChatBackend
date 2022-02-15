const http = require("http");
const { Server: WebSocketServer } = require("ws");
const crypto = require("crypto");
const handleMessages = require("./handlers/message-handler");
const { incomming } = require("./handlers/message-handler/message-types");
const { getAllRooms } = require("./handlers/redis-handler/helpers");

const PORT = process.env.PORT || 8000;

const httpServer = http.createServer((_, res) => {
  getAllRooms().then((rooms) => {
    res.end(JSON.stringify(rooms));
  });
});

httpServer.listen(PORT, () => console.log(`Listening on port:${PORT}`));

const wsServer = new WebSocketServer({ server: httpServer });

wsServer.on("connection", (socket) => {
  const socketId = crypto.randomBytes(12).toString("hex");
  socket.id = socketId;
  handleMessages({ socket, server: wsServer });
  socket.on("close", () => {
    socket.emit(
      "message",
      JSON.stringify({ type: incomming.ROOM.USER_DISCONNECTED })
    );
  });
});