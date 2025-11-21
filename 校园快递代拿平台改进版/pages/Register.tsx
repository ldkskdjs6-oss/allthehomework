import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Package } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center px-6">
      <div className="mb-8 flex flex-col items-center">
        <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-600 mb-4">
          <Package size={32} />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">校园快递代拿平台</h1>
        <p className="text-gray-500 text-sm mt-1">注册新账号</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">手机号</label>
            <input 
              type="text" 
              placeholder="请输入您的手机号" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <input 
              type="password" 
              placeholder="请输入您的密码" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">确认密码</label>
            <input 
              type="password" 
              placeholder="请再次输入密码" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex space-x-3">
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">验证码</label>
                <input 
                type="text" 
                placeholder="123456" 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>
            <div className="flex items-end">
                <button type="button" className="h-[50px] px-4 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap text-sm font-medium">
                    获取验证码
                </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl hover:bg-blue-700 transition-colors font-bold shadow-lg shadow-blue-500/30 mt-2"
          >
            注册
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          已有账号? <Link to="/login" className="text-blue-600 font-bold hover:underline">立即登录</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;