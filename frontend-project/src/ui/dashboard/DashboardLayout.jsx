import React, { useState } from 'react';
import SideBar from './SideBar';
import Layout from './LayOut'; // Note: matches your file casing 'LayOut.jsx'

// Import all your dashboard views
import Dashboard from './Dashboard'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const currentPath = location.pathname.split('/').pop() || 'dashboard';
  const activeView = currentPath === 'dashboard' ? 'dashboard' : currentPath;

   const handleViewChange = (viewId) => {
    // 4. NAVIGATE to the new URL path
    const targetPath = viewId === 'dashboard' ? '/dashboard' : `/dashboard/${viewId}`;
    navigate(targetPath);
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    logout(); // 2. Redirect to landing on logout
  };


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <div className="relative flex h-screen min-h-screen bg-white overflow-hidden">
     <div className="pointer-events-none absolute inset-0 bg-primary/[0.02]" aria-hidden />
      
      {/* A. LEFT SIDEBAR (Fixed Width) */}
      <aside className={`
      fixed lg:static inset-y-0 left-0 z-50 w-72 h-full min-h-screen
      bg-card border-r border-border
      transform transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? 'translate-x-0 shadow-xl lg:shadow-none' : '-translate-x-full'} 
      lg:translate-x-0 flex-shrink-0
    `}>
      <SideBar 
        activeView={activeView} 
        onViewChange={handleViewChange} 
        onLogout={handleLogout}
        onClose={() => setIsSidebarOpen(false)}
      />
    </aside>

    {/* 3. Mobile Backdrop Overlay */}
    {isSidebarOpen && (
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        onClick={() => setIsSidebarOpen(false)}
      />
    )}

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Layout onOpenSidebar={() => setIsSidebarOpen(true)}>
          {/* 3. Render sub-pages based on the URL path */}
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
            <Route path="page5" element={<Page5 />} />
          </Routes>
        </Layout>
      </div>

    </div>
  );
};

export default DashboardLayout;
