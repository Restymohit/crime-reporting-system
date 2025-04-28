import React from 'react';
import { PieChart, BarChartBig, TrendingUp, UserCheck } from 'lucide-react';
import StatCard from '../components/StatCard';
import CrimeChart from '../components/CrimeChart';
import RecentCrimes from '../components/RecentCrimes';
import CrimeMap from '../components/CrimeMap';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
            This Week
          </button>
          <button className="px-4 py-2 bg-gray-700 text-gray-200 text-sm rounded-md hover:bg-gray-600 transition">
            This Month
          </button>
          <button className="px-4 py-2 bg-gray-700 text-gray-200 text-sm rounded-md hover:bg-gray-600 transition">
            This Year
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Crimes" 
          value="1,284" 
          change="+12.5%" 
          increasing={true}
          icon={<BarChartBig className="h-8 w-8 text-blue-500" />} 
          color="blue"
        />
        <StatCard 
          title="Solved Cases" 
          value="864" 
          change="+8.2%" 
          increasing={true}
          icon={<UserCheck className="h-8 w-8 text-green-500" />} 
          color="green"
        />
        <StatCard 
          title="Pending Cases" 
          value="420" 
          change="-4.3%" 
          increasing={false}
          icon={<PieChart className="h-8 w-8 text-yellow-500" />} 
          color="yellow"
        />
        <StatCard 
          title="Monthly Trend" 
          value="+7.4%" 
          change="" 
          increasing={true}
          icon={<TrendingUp className="h-8 w-8 text-purple-500" />} 
          color="purple"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-lg font-medium text-white mb-4">Crime Statistics</h2>
          <CrimeChart />
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-lg font-medium text-white mb-4">Crime Map</h2>
          <CrimeMap />
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-white">Recent Crimes</h2>
          <button className="text-sm text-blue-500 hover:text-blue-400">
            View All
          </button>
        </div>
        <RecentCrimes />
      </div>
    </div>
  );
};

export default Dashboard;