import { useState } from "react";
import { LayoutList, CircleUserRound, X } from "lucide-react";
import ChatArea from "../components/chat/ChatArea";
import ChatList from "../components/chat/ChatList";
import ProfileSection from "../components/chat/ProfileSection";

const Chat = (): JSX.Element => {
  const [isChatListOpen, setIsChatListOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const toggleChatList = () => {
    setIsChatListOpen(!isChatListOpen);
    if (isProfileOpen) setIsProfileOpen(false); // Close profile if open
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isChatListOpen) setIsChatListOpen(false); // Close chat list if open
  };

  const closeAll = () => {
    setIsChatListOpen(false);
    setIsProfileOpen(false);
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 h-full relative">
      {/* Mobile Header with Toggle Buttons */}
      <div className="lg:hidden flex justify-between items-center bg-gray-200 p-3 rounded-md shadow-md mt-12">
        <button onClick={toggleChatList}>
          <LayoutList  size={24} />
        </button>
        <button onClick={toggleProfile}>
          <CircleUserRound size={24} />
        </button>
      </div>

      {/* Overlay for Mobile (Visible when either section is open) */}
      {(isChatListOpen || isProfileOpen) && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeAll}
        ></div>
      )}

      {/* Chat List (Visible only when "list" is active) */}
      <div
        className={`lg:block lg:col-span-1 fixed lg:static inset-y-0 left-0 w-64 z-50 transform transition-transform duration-300 ease-in-out ${
          isChatListOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <ChatList/>
        <button
          className="lg:hidden absolute top-2 right-2 p-2"
          onClick={toggleChatList}
        >
          <X size={24} />
        </button>
      </div>

      {/* Chat Area (Always Visible) */}
      <div className="lg:col-span-1 ">
        <ChatArea />
      </div>

      {/* Profile Section (Visible only when "profile" is active) */}
      <div
        className={`lg:block lg:col-span-1 fixed lg:static inset-y-0 right-0 w-64 z-50 transform transition-transform duration-300 ease-in-out ${
          isProfileOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
      >
        <ProfileSection  />
        <button
          className="lg:hidden absolute top-2 left-2 p-2"
          onClick={toggleProfile}
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chat;