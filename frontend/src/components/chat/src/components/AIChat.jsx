import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { server } from "/src/main.jsx";
import "./AIChat.css";

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(`${server}/api/ai/chat`, {
        message: input
      });

      setMessages(prev => [...prev, { sender: "ai", text: res.data.reply }]);
    } catch {
      setMessages(prev => [...prev, { sender: "ai", text: "AI error 😢" }]);
    }

    setLoading(false);
  };

  return (
    <div className="ai-page">
      <h1 className="ai-title">🎓 AI Tutor</h1>

      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`bubble ${msg.sender}`}>
            <pre>{msg.text}</pre>
          </div>
        ))}

        {loading && <div className="bubble ai">Typing...</div>}
        <div ref={chatEndRef}></div>
      </div>

      <div className="input-bar">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask your doubt..."
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AIChat;