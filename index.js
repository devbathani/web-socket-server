const WebSocket = require("ws");

// const serverAddress = "ws://127.0.0.1:5000";
const serverAddress = "wss://otpless-websocket-tester.glitch.me/";

const wss = new WebSocket(serverAddress, {
  headers: {
    "user-agent": "Mozilla",
  },
});

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });
  console.log("connected");
  ws.send("devs testing");
});
