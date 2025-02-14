const MessageBubble = ({ text, isOwnMessage }) => {
  return (
    <div
      className={`p-3 my-2 rounded-lg min-w-10 bubble-width ${
        isOwnMessage
          ? "bg-blue-500 text-white self-end"
          : "bg-gray-200 text-black self-start"
      }`}
      style={{
        wordBreak: "break-word", 
        whiteSpace: "pre-wrap",
      }}
    >
      {text}
    </div>
  );
};

export default MessageBubble;
