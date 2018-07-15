import express from "express";
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const statusRouter = express.Router();
app.use('/api/v1', statusRouter);

io.set('origins', '*:*');
io.on('connection', async (socket: any) => {
	console.log("Client Successfully Connected");

	io.emit('chat', "hello world");
})

server.listen(5000, () => {
	console.log("Backend Server is running on http://localhost:5000");
})