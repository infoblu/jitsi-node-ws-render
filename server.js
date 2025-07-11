const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

const clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);

  ws.on("message", (message) => {
    const data = JSON.parse(message);
    if (data.type === "broadcast") {
      clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ action: data.action }));
        }
      });
    } else if (data.type === "room") {
      clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ room: data.room.toString(), action: data.action }));
        }
      });
    }
  });

  ws.on("close", () => {
    const index = clients.indexOf(ws);
    if (index > -1) clients.splice(index, 1);
  });
});
