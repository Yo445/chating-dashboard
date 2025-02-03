import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

const ChatArea = () => {
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, sender: 'them', text: 'Hey, how are you?', time: '10:00 AM' },
    { id: 2, sender: 'me', text: "I'm doing great! How about you?", time: '10:01 AM' },
    { id: 3, sender: 'them', text: 'Pretty good! Just working on the new project.', time: '10:02 AM' },
    { id: 4, sender: 'me', text: 'That sounds interesting! Need any help?', time: '10:03 AM' },
    { id: 5, sender: 'them', text: 'Actually, yes! Could you review my code when you have time?', time: '10:04 AM' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col  h-full bg-gray-200 rounded-xl">
      <div className="p-4 bg-white rounded-xl border-b shadow-sm">
        <div className="flex items-center gap-3">
        <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Tanned"
            alt="Alec Thompson"
            className="w-12 h-12 rounded-full ring-2 ring-white shadow-md"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">John Doe</h2>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] lg:max-w-[60%] rounded-lg p-3 ${
                msg.sender === 'me'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 shadow-sm'
              }`}
            >
              <p className="break-words">{msg.text}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border-t rounded-xl p-[7px]">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Smile className="w-5 h-5" />
          </button>
          <button
            type="submit"
            disabled={!message.trim()}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;