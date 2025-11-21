
import React, { useState } from 'react';
import { MOCK_USERS, MOCK_ORDERS } from '../constants';
import { ChevronDown, Search, User as UserIcon, Phone, MapPin, Package } from 'lucide-react';

type AdminTab = 'Users' | 'Orders';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>('Users');

  return (
    <div className="px-4 py-6 pb-24 bg-white min-h-screen text-black">
      {/* Tabs */}
      <div className="flex justify-center mb-6 border-b border-gray-200">
        <button 
            onClick={() => setActiveTab('Users')}
            className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'Users' ? 'border-black text-black' : 'border-transparent text-black opacity-60'}`}
        >
            用户管理
        </button>
        <button 
             onClick={() => setActiveTab('Orders')}
             className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'Orders' ? 'border-black text-black' : 'border-transparent text-black opacity-60'}`}
        >
            订单管理
        </button>
      </div>

      {activeTab === 'Users' && <UserManagement />}
      {activeTab === 'Orders' && <OrderManagement />}

    </div>
  );
};

const UserManagement: React.FC = () => {
    return (
        <div>
            {/* Filter Bar Scrollable */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 mb-2">
                <span className="font-bold text-black flex items-center text-xs whitespace-nowrap pt-2">筛选:</span>
                {['用户', '手机号', '地址', '接单数量', '发布数量'].map((filter) => (
                    <div key={filter} className="relative flex-shrink-0">
                        <button className="appearance-none bg-gray-100 border-none rounded-lg px-3 py-2 pr-7 text-xs text-black font-medium flex items-center">
                            {filter}
                        </button>
                        <ChevronDown className="absolute right-2 top-2.5 text-black pointer-events-none" size={12} />
                    </div>
                ))}
            </div>

            {/* Vertical Card Layout (Mobile Form) */}
            <div className="space-y-4">
                {/* Header Row for reference, visible on larger screens only if needed, but mostly cards for mobile */}
                <div className="hidden md:grid grid-cols-5 gap-4 text-xs font-bold text-black border-b border-gray-200 pb-2 mb-2">
                    <div>用户</div>
                    <div>手机号</div>
                    <div>地址</div>
                    <div>接单数</div>
                    <div>发布数</div>
                </div>

                {[...MOCK_USERS, ...MOCK_USERS].map((user, idx) => (
                    <div key={`${user.id}-${idx}`} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                            <div className="flex items-center gap-2">
                                <UserIcon size={16} className="text-black" />
                                <span className="font-bold text-black text-sm">{user.username}</span>
                            </div>
                            <span className="text-xs text-black font-mono bg-gray-100 px-2 py-1 rounded border border-gray-200">{user.ordersTaken} 接单</span>
                        </div>
                        <div className="grid grid-cols-2 gap-y-2 text-xs text-black">
                            <div className="flex items-center gap-2">
                                <Phone size={12} className="text-black" />
                                <span className="text-black font-medium">{user.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={12} className="text-black" />
                                <span className="text-black font-medium">{user.address}</span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 mt-1">
                                <span className="text-black font-bold">发布订单数:</span>
                                <span className="font-black text-black">{user.ordersPosted}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const OrderManagement: React.FC = () => {
    return (
        <div>
             {/* Filter Bar */}
             <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 mb-2">
                <span className="font-bold text-black flex items-center text-xs whitespace-nowrap pt-2">筛选:</span>
                {['订单号', '发布者', '接单者'].map((filter) => (
                    <div key={filter} className="relative flex-shrink-0">
                        <button className="appearance-none bg-gray-100 border-none rounded-lg px-3 py-2 pr-7 text-xs text-black font-medium flex items-center">
                            {filter}
                        </button>
                        <ChevronDown className="absolute right-2 top-2.5 text-black pointer-events-none" size={12} />
                    </div>
                ))}
            </div>

            {/* Vertical Card Layout */}
             <div className="space-y-3">
                {MOCK_ORDERS.map((order, idx) => (
                    <div key={`${order.id}-${idx}`} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                             <div className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-0" />
                                <span className="font-bold text-black text-sm">订单号: xxxxxx</span>
                             </div>
                             <span className="text-xs font-mono text-black font-bold">12:05</span>
                        </div>
                        
                        <div className="space-y-2 text-xs">
                            <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                                <span className="text-black font-bold">发布者</span>
                                <div className="flex items-center gap-1">
                                    <UserIcon size={10} className="text-black" />
                                    <span className="text-black">{order.publisher}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                                <span className="text-black font-bold">接单者</span>
                                <div className="flex items-center gap-1">
                                    <UserIcon size={10} className="text-black" />
                                    <span className="text-black">{order.accepter || 'xnys2823'}</span>
                                </div>
                            </div>
                            
                            <div className="flex justify-between pt-2 mt-2 border-t border-gray-200">
                                <span className="text-black font-bold">完成时间</span>
                                <span className="text-black font-mono">12:10</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
