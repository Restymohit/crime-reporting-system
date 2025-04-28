import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  increasing: boolean;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  increasing, 
  icon,
  color
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'from-blue-500/20 to-transparent';
      case 'green': return 'from-green-500/20 to-transparent';
      case 'yellow': return 'from-yellow-500/20 to-transparent';
      case 'red': return 'from-red-500/20 to-transparent';
      case 'purple': return 'from-purple-500/20 to-transparent';
      default: return 'from-blue-500/20 to-transparent';
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${getColorClass()} opacity-80`}></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
          </div>
          <div className="p-2 rounded-md bg-gray-800 bg-opacity-50">
            {icon}
          </div>
        </div>
        
        {change && (
          <div className="flex items-center mt-4">
            {increasing ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm ${increasing ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;