
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostOrder from './pages/PostOrder';
import OrderCenter from './pages/OrderCenter';
import MyOrders from './pages/MyOrders';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import OrderDetail from './pages/OrderDetail';

const AppContent: React.FC = () => {
    return (
        // Added max-w-lg and min-h-screen to simulate mobile app container on desktop
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 max-w-lg mx-auto shadow-2xl border-x border-gray-200">
            <Navbar />
            <main className="pb-16"> {/* Added padding bottom for potential bottom nav spacing or just breathing room */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/post-order" element={<PostOrder />} />
                    <Route path="/order-center" element={<OrderCenter />} />
                    <Route path="/my-orders" element={<MyOrders />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/order/:id" element={<OrderDetail />} />
                </Routes>
            </main>
        </div>
    );
}

const App: React.FC = () => {
  return (
    <Router>
        <AppContent />
    </Router>
  );
};

export default App;
