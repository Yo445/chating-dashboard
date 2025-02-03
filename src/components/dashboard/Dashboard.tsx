import { useState } from "react";
import Sidebar from "../shared/Sidebar";
import Header from "../shared/Header";
import Chat from "../../pages/Chat";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="flex flex-col h-screen w-full bg-gray-100 md:flex-row">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <div className="flex-1 flex flex-col w-full h-full overflow-auto bg-[#cbd3db]">
        <Chat />
        </div>
    </div>
  );
}

export default Dashboard;

