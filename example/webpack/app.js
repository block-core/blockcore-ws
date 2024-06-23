import WebSocket from 'blockcore-ws';

const ws = new WebSocket('wss://echo.websocket.org');

ws.on('open', function open() {
  console.log('connected');
  ws.send(Date.now());
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function incoming(data) {
  console.log(`Roundtrip time: ${Date.now() - data} ms`);
  ws.send(Date.now());
});
