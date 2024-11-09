import { User, Chat, Message } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  status: 'online'
};

export const users: User[] = [
  currentUser,
  {
    id: '2',
    name: 'Alice Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    status: 'online'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop',
    status: 'away',
    lastSeen: '2024-03-10T15:30:00Z'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    status: 'offline',
    lastSeen: '2024-03-10T10:15:00Z'
  }
];

export const chats: Chat[] = [
  {
    id: '1',
    type: 'direct',
    participants: [users[0], users[1]],
    unreadCount: 2,
    lastMessage: {
      id: '1',
      content: 'Hey, how are you doing?',
      senderId: '2',
      timestamp: '2024-03-10T16:45:00Z',
      read: false
    }
  },
  {
    id: '2',
    type: 'group',
    name: 'Project Team',
    participants: users,
    unreadCount: 5,
    lastMessage: {
      id: '2',
      content: 'Meeting at 3 PM tomorrow',
      senderId: '3',
      timestamp: '2024-03-10T14:30:00Z',
      read: false
    }
  }
];

export const messages: Record<string, Message[]> = {
  '1': [
    {
      id: '1',
      content: 'Hey, how are you doing?',
      senderId: '2',
      timestamp: '2024-03-10T16:45:00Z',
      read: false
    },
    {
      id: '2',
      content: 'I\'m good, thanks! How about you?',
      senderId: '1',
      timestamp: '2024-03-10T16:46:00Z',
      read: true
    }
  ]
};