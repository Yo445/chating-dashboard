import { ClipboardList, ListMinus, X } from "lucide-react";

// #region component
interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header = ({
  isSidebarOpen,
  toggleSidebar,

}: HeaderProps): JSX.Element => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 border-b px-4 py-2 flex items-center justify-between shadow-sm">
      <button
        onClick={toggleSidebar}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        {isSidebarOpen ? <X size={24} /> : <ListMinus />}
      </button>
      <div className="flex items-center space-x-4">
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ClipboardList />
        </button>

      </div>
    </div>
  );
};

export default Header;