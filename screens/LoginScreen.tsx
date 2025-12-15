import React, { useState } from 'react';
import { Icon } from '../components/Icon';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [authMode, setAuthMode] = useState<'Login' | 'SignUp'>('Login');

  return (
    <div className="relative flex h-full w-full flex-col group/design-root overflow-hidden font-jakarta">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 h-full w-full bg-black/40 backdrop-blur-2xl"></div>
      </div>

      {/* Main Content Overlay */}
      <main className="relative z-10 flex flex-1 flex-col justify-end p-4 pb-8">
        <div className="flex flex-col gap-6 rounded-2xl bg-white/90 dark:bg-background-dark/80 p-6 backdrop-blur-xl shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight">Welcome back!</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">Join the conversation.</p>
          </div>

          {/* Segmented Buttons */}
          <div className="flex">
            <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800/50 p-1">
              <button 
                onClick={() => setAuthMode('Login')}
                className={`flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal transition-all duration-300 ${authMode === 'Login' ? 'bg-primary shadow-lg shadow-primary/30 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
              >
                <span className="truncate">Login</span>
              </button>
              <button 
                onClick={() => setAuthMode('SignUp')}
                className={`flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal transition-all duration-300 ${authMode === 'SignUp' ? 'bg-primary shadow-lg shadow-primary/30 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
              >
                <span className="truncate">Sign Up</span>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-4">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Email Address</p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-transparent bg-slate-200/50 dark:bg-slate-800/50 h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 text-base font-normal leading-normal transition-all" placeholder="Enter your email" type="email" />
              </div>
            </label>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Password</p>
              <div className="flex w-full flex-1 items-stretch rounded-lg relative">
                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-transparent bg-slate-200/50 dark:bg-slate-800/50 h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 pr-12 text-base font-normal leading-normal transition-all" placeholder="Enter your password" type="password" />
                <button className="absolute right-0 top-0 h-full px-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                  <Icon name="visibility_off" />
                </button>
              </div>
            </label>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a className="text-sm font-medium text-primary hover:underline cursor-pointer">Forgot Password?</a>
          </div>

          {/* Primary CTA Button */}
          <button onClick={onLogin} className="flex w-full items-center justify-center rounded-full bg-primary h-14 px-6 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/20">
            <span className="text-base font-bold text-white">{authMode === 'Login' ? 'Log In' : 'Create Account'}</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <hr className="flex-1 border-slate-300 dark:border-slate-700" />
            <p className="text-slate-500 dark:text-slate-400 text-sm">or</p>
            <hr className="flex-1 border-slate-300 dark:border-slate-700" />
          </div>

          {/* Social Logins */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex h-14 flex-1 items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-6 dark:border-slate-700 dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <img alt="Google logo" className="h-6 w-6" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
              <span className="text-base font-medium text-slate-700 dark:text-slate-200">Google</span>
            </button>
            <button className="flex h-14 flex-1 items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-6 dark:border-slate-700 dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <Icon name="grid_view" className="text-slate-900 dark:text-white" />
              <span className="text-base font-medium text-slate-700 dark:text-slate-200">Apple</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};