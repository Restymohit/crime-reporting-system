import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  X, 
  LayoutDashboard, 
  FileText, 
  Users, 
  Shield, 
  FileInput, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 border-r border-gray-700 
        transform transition duration-300 ease-in-out md:translate-x-0 md:static md:z-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
            <div className="flex items-center">
              <div className="text-xl font-bold text-blue-500">CrimeWatch</div>
            </div>
            <button 
              onClick={closeSidebar}
              className="text-gray-400 hover:text-white md:hidden"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <NavItem to="/" icon={<LayoutDashboard />} label="Dashboard" />
            <NavItem to="/crime-reports" icon={<FileText />} label="Crime Reports" />
            <NavItem to="/criminals" icon={<Users />} label="Criminals" />
            <NavItem to="/officers" icon={<Shield />} label="Officers" />
            <NavItem to="/report-crime" icon={<FileInput />} label="Report Crime" />
          </div>

          <div className="p-4 border-t border-gray-700">
            <NavItem to="/settings" icon={<Settings />} label="Settings" />
            <button 
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-gray-400 rounded-md hover:bg-gray-800 hover:text-white"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center px-4 py-2 mt-1 text-sm rounded-md
        ${isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
        }
      `}
      end={to === '/'}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;