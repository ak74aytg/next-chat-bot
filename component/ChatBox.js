import React, { useEffect } from "react";
import MessageBubble from "./MessageBubble";
import Topbar from "./Topbar";

function ChatBox({ messages, sendMessage, input, setInput, userId }) {
  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="w-full bg-white text-black mx-auto p-4 font-sans">
      {/* <h2 className="text-center text-2xl font-semibold mb-4">Chat App</h2> */}
        <Topbar />

      {/* Chat Messages */}
      <div
        id="chat-container"
        style={{ height: "calc(100vh - 9rem)", overflowY: "auto" }}
        className="border border-gray-300 p-4 flex flex-col rounded-lg bg-gray-50"
      >
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            text={msg.text}
            isOwnMessage={msg.sender === userId || msg.isOwnMessage}
          />
        ))}
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex mt-4 space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatBox;
