import { useState } from "react";
import Sidebar from "../shared/Sidebar";
import Chat from "../../pages/Chat";
import Header from "../shared/Header";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="flex flex-col h-screen w-full bg-gray-100 md:flex-row">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <div className="flex-1 flex flex-col w-full h-full overflow-auto bg-[#cbd3db] p-4">
        <Chat  />
        </div>
    </div>
  );
}

export default Dashboard;








// import { useState } from "react";
// import Sidebar from "../shared/Sidebar";
// import Chat from "../../pages/Chat";
// import Header from "../shared/Header";

// function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isChatListOpen, setIsChatListOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     setIsChatListOpen(false);
//     setIsProfileOpen(false);
//   };

//   const toggleChatList = () => {
//     setIsChatListOpen(!isChatListOpen);
//     setIsSidebarOpen(false);
//     setIsProfileOpen(false);
//   };

//   const toggleProfile = () => {
//     setIsProfileOpen(!isProfileOpen);
//     setIsSidebarOpen(false);
//     setIsChatListOpen(false);
//   };

//   return (
//     <div className="flex flex-col h-screen w-full bg-gray-100 md:flex-row">
//       <Header 
//         isSidebarOpen={isSidebarOpen} 
//         toggleSidebar={toggleSidebar} 
//         toggleChatList={toggleChatList} 
//         toggleProfile={toggleProfile} 
//       />
      
//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64`}>
//         <Sidebar isSidebarOpen={isSidebarOpen} />
//       </div>
      
//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col w-full h-full overflow-auto bg-[#f1f5f9] p-4">
//         <Chat isChatListOpen={isChatListOpen} isProfileOpen={isProfileOpen} />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
