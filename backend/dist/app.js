"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const statusRouter = express_1.default.Router();
app.use('/api/v1', statusRouter);
io.set('origins', '*:*');
io.on('connection', (socket) => __awaiter(this, void 0, void 0, function* () {
    console.log("Client Successfully Connected");
    io.emit('chat', "hello world");
}));
server.listen(5000, () => {
    console.log("Backend Server is running on http://localhost:5000");
});
//# sourceMappingURL=app.js.map