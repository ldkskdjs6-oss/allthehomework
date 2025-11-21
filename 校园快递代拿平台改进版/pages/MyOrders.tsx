
import React, { useState } from 'react';
import { MOCK_ORDERS } from '../constants';
import { OrderStatus } from '../types';
import { Image as ImageIcon, Package, Truck, CheckCircle, Star } from 'lucide-react';

type OrderType = 'posted' | 'taken';

const MyOrders: React.FC = () => {
  // Requirement 9: Categorize into Posted and Taken
  const [orderType, setOrderType] = useState<OrderType>('posted');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const getTabs = () => {
      if (orderType === 'posted') {
          return [
              { label: '全部', value: 'all' },
              { label: '待接单', value: OrderStatus.Pending },
              { label: '派送中', value: OrderStatus.Delivering },
              { label: '已送达', value: OrderStatus.Delivered },
              { label: '待评价', value: 'pending_review' } // New tab
          ];
      } else {
          return [
              { label: '全部', value: 'all' },
              { label: '派送中', value: OrderStatus.Delivering },
              { label: '已送达', value: OrderStatus.Delivered }
          ];
      }
  }

  // In a real app, you would filter by current user ID. 
  // For mock, let's assume current user is 'xnys2823'
  const CURRENT_USER = 'xnys2823';

  const filteredOrders = MOCK_ORDERS.filter(o => {
      // Filter by Type (Posted vs Taken)
      const isPosted = o.publisher === CURRENT_USER;
      // We assume 'taken' means accepter is current user
      const isTaken = o.accepter === CURRENT_USER; 

      if (orderType === 'posted' && !isPosted) return false;
      if (orderType === 'taken' && !isTaken) return false;

      // Filter by Status
      if (statusFilter === 'pending_review') {
          // "Pending Review" usually means Delivered BUT NOT Reviewed yet
          if (o.status !== OrderStatus.Delivered || o.isReviewed) return false;
      } else if (statusFilter !== 'all' && o.status !== statusFilter) {
          return false;
      }

      return true;
  });

  const getStatusText = (status: string, isReviewed?: boolean) => {
      if (status === OrderStatus.Delivered && isReviewed === false) return '待评价';
      switch(status) {
          case 'pending': return '待接单';
          case 'delivering': return '派送中';
          case 'delivered': return '已送达';
          case 'cancelled': return '已取消';
          default: return status;
      }
  }

  return (
    <div className="px-4 py-6 pb-24">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-900">我的订单</h1>
      </div>
      
      {/* Top Level Toggle: My Posted vs My Taken */}
      <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
          <button 
            onClick={() => { setOrderType('posted'); setStatusFilter('all'); }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${orderType === 'posted' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
          >
              我发布的
          </button>
          <button 
            onClick={() => { setOrderType('taken'); setStatusFilter('all'); }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${orderType === 'taken' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
          >
              我接取的
          </button>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
           {getTabs().map(tab => (
               <button 
                key={tab.label}
                onClick={() => setStatusFilter(tab.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap border ${statusFilter === tab.value ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200'}`}
               >
                   {tab.label}
               </button>
           ))}
      </div>

      {/* Order List */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
             <div className="text-center py-10 text-gray-400 text-xs">暂无相关订单</div>
        ) : (
            filteredOrders.map(order => (
                <div key={order.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gray-50 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-400">
                            <ImageIcon size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-sm font-bold text-gray-800 truncate">{order.title}</h3>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium 
                                    ${order.status === 'pending' ? 'bg-yellow-50 text-yellow-700' : 
                                    order.status === 'delivering' ? 'bg-blue-50 text-blue-700' : 
                                    (order.status === 'delivered' && order.isReviewed === false) ? 'bg-orange-50 text-orange-700' :
                                    'bg-green-50 text-green-700'}`}>
                                    {getStatusText(order.status, order.isReviewed)}
                                </span>
                            </div>
                            <p className="text-gray-400 text-xs line-clamp-1 mb-1">{order.id} - {order.description}</p>
                            <p className="text-gray-400 text-[10px]">{order.publishTime}</p>
                            
                            <div className="flex justify-end mt-2 gap-2">
                                {orderType === 'posted' && order.status === 'pending' && (
                                    <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 text-xs">
                                        取消订单
                                    </button>
                                )}
                                {orderType === 'posted' && order.status === OrderStatus.Delivered && order.isReviewed === false && (
                                    <button className="px-3 py-1.5 bg-orange-50 text-orange-600 border border-orange-100 rounded-lg hover:bg-orange-100 text-xs font-bold flex items-center gap-1">
                                        <Star size={12} />
                                        去评价
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;