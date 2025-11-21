
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Package } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Requirement 1: Just login functionality mockup
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center px-6">
      <div className="mb-8 flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-600 mb-6">
          <Package size={48} />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">校园快递代拿平台</h1>
        <p className="text-gray-500 text-sm mt-2">欢迎回来，请登录</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Requirement 1: Phone Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">手机号</label>
            <input 
              type="text" 
              placeholder="请输入您的手机号" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
          
          {/* Requirement 1: Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <input 
              type="password" 
              placeholder="请输入您的密码" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
              <span className="ml-2 text-gray-600">记住密码</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-700">忘记密码?</a>
          </div>

          {/* Requirement 1: Login Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl hover:bg-blue-700 transition-colors font-bold shadow-lg shadow-blue-500/30"
          >
            登录
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          还没有账号? <Link to="/register" className="text-blue-600 font-bold hover:underline">立即注册</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
