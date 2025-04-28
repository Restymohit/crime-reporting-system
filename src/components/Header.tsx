import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { User as UserType } from '../types/User';

interface HeaderProps {
  openSidebar: () => void;
  user: UserType;
}

const Header: React.FC<HeaderProps> = ({ openSidebar, user }) => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={openSidebar}
            className="text-gray-400 hover:text-white focus:outline-none md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <Link to="/" className="flex items-center ml-4 md:ml-0">
            <div className="text-xl font-bold text-blue-500">CrimeWatch</div>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center flex-1 max-w-xl ml-8">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800 rounded-md py-2 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-gray-700 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          
          <div className="relative">
            <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <span className="hidden md:inline-block">{user.name}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;