import React, { useState } from "react";

const ChatBox = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("Hi, how can i help you..");
    }
  };

  return (
    <div>
      <div className="flex">
        <input
          className="flex-1 p-2 border rounded"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
          const [isSending, setIsSending] = useState(false);

const handleSendMessage = async () => {
  if (input.trim() && !isSending) {
    setIsSending(true);
    try {
      await sendMessage(input);
      setInput("");
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsSending(false);
    }
  }
};
<button
  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
  onClick={handleSendMessage}
  disabled={isSending}
>
  {isSending ? "Sending..." : "Send"}
</button>

      </div>
    </div>
  );
};

export default ChatBox;
