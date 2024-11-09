import { useState } from 'react';
import { Chat, Message, User } from '../types';
import { currentUser, messages as initialMessages } from '../data/mockData';

export function useChat() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Record<string, Message[]>>(initialMessages);

  const selectChat = (chat: Chat) => {
    setSelectedChat(chat);
  };

  const sendMessage = (chatId: string, content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      senderId: currentUser.id,
      timestamp: new Date().toISOString(),
      read: false,
    };

    setMessages(prev => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage],
    }));

    // Auto-reply if message is "Hi" or "Hello"
    if (content.toLowerCase() === 'hi' || content.toLowerCase() === 'hello') {
      setTimeout(() => {
        const autoReply: Message = {
          id: Date.now().toString(),
          content: "Hi! Nice to meet you I am AI",
          senderId: selectedChat?.participants[1].id || '',
          timestamp: new Date().toISOString(),
          read: false,
        };
        setMessages(prev => ({
          ...prev,
          [chatId]: [...(prev[chatId] || []), autoReply],
        }));
      }, 1000);
    }
  };

  return {
    selectedChat,
    selectChat,
    messages,
    sendMessage,
  };
}