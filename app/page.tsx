"use client";

import { useState, useEffect } from "react";
import socket from "@/lib/socket";
import { fetchChatMessages } from "@/lib/api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ChatBox from "../component/ChatBox";
import Sidebar from "../component/Sidebar";

export default function Home() {
    const [messages, setMessages] = useState<
        { id: number; text: string; sender: number; receiver: number; timestamp: number }[]
    >([]);
    const [input, setInput] = useState<string>("");
    // const [selectedUser, setSelectedUser] = useState<string>("3");
    const selectedUser = "3";
    const router = useRouter();

    const userId = Number(Cookies.get("userId"));

    useEffect(() => {
        if (!Cookies.get("jwt")) {
            router.push("/login");
            return;
        }

        fetchChatMessages().then((msgs) => setMessages(msgs));

        socket.emit("join", userId); // Join room for targeted messaging

        const handleMessage = (msg: { id: number; text: string; sender: number; receiver: number; timestamp: number }) => {
            setMessages((prev) => [...prev, msg]);
        };

        socket.on("message", handleMessage);

        return () => {
            socket.off("message", handleMessage);
        };
    }, [userId]);

    const sendMessage = () => {
        if (input.trim()) {
            const newMessage = {
                text: input,
                senderId: userId,
                receiverId: selectedUser,
            };

            // Add the sent message locally (optimistic update)
            setMessages((prev) => [
                ...prev,
                { id: Date.now(), text: input, sender: userId, receiver: Number(selectedUser), timestamp: Date.now() },
            ]);

            socket.emit("message", newMessage);
            setInput("");
        }
    };

    return (
        <div className="flex max-w-full flex-row">
            <Sidebar />
            <ChatBox messages={messages} sendMessage={sendMessage} input={input} setInput={setInput} userId={userId} />
        </div>
    );
}
