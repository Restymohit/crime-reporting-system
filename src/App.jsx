import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import Reports from './pages/Reports';
// import ReportDetails from './pages/ReportDetails';
import AddReport from './pages/AddReport';
// import Profile from './pages/Profile';
// import NotFound from './pages/NotFound';
import Navbar from './components/Navbar'; 
import Sidebar from "./components/SideBar";


function App() {
  return (
    <div>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/reports" element={<Reports />} /> */}
      {/* <Route path="/reports/:id" element={<ReportDetails />} /> */}
      <Route path="/add-report" element={<AddReport />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </div>
  );
}

export default App;
