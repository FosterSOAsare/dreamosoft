import React, { useState } from "react";
import chatbotIcon from "../assets/icons/chatbot.svg";
import chatbotChatIcon from "../assets/icons/chatbotChat.svg";
import collapseIcon from "../assets/icons/collapse.svg";
import send from "../assets/icons/send.svg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi I'm bot. How can I help you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you for your message. How else can I assist you?",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <img
        onClick={toggleChat}
        className="w-20 h-20 text-white rounded-full flex items-center justify-center text-2xl focus:outline-none transition-colors"
        src={isOpen ? collapseIcon : chatbotIcon}
      />

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[40vw] h-[70vh] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-primary-1 w-full text-white p-4 h-[15%] text-center relative">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl absolute -bottom-[50%] left-1/2 transform -translate-x-1/2">
              <img src={chatbotIcon} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-10">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="flex gap-3 items-start">
                  {message.sender === "bot" && (
                    <img src={chatbotChatIcon} className="w-8 h-8 ml-2" />
                  )}
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-primary-1 text-white"
                        : "bg-primary-2 text-white"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <span className="mr-2">🤖</span>
                    )}
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={sendMessage}
            className="border-t border-gray-200 p-4 flex"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Send a message..."
              className="flex-1 rounded-lg px-4 py-2 ring-none border-primary-1 focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
            <button
              type="submit"
              className="ml-2 text-primary-1 text-xl focus:outline-none"
            >
              <img src={send} className="h-7" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
