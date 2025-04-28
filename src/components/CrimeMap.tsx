import React from 'react';
import { Map, Pin } from 'lucide-react';

const CrimeMap: React.FC = () => {
  // In a real application, this would be integrated with a maps API like Google Maps or Leaflet
  return (
    <div className="h-80 bg-gray-800 rounded-md flex flex-col items-center justify-center text-gray-400">
      <Map className="h-12 w-12 mb-4" />
      <p className="text-center mb-2">Crime map visualization will appear here</p>
      <p className="text-center text-sm">Integrate with Google Maps or Leaflet for a live crime map</p>
      
      <div className="flex mt-6 space-x-4">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
          <span className="text-xs">Violent Crime</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-xs">Property Crime</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
          <span className="text-xs">Other</span>
        </div>
      </div>
      
      <div className="mt-6">
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          View Full Map
        </button>
      </div>
    </div>
  );
};

export default CrimeMap;