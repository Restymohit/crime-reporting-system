import React, { useState } from 'react';
import { Search, Filter, UserPlus, Phone, Mail, MapPin } from 'lucide-react';

// Mock data for officers
const officers = [
  {
    id: 1,
    name: 'Michael Chen',
    rank: 'Detective',
    badge: '14382',
    department: 'Homicide',
    status: 'On Duty',
    phone: '(555) 123-4567',
    email: 'mchen@police.gov',
    location: 'Central Precinct',
    cases: 14,
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rank: 'Sergeant',
    badge: '08753',
    department: 'Narcotics',
    status: 'On Duty',
    phone: '(555) 987-6543',
    email: 'sjohnson@police.gov',
    location: 'East Precinct',
    cases: 8,
    imageUrl: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 3,
    name: 'James Wilson',
    rank: 'Officer',
    badge: '23491',
    department: 'Patrol',
    status: 'Off Duty',
    phone: '(555) 234-5678',
    email: 'jwilson@police.gov',
    location: 'West Precinct',
    cases: 5,
    imageUrl: 'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    rank: 'Lieutenant',
    badge: '05732',
    department: 'Special Victims',
    status: 'On Leave',
    phone: '(555) 345-6789',
    email: 'erodriguez@police.gov',
    location: 'Central Precinct',
    cases: 0,
    imageUrl: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 5,
    name: 'David Park',
    rank: 'Detective',
    badge: '17834',
    department: 'Cyber Crimes',
    status: 'On Duty',
    phone: '(555) 456-7890',
    email: 'dpark@police.gov',
    location: 'Headquarters',
    cases: 11,
    imageUrl: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 6,
    name: 'Olivia Washington',
    rank: 'Captain',
    badge: '02341',
    department: 'Administration',
    status: 'On Duty',
    phone: '(555) 567-8901',
    email: 'owashington@police.gov',
    location: 'Headquarters',
    cases: 3,
    imageUrl: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  }
];

// Status badge component
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  let colorClass = '';
  
  switch (status) {
    case 'On Duty':
      colorClass = 'bg-green-500/20 text-green-400';
      break;
    case 'Off Duty':
      colorClass = 'bg-gray-500/20 text-gray-400';
      break;
    case 'On Leave':
      colorClass = 'bg-yellow-500/20 text-yellow-400';
      break;
    default:
      colorClass = 'bg-gray-500/20 text-gray-400';
  }
  
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${colorClass}`}>
      {status}
    </span>
  );
};

const Officers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-white">Police Officers</h1>
        
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
          <UserPlus className="h-4 w-4 mr-2" />
          Add New Officer
        </button>
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
                placeholder="Search by name, badge number, department..."
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
              <option value="">All Departments</option>
              <option value="homicide">Homicide</option>
              <option value="narcotics">Narcotics</option>
              <option value="patrol">Patrol</option>
              <option value="special">Special Victims</option>
              <option value="cyber">Cyber Crimes</option>
              <option value="admin">Administration</option>
            </select>
            
            <select className="bg-gray-800 border-gray-700 text-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2">
              <option value="">All Status</option>
              <option value="duty">On Duty</option>
              <option value="off">Off Duty</option>
              <option value="leave">On Leave</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officers.map((officer) => (
            <div 
              key={officer.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center p-4 border-b border-gray-700">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img 
                    src={officer.imageUrl} 
                    alt={officer.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium">{officer.name}</h3>
                  <p className="text-sm text-gray-400">{officer.rank} · Badge #{officer.badge}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-gray-300">Department</div>
                  <div className="text-sm text-white font-medium">{officer.department}</div>
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-gray-300">Status</div>
                  <StatusBadge status={officer.status} />
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-gray-300">Active Cases</div>
                  <div className="text-sm text-white font-medium">{officer.cases}</div>
                </div>
                
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    {officer.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Mail className="h-4 w-4 mr-2" />
                    {officer.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    {officer.location}
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">42</span> officers
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

export default Officers;