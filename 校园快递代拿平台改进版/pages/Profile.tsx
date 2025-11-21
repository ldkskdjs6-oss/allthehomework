import React from 'react';
import { User, Wallet, ShoppingBag, Clock, CheckCircle, MessageSquare, Star } from 'lucide-react';
import { MOCK_REVIEWS } from '../constants';

const Profile: React.FC = () => {
  return (
    <div className="px-4 py-6 pb-24">
        {/* User Info Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
                    <User size={32} className="text-gray-400" />
                </div>
                <h2 className="mt-3 font-bold text-lg text-gray-900">lp09190706</h2>
                <div className="mt-1 text-xs text-gray-500">南x栋 | 133xxxxx199</div>
                
                <button className="mt-3 px-4 py-1.5 bg-gray-900 text-white rounded-full text-xs font-medium shadow-md">
                    编辑资料
                </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-white z-0"></div>
        </div>

        {/* Stats Dashboard */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-4">
            <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-1 text-blue-600">
                        <ShoppingBag size={18} />
                    </div>
                    <span className="text-xs text-gray-500 mb-0.5">全部订单</span>
                    <span className="font-bold text-gray-900 text-sm">730</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-1 text-yellow-600">
                        <Clock size={18} />
                    </div>
                    <span className="text-xs text-gray-500 mb-0.5">待完成</span>
                    <span className="font-bold text-gray-900 text-sm">10</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-1 text-green-600">
                        <CheckCircle size={18} />
                    </div>
                    <span className="text-xs text-gray-500 mb-0.5">已完成</span>
                    <span className="font-bold text-gray-900 text-sm">650</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-1 text-purple-600">
                        <Wallet size={18} />
                    </div>
                    <span className="text-xs text-gray-500 mb-0.5">待付款</span>
                    <span className="font-bold text-gray-900 text-sm">1</span>
                    </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                <span>售后进度</span>
                <MessageSquare size={16} className="text-gray-400" />
            </div>
        </div>

        {/* User Reviews Section (New Request) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-sm">用户评价</h3>
                <span className="text-xs text-gray-400">查看全部</span>
            </div>
            <div className="space-y-4">
                {MOCK_REVIEWS.map(review => (
                    <div key={review.id} className="border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-bold text-gray-800">{review.user}</span>
                            <span className="text-[10px] text-gray-400">{review.time}</span>
                        </div>
                        <div className="flex items-center mb-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={10} className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                            ))}
                        </div>
                        <p className="text-xs text-gray-600">{review.content}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Settings Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-4 space-y-4">
            <h3 className="font-bold text-gray-900 text-sm border-b pb-2 mb-2">账号设置</h3>
            
            <div className="space-y-3">
                <div>
                    <label className="text-xs font-medium text-gray-500 block mb-1">修改昵称</label>
                    <input type="text" value="lp09190706" className="w-full px-3 py-2 border rounded-lg text-gray-800 bg-gray-50 text-xs" readOnly />
                </div>

                <div>
                    <label className="text-xs font-medium text-gray-500 block mb-1">更换手机号</label>
                    <input type="text" placeholder="输入新手机号" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-xs" />
                </div>
                
                <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-xs font-medium hover:bg-black mt-2">
                    保存修改
                </button>
                
                <button className="w-full bg-red-50 text-red-500 py-2.5 rounded-lg text-xs font-medium hover:bg-red-100 mt-2">
                    退出登录
                </button>
            </div>
        </div>
    </div>
  );
};

export default Profile;