"use client";
import React, { useState } from "react";
import { useChat } from "ai/react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Chatbot: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleChat}
        className={cn(
          "bg-blue-500 text-white rounded-full p-4 shadow-lg focus:outline-none",
          { hidden: isOpen }
        )}
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="w-80 h-[500px] bg-white rounded-lg shadow-lg flex flex-col mt-4">
          <div className="p-4 bg-blue-500 text-white rounded-t-lg flex w-full justify-between">
            <p>You Travel Assistant</p>
            <button onClick={toggleChat} className="focus:outline-none">
              <X />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.length > 0 &&
              messages.map((message, index) => (
                <div key={index} className="my-2 p-2 bg-gray-100 rounded">
                  {message.content}
                </div>
              ))}
          </div>
          <form onSubmit={handleSubmit} className="flex p-2 border-t">
            <textarea
              name=""
              value={input}
              onChange={handleInputChange}
              // make the input expand to fill the remaining space
              className="flex-1 p-2 border rounded-l h-10 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
