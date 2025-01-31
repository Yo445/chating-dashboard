import { Codesandbox, Home, FileText, MessageCircle, Mail, Trello } from "lucide-react";

const menuItems = [
  { name: 'Dashboard', icon: <Home size={20} /> },
  { name: 'Changelog', icon: <FileText size={20} />, version: '1.0.0' },
  { name: 'Chat', icon: <MessageCircle size={20} />, active: true },
  { name: 'Email', icon: <Mail size={20} /> },
  { name: 'Kanban', icon: <Trello size={20} /> },
];

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: SidebarProps): JSX.Element => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed lg:static lg:block bg-white shadow-md h-screen overflow-hidden z-40 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="w-64 h-full flex flex-col">
          <div className="p-6 mt-14 lg:mt-0 bg-gray-100">
            <div className="flex text-center">
              <Codesandbox size={30} className="text-black mr-1 mt-1" /> {/* Increased icon size */}
              <h1 className="text-3xl font-bold text-black mb-4">Chato</h1>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={`flex items-center p-3 rounded-xl transition-all duration-200 cursor-pointer
                  ${item.active
                  ? 'bg-blue-700/30 text-black'
                  : 'text-black hover:bg-blue-700/20 hover:text-white'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                {item.version && (
                  <span className="ml-auto bg-blue-500/30 text-white text-xs px-2 py-1 rounded-full">
                    {item.version}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
