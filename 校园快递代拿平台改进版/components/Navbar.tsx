import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Package, LogOut, Home, PlusCircle, List, User, ClipboardList } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const isActive = (path: string) => location.pathname === path ? 'text-blue-600' : 'text-gray-400 hover:text-blue-500';

  const handleLogout = () => {
      navigate('/login');
  };

  if (isAuthPage) return null;

  return (
    <>
      {/* Top Bar for branding (Mobile App Header style) */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600">
            <Package size={20} />
          </div>
          <span className="font-bold text-lg text-gray-800">校园快递代拿</span>
        </div>
        <div className="flex items-center gap-3">
           <button onClick={() => navigate('/admin')} className={`text-xs font-medium px-2 py-1 rounded border ${location.pathname === '/admin' ? 'bg-gray-800 text-white' : 'text-gray-600 border-gray-200'}`}>
             管理员
           </button>
           <button onClick={handleLogout} className="text-gray-500">
             <LogOut size={18} />
           </button>
        </div>
      </nav>

      {/* Bottom Tab Bar Navigation (Mobile Style) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 max-w-lg mx-auto">
        <div className="flex justify-around items-center h-16">
          <Link to="/" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/')}`}>
            <Home size={24} />
            <span className="text-[10px]">首页</span>
          </Link>
          <Link to="/order-center" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/order-center')}`}>
            <ClipboardList size={24} />
            <span className="text-[10px]">订单中心</span>
          </Link>
          <Link to="/post-order" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/post-order')}`}>
             <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg -mt-6 border-4 border-gray-50">
                <PlusCircle size={28} />
             </div>
             <span className="text-[10px]">发布</span>
          </Link>
          <Link to="/my-orders" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/my-orders')}`}>
            <List size={24} />
            <span className="text-[10px]">我的订单</span>
          </Link>
          <Link to="/profile" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/profile')}`}>
            <User size={24} />
            <span className="text-[10px]">个人中心</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;