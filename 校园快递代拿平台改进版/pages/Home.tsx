
import React from 'react';
import { MOCK_ORDERS } from '../constants';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, MapPin, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-20">
      {/* Hero / Ad Section */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 py-10 px-6 text-white relative overflow-hidden mb-6 rounded-b-[2rem] shadow-lg mx-[-1px]">
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-3 backdrop-blur-sm">广告 AD</span>
          <h1 className="text-3xl font-bold mb-2">校园极速达</h1>
          <p className="text-blue-100 mb-6 text-sm opacity-90">最快30分钟送达，安全可靠的代拿服务。</p>
          <div className="flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full opacity-100"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-40"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-40"></span>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-20px] left-[-10px] w-40 h-40 bg-blue-300 opacity-20 rounded-full blur-2xl"></div>
      </div>

      {/* Latest Orders Section */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-l-4 border-blue-500 pl-3">最新订单</h2>
            <Link to="/order-center" className="text-xs text-gray-500 flex items-center">
                查看更多 <ChevronRight size={14} />
            </Link>
        </div>
        
        <div className="space-y-3">
          {MOCK_ORDERS.slice(0, 5).map((order) => (
            <div 
              key={order.id} 
              onClick={() => navigate(`/order/${order.id}`)}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 active:scale-[0.99] transition-transform cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <img src={order.avatarUrl} alt="User" className="w-10 h-10 rounded-full object-cover flex-shrink-0 bg-gray-100" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800 text-sm truncate pr-2">{order.title}</h3>
                    <span className="flex-shrink-0 bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md font-bold">¥ {order.price}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-1">{order.description}</p>
                  
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{order.dormitory}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{order.publishTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
