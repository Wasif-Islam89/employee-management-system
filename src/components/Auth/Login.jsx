import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-full bg-[#F1F5F9] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white border border-[#E2E8F0] shadow-xl shadow-blue-600/5 rounded-2xl p-8 sm:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#DBEAFE] text-[#2563EB] mb-4 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#1E293B]">Employee Portal</h1>
          <p className="text-sm text-[#64748B] mt-1.5">Sign in to manage and track workspace tasks</p>
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4"
        >
          <div>
            <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-sm text-[#1E293B] outline-none transition placeholder:text-slate-400"
              type="email"
              placeholder="admin@me.com or employee1@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-sm text-[#1E293B] outline-none transition placeholder:text-slate-400"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium py-3 px-5 mt-2 rounded-xl text-sm shadow-md shadow-blue-600/20 active:scale-[0.99] transition-all duration-200 cursor-pointer">
            Log in
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-center">
          <p className="text-xs text-[#64748B]">
            Demo: <span className="font-semibold text-[#1E293B]">admin@me.com</span> / <span className="font-semibold text-[#1E293B]">123</span>, <span className="font-semibold text-[#1E293B]">employee1@example.com</span> / <span className="font-semibold text-[#1E293B]">123</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
