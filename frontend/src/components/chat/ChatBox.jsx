import { useState } from "react";
import axios from "axios";
import { server } from "../../config";
import "./chat.css";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChatHistory((prev) => [...prev, { sender: "user", text: message }]);
    setMessage("");

    try {
      const { data } = await axios.post(`${server}/api/chat`, {
        message,
      });

      setChatHistory((prev) => [...prev, { sender: "ai", text: data.reply }]);
    } catch (error) {
      console.log(error);
      setChatHistory((prev) => [
        ...prev,
        { sender: "ai", text: "AI error 😢" },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chat-container">
      <h3>AI Chatbot</h3>

      <div className="chat-box">
        {chatHistory.map((chat, idx) => (
          <div
            key={idx}
            className={`chat-message ${chat.sender === "user" ? "user" : "ai"}`}
          >
            {chat.text}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;