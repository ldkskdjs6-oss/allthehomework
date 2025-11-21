
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_ORDERS } from '../constants';
import { ArrowLeft, MapPin, Clock, Package, Phone, User } from 'lucide-react';

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const order = MOCK_ORDERS.find(o => o.id === id);

  if (!order) {
    return <div className="p-6 text-center">订单未找到</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center shadow-sm sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-1 text-gray-600 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <h1 className="ml-3 text-lg font-bold text-gray-900">订单详情</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Order Status Card */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex justify-between items-start">
             <div>
                 <p className="text-blue-100 text-sm mb-1">订单金额</p>
                 <p className="text-3xl font-bold">¥ {order.price}</p>
             </div>
             <div className="bg-white/20 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                 {order.status === 'pending' && '待接单'}
                 {order.status === 'delivering' && '派送中'}
                 {order.status === 'delivered' && '已送达'}
             </div>
          </div>
          <p className="mt-4 text-sm text-blue-100">订单号: {order.id}</p>
        </div>

        {/* Order Info List */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-6">
            {/* Recipient */}
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <User size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1">收件人</p>
                    <p className="font-bold text-gray-900">{order.recipientName}</p>
                </div>
            </div>

             {/* Location */}
             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                    <MapPin size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1">宿舍楼号 - 房号</p>
                    <p className="font-bold text-gray-900">{order.dormitory}</p>
                </div>
            </div>

            {/* Package Info */}
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <Package size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1">快递信息</p>
                    <p className="font-bold text-gray-900">{order.packageCount} 个包裹 ({order.expressType})</p>
                    <p className="text-xs text-gray-400 mt-1">取件码: {order.pickupCode || '******'}</p>
                </div>
            </div>

             {/* Contact */}
             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 flex-shrink-0">
                    <Phone size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1">联系方式</p>
                    <p className="font-bold text-gray-900">{order.contactPhone || '***********'}</p>
                </div>
            </div>

             {/* Time */}
             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 flex-shrink-0">
                    <Clock size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1">截止时间 / 备注</p>
                    <p className="font-bold text-gray-900">{order.deadline || '尽快'}</p>
                    <p className="text-xs text-gray-400 mt-1">{order.description}</p>
                </div>
            </div>
        </div>

        {/* Action Button */}
        {order.status === 'pending' && (
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-black transition-colors">
                立即接单
            </button>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
