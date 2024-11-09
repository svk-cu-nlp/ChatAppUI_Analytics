import React from 'react';
import { Message, User } from '../types';
import { currentUser } from '../data/mockData';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isOwn = message.senderId === currentUser.id;

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] ${
          isOwn
            ? 'bg-blue-500 text-white rounded-l-lg rounded-br-lg'
            : 'bg-white text-gray-800 rounded-r-lg rounded-bl-lg'
        } p-4 shadow-sm`}
      >
        <p>{message.content}</p>
        <span
          className={`text-xs ${
            isOwn ? 'text-blue-100' : 'text-gray-500'
          } block mt-1`}
        >
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}