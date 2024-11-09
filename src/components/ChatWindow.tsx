import React, { useState } from 'react';
import { Phone, Video, MoreVertical, Send, Paperclip, Smile } from 'lucide-react';
import { Chat, Message } from '../types';
import ChatMessage from './ChatMessage';
import EmojiPicker from './EmojiPicker';

interface ChatWindowProps {
  chat: Chat | null;
  messages: Message[];
  onSendMessage: (chatId: string, content: string) => void;
}

export default function ChatWindow({ chat, messages, onSendMessage }: ChatWindowProps) {
  const [messageInput, setMessageInput] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);

  const handleSend = () => {
    if (messageInput.trim() && chat) {
      onSendMessage(chat.id, messageInput.trim());
      setMessageInput('');
      setShowEmojis(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessageInput(prev => prev + emoji);
    setShowEmojis(false);
  };

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 h-full">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-4">
          {chat.type === 'direct' ? (
            <img
              src={chat.participants[1].avatar}
              alt={chat.participants[1].name}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Video size={20} className="text-blue-500" />
            </div>
          )}
          <div>
            <h2 className="font-semibold">
              {chat.type === 'direct' ? chat.participants[1].name : chat.name}
            </h2>
            <span className="text-sm text-green-500">Online</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Phone size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Video size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-4 relative">
          <button className="text-gray-500 hover:text-gray-700">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setShowEmojis(!showEmojis)}
          >
            <Smile size={20} />
          </button>
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            <Send size={20} />
          </button>
          <EmojiPicker 
            isOpen={showEmojis} 
            onEmojiSelect={handleEmojiSelect}
          />
        </div>
      </div>
    </div>
  );
}