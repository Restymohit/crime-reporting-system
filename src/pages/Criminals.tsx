import React, { useState } from 'react';
import { Search, Filter, UserPlus, Eye } from 'lucide-react';
import CriminalDetails from '../components/CriminalDetails';

// Mock data for criminals
const criminals = [
  {
    id: 1,
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    crimeType: 'Theft, Burglary',
    status: 'In Custody',
    arrestDate: '2025-01-15',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    gender: 'Female',
    crimeType: 'Fraud',
    status: 'At Large',
    arrestDate: '',
    imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    age: 45,
    gender: 'Male',
    crimeType: 'Assault',
    status: 'Released',
    arrestDate: '2024-11-03',
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 4,
    name: 'Maria Garcia',
    age: 36,
    gender: 'Female',
    crimeType: 'Drug Trafficking',
    status: 'In Custody',
    arrestDate: '2025-02-28',
    imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 5,
    name: 'David Wilson',
    age: 29,
    gender: 'Male',
    crimeType: 'Robbery',
    status: 'At Large',
    arrestDate: '',
    imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 6,
    name: 'Sarah Brown',
    age: 31,
    gender: 'Female',
    crimeType: 'Embezzlement',
    status: 'In Custody',
    arrestDate: '2025-03-10',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  }
];

// Status badge component
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  let colorClass = '';
  
  switch (status) {
    case 'In Custody':
      colorClass = 'bg-red-500/20 text-red-400';
      break;
    case 'At Large':
      colorClass = 'bg-yellow-500/20 text-yellow-400';
      break;
    case 'Released':
      colorClass = 'bg-green-500/20 text-green-400';
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

const Criminals: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [selectedCriminal, setSelectedCriminal] = useState<typeof criminals[0] | null>(null);
  
  const handleViewDetails = (criminal: typeof criminals[0]) => {
    setSelectedCriminal(criminal);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-white">Criminals Database</h1>
        
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
          <UserPlus className="h-4 w-4 mr-2" />
          Add New Record
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
                placeholder="Search by name, ID, crime type..."
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
              <option value="custody">In Custody</option>
              <option value="large">At Large</option>
              <option value="released">Released</option>
            </select>
            
            <div className="border border-gray-700 rounded-md overflow-hidden flex">
              <button 
                className={`px-3 py-2 ${viewType === 'grid' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setViewType('grid')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                className={`px-3 py-2 ${viewType === 'list' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => setViewType('list')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {viewType === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {criminals.map((criminal) => (
              <div 
                key={criminal.id}
                className="bg-gray-800 rounded-lg overflow-hidden transition transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-700">
                  <img 
                    src={criminal.imageUrl} 
                    alt={criminal.name}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-white">{criminal.name}</h3>
                    <StatusBadge status={criminal.status} />
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Age: {criminal.age} | {criminal.gender}</p>
                  <p className="text-gray-400 text-sm mt-1">Crime: {criminal.crimeType}</p>
                  {criminal.arrestDate && (
                    <p className="text-gray-400 text-sm mt-1">Arrest Date: {criminal.arrestDate}</p>
                  )}
                  <div className="mt-4 flex justify-end">
                    <button 
                      className="inline-flex items-center text-blue-500 hover:text-blue-400"
                      onClick={() => handleViewDetails(criminal)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Age/Gender</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Crime Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Arrest Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {criminals.map((criminal) => (
                  <tr 
                    key={criminal.id}
                    className="hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img 
                            src={criminal.imageUrl} 
                            alt={criminal.name} 
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{criminal.name}</div>
                          <div className="text-xs text-gray-400">ID: {criminal.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{criminal.age} / {criminal.gender}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{criminal.crimeType}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <StatusBadge status={criminal.status} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{criminal.arrestDate || '-'}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                      <button 
                        className="text-blue-500 hover:text-blue-400 flex items-center"
                        onClick={() => handleViewDetails(criminal)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">24</span> results
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

      {selectedCriminal && (
        <CriminalDetails
          criminal={selectedCriminal}
          open={!!selectedCriminal}
          onClose={() => setSelectedCriminal(null)}
        />
      )}
    </div>
  );
};

export default Criminals;