import React, { useState } from 'react';
import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import { useChat } from './hooks/useChat';
import { useAuth } from './hooks/useAuth';
import { LayoutGrid, MessageSquare } from 'lucide-react';

function App() {
  const { selectedChat, selectChat, messages, sendMessage } = useChat();
  const { isAuthenticated, login } = useAuth();
  const [showDashboard, setShowDashboard] = useState(false);

  if (!isAuthenticated) {
    return <AuthForm onLogin={login} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
        <button
          onClick={() => setShowDashboard(false)}
          className={`p-3 rounded-xl mb-2 ${
            !showDashboard ? 'bg-blue-50 text-blue-500' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          <MessageSquare size={24} />
        </button>
        <button
          onClick={() => setShowDashboard(true)}
          className={`p-3 rounded-xl ${
            showDashboard ? 'bg-blue-50 text-blue-500' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          <LayoutGrid size={24} />
        </button>
      </div>
      {showDashboard ? (
        <Dashboard />
      ) : (
        <>
          <ChatSidebar onSelectChat={selectChat} selectedChat={selectedChat} />
          <ChatWindow
            chat={selectedChat}
            messages={messages[selectedChat?.id || ''] || []}
            onSendMessage={sendMessage}
          />
        </>
      )}
    </div>
  );
}

export default App;