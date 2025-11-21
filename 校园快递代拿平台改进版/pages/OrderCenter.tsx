
import React, { useState } from 'react';
import { MOCK_ORDERS, DORM_BUILDINGS } from '../constants';
import { Search, Filter, Box } from 'lucide-react';
import { OrderStatus } from '../types';
import { useNavigate } from 'react-router-dom';

const OrderCenter: React.FC = () => {
  const navigate = useNavigate();
  const [filterBuilding, setFilterBuilding] = useState('全部');
  const [filterCount, setFilterCount] = useState<number | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const availableOrders = MOCK_ORDERS.filter(o => 
    o.status === OrderStatus.Pending &&
    (filterBuilding === '全部' || o.dormitory.includes(filterBuilding)) &&
    (filterCount === 'all' || o.packageCount === filterCount) &&
    (o.title.includes(searchTerm) || o.description.includes(searchTerm) || o.dormitory.includes(searchTerm))
  );

  const packageCounts = [1, 2, 3, 4, 5];

  return (
    <div className="px-4 py-6 pb-24 min-h-screen">
      
      {/* Search Bar */}
      <div className="sticky top-[60px] z-40 bg-gray-50 pb-2 pt-2">
        <div className="relative shadow-sm">
            <input 
            type="text" 
            placeholder="搜索订单..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        </div>
      </div>

      {/* Building Filters */}
      <div className="flex items-center gap-2 mb-3 overflow-x-auto no-scrollbar pb-1">
        <span className="font-bold text-gray-700 flex items-center gap-1 text-xs whitespace-nowrap pr-2">
            <Filter size={14} />
            楼栋:
        </span>
        <button 
            onClick={() => setFilterBuilding('全部')}
            className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${filterBuilding === '全部' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}
        >
            全部
        </button>
        {DORM_BUILDINGS.map(building => (
          <button 
            key={building}
            onClick={() => setFilterBuilding(building)}
            className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${filterBuilding === building ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}
          >
            {building}
          </button>
        ))}
      </div>

      {/* Package Count Filters */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
        <span className="font-bold text-gray-700 flex items-center gap-1 text-xs whitespace-nowrap pr-2">
            <Box size={14} />
            数量:
        </span>
        <button 
            onClick={() => setFilterCount('all')}
            className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${filterCount === 'all' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}
        >
            不限
        </button>
        {packageCounts.map(count => (
          <button 
            key={count}
            onClick={() => setFilterCount(count)}
            className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${filterCount === count ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}
          >
            {count}个
          </button>
        ))}
      </div>

      {/* Order List */}
      <div className="space-y-3">
        {availableOrders.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-sm">暂无订单</div>
        ) : (
            availableOrders.map((order) => (
                <div 
                    key={order.id} 
                    onClick={() => navigate(`/order/${order.id}`)}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
                >
                    <div className="flex items-center gap-3 overflow-hidden">
                         <div className="w-10 h-10 bg-blue-50 rounded-lg flex-shrink-0 flex items-center justify-center text-blue-500">
                            <Box size={20} />
                        </div>
                        <div className="min-w-0">
                            {/* Requirement 5: Title as Building+Room+Count */}
                            <div className="flex items-center gap-2">
                                <p className="font-bold text-gray-800 text-sm truncate">
                                    {order.dormitory}，{order.packageCount}个小件快递
                                </p>
                            </div>
                            {/* Requirement 5: Description is Type */}
                            <p className="text-xs text-gray-500 mt-1 truncate">
                                类型: {order.expressType} | {order.description}
                            </p>
                        </div>
                    </div>
                    
                    <button className="px-4 py-2 bg-red-50 text-red-500 text-xs font-bold rounded-lg hover:bg-red-100 transition-colors whitespace-nowrap ml-2">
                        接单
                    </button>
                </div>
            ))
        )}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4 md:right-[calc(50%-14rem)]">
        <button className="w-16 h-16 bg-red-500 text-white rounded-full shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform border-4 border-gray-50 z-50">
            <span className="text-xs font-bold leading-tight">一键</span>
            <span className="text-[10px] leading-tight">接单</span>
        </button>
      </div>
    </div>
  );
};

export default OrderCenter;
