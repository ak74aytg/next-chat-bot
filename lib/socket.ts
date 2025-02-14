import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:1337", { transports: ["websocket"] });

export default socket;
