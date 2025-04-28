import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import RecentCrimes from '../components/RecentCrimes';

// Mock data for crime statistics
const crimeStats = [
  { name: 'Total Reports', value: '1,284' },
  { name: 'New', value: '156' },
  { name: 'Under Investigation', value: '420' },
  { name: 'Solved', value: '708' },
];

const CrimeReports: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-white">Crime Reports</h1>
        
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
          <Plus className="h-4 w-4 mr-2" />
          Add New Report
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {crimeStats.map((stat, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-400 text-sm">{stat.name}</p>
            <p className="text-2xl font-semibold text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by crime type, location, case number..."
                className="block w-full bg-gray-800 border-gray-700 rounded-md py-2 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-md hover:bg-gray-700">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            
            <select className="bg-gray-800 border-gray-700 text-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
              <option value="">All Status</option>
              <option value="new">New</option>
              <option value="investigation">Under Investigation</option>
              <option value="solved">Solved</option>
            </select>
            
            <select className="bg-gray-800 border-gray-700 text-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
              <option value="">This Month</option>
              <option value="week">This Week</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
              <option value="all">All Time</option>
            </select>
          </div>
        </div>
        
        <RecentCrimes />
        
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">1,284</span> results
          </p>
          
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700">
              Previous
            </button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrimeReports;