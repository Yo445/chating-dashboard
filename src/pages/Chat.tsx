import React, { useState } from 'react';
import { Menu, UserCircle, X } from 'lucide-react';
import ChatList from '../components/chat/ChatList';
import ChatArea from '../components/chat/ChatArea';
import ProfileSection from '../components/chat/ProfileSection';

function Chat() {
    const [showChatList, setShowChatList] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
  
    return (
      <div className="h-screen flex flex-col ">
        {/* Mobile Header */}
        <div className="lg:hidden mt-12 flex items-center justify-between p-4  border-b shadow-sm">
          <button
            onClick={() => setShowChatList(!showChatList)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle chat list"
          >
            {showChatList ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Chat App</h1>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle profile"
          >
            {showProfile ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <UserCircle className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
  
        <div className="flex-1 flex overflow-hidden relative">
          {/* Overlay for mobile when sidebar is open */}
          <div
            className={`${
              (showChatList || showProfile) ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
            } lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-20`}
            onClick={() => {
              setShowChatList(false);
              setShowProfile(false);
            }}
          />
  
          {/* Chat List */}
          <div
            className={`${
              showChatList ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 w-80 fixed lg:static z-30 h-[calc(100%-4rem)] lg:h-full transition-transform duration-300 ease-in-out shrink-0 p-4 `}
          >
            <ChatList />
          </div>
  
          {/* Chat Area */}
          <div className="flex-1 w-full h-full lg:mx-0 p-4 rounded-xl">
            <ChatArea />
          </div>
  
          {/* Profile Section */}
          <div
            className={`${
              showProfile ? 'translate-x-0' : 'translate-x-full'
            } lg:translate-x-0 w-80 fixed lg:static right-0 z-30 h-[calc(100%-4rem)] lg:h-full transition-transform duration-300 ease-in-out shrink-0 p-4`}
          >
            <ProfileSection />
          </div>
        </div>
      </div>
    );
  }

export default Chat;