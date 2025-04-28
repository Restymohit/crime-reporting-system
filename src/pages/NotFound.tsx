import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-red-600/20 mb-6">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        
        <p className="text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
        >
          <Home className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;