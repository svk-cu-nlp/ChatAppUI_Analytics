import React from 'react';
import { MessageSquare, Users, Settings, Search } from 'lucide-react';
import { chats, currentUser } from '../data/mockData';
import { Chat } from '../types';

interface ChatSidebarProps {
  onSelectChat: (chat: Chat) => void;
  selectedChat: Chat | null;
}

export default function ChatSidebar({ onSelectChat, selectedChat }: ChatSidebarProps) {
  return (
    <div className="flex flex-col h-full w-80 bg-white border-r border-gray-200">
      {/* User Profile Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h2 className="font-semibold">{currentUser.name}</h2>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm text-gray-500">Online</span>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
              selectedChat?.id === chat.id ? 'bg-gray-50' : ''
            }`}
            onClick={() => onSelectChat(chat)}
          >
            {chat.type === 'direct' ? (
              <img
                src={chat.participants[1].avatar}
                alt={chat.participants[1].name}
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users size={24} className="text-blue-500" />
              </div>
            )}
            <div className="ml-3 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">
                  {chat.type === 'direct'
                    ? chat.participants[1].name
                    : chat.name}
                </h3>
                <span className="text-xs text-gray-500">
                  {new Date(chat.lastMessage?.timestamp || '').toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 truncate max-w-[180px]">
                  {chat.lastMessage?.content}
                </p>
                {chat.unreadCount > 0 && (
                  <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-around">
          <button className="text-gray-500 hover:text-blue-500">
            <MessageSquare size={24} />
          </button>
          <button className="text-gray-500 hover:text-blue-500">
            <Users size={24} />
          </button>
          <button className="text-gray-500 hover:text-blue-500">
            <Settings size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}