import { io, Socket } from "socket.io-client";

const socket: Socket = io(process.env.SOCKET_API_URL, { transports: ["websocket", "polling"] });

export default socket;
