import React from 'react';
import { ArrowRight, AlertCircle, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for recent crimes
const recentCrimes = [
  {
    id: 1,
    type: 'Theft',
    location: '123 Main St, Downtown',
    date: '2025-03-15',
    time: '14:30',
    status: 'New',
    description: 'Smartphone stolen from victim while at the coffee shop.',
  },
  {
    id: 2,
    type: 'Assault',
    location: '456 Park Ave, Midtown',
    date: '2025-03-14',
    time: '23:45',
    status: 'Under Investigation',
    description: 'Victim was attacked while walking home from work.',
  },
  {
    id: 3,
    type: 'Burglary',
    location: '789 Oak St, Westside',
    date: '2025-03-13',
    time: '03:15',
    status: 'Under Investigation',
    description: 'Home broken into while residents were away.',
  },
  {
    id: 4,
    type: 'Fraud',
    location: 'Online',
    date: '2025-03-12',
    time: '11:20',
    status: 'Solved',
    description: 'Victim reported credit card fraud after suspicious online purchases.',
  }
];

// Status badge component
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  let colorClass = '';
  
  switch (status) {
    case 'New':
      colorClass = 'bg-blue-500/20 text-blue-400';
      break;
    case 'Under Investigation':
      colorClass = 'bg-yellow-500/20 text-yellow-400';
      break;
    case 'Solved':
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

const RecentCrimes: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date & Time</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {recentCrimes.map((crime) => (
            <tr 
              key={crime.id}
              className="hover:bg-gray-800 transition-colors"
            >
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="mr-2">
                    <AlertCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{crime.type}</div>
                    <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">{crime.description}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  {crime.location}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-300">
                  <Clock className="h-4 w-4 mr-1 text-gray-400" />
                  {crime.date}, {crime.time}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <StatusBadge status={crime.status} />
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                <Link to={`/crime-reports/${crime.id}`} className="text-blue-500 hover:text-blue-400 flex items-center">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCrimes;