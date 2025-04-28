import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import CrimeReports from './pages/CrimeReports';
import Criminals from './pages/Criminals';
import Officers from './pages/Officers';
import ReportCrime from './pages/ReportCrime';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="crime-reports" element={<CrimeReports />} />
            <Route path="criminals" element={<Criminals />} />
            <Route path="officers" element={<Officers />} />
            <Route path="report-crime" element={<ReportCrime />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;