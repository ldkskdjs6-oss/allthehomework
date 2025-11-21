
import React, { useState } from 'react';
import { EXPRESS_TYPES } from '../constants';

const PostOrder: React.FC = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    packageCount: 1,
    pickupCode: '',
    contact: '',
    dormitory: '',
    price: '',
    expressType: '普通快递',
    pickupLocation: '',
    deadline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Requirement 8: Pickup code validation (visual feedback handled in render mostly)
    if (name === 'pickupCode') {
       // Allow typing but we can validate on blur or submit
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Requirement 8: strict format check XX-X-XXX
    const codeRegex = /^\d{2}-\d{1}-\d{3}$/;
    if (!codeRegex.test(formData.pickupCode)) {
        alert('取件码格式错误！格式必须为 XX-X-XXX，其中X为0-9的数字');
        return;
    }

    alert('订单发布成功!');
    // In real app, redirect or clear form
  };

  return (
    <div className="px-4 py-6 pb-24">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">发布订单</h1>
        <p className="text-gray-500 text-xs mt-1">填写快递详细信息</p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipient & Contact */}
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">收件人</label>
                <input
                type="text"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                placeholder="例如: 张三"
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                required
                />
            </div>
            <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">联系方式</label>
                <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="手机号码"
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                required
                />
            </div>
          </div>

          {/* Package Count & Type */}
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">快递个数</label>
                <input
                type="number"
                name="packageCount"
                min="1"
                value={formData.packageCount}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                required
                />
            </div>
            <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">快递类型</label>
                <select
                  name="expressType"
                  value={formData.expressType}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                >
                    {EXPRESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
            </div>
          </div>
          
          {/* Pickup Code */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">取件码 (格式: XX-X-XXX)</label>
            <input
              type="text"
              name="pickupCode"
              value={formData.pickupCode}
              onChange={handleChange}
              placeholder="例如: 88-1-203"
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm font-mono tracking-wider"
              required
            />
            <p className="text-[10px] text-gray-400 mt-1">请务必按照 XX-X-XXX 格式填写，X为0-9数字</p>
          </div>

          {/* Location Info */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">宿舍楼号-房号</label>
            <input
              type="text"
              name="dormitory"
              value={formData.dormitory}
              onChange={handleChange}
              placeholder="如: 南1栋-101"
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
              required
            />
          </div>

          <div>
             <label className="block text-xs font-bold text-gray-700 mb-1">取件地点</label>
             <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="如: 东门菜鸟驿站"
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
              required
            />
          </div>

          {/* Price & Deadline */}
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">订单金额 (元)</label>
                <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="5"
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                required
                />
            </div>
            <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">最晚交付时间</label>
                <input
                type="time"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                required
                />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg text-sm"
            >
              发布订单
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostOrder;
