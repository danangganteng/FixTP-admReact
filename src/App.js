import React, { useEffect } from 'react'; 
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'; 
import Sidebar from './nav/sidebar';
import Login from './site/login';
import Dashboard from './site/dashboard';
import Customers from './site/customers';
import Product from './site/product';
import Report from './site/report';
import Setting from './site/setting';

function App() {
  const navigate = useNavigate(); 
  const location = useLocation(); // Untuk mengetahui rute saat ini
  const isLoggedIn = localStorage.getItem("isLoggedIn"); 

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate, isLoggedIn]);

  return (
    <div>
      {/* Tampilkan Sidebar hanya jika bukan di halaman login */}
      {isLoggedIn && location.pathname !== '/login' && <Sidebar />}
      
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/product' element={<Product />} />
        <Route path='/report' element={<Report />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
