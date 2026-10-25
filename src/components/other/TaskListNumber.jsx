import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="p-6 bg-white border border-[#E2E8F0] hover:border-blue-300 rounded-2xl shadow-sm hover:shadow-md transition-all">
        <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-[#1E293B] tracking-tight">{data.taskNumbers.newTask}</h2>
        <h3 className="text-sm font-medium text-[#64748B] mt-1">New Tasks</h3>
      </div>

      <div className="p-6 bg-white border border-[#E2E8F0] hover:border-emerald-300 rounded-2xl shadow-sm hover:shadow-md transition-all">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-[#1E293B] tracking-tight">{data.taskNumbers.completed}</h2>
        <h3 className="text-sm font-medium text-[#64748B] mt-1">Completed Tasks</h3>
      </div>

      <div className="p-6 bg-white border border-[#E2E8F0] hover:border-amber-300 rounded-2xl shadow-sm hover:shadow-md transition-all">
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-[#1E293B] tracking-tight">{data.taskNumbers.active}</h2>
        <h3 className="text-sm font-medium text-[#64748B] mt-1">Accepted Tasks</h3>
      </div>

      <div className="p-6 bg-white border border-[#E2E8F0] hover:border-rose-300 rounded-2xl shadow-sm hover:shadow-md transition-all">
        <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 border border-rose-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-[#1E293B] tracking-tight">{data.taskNumbers.failed}</h2>
        <h3 className="text-sm font-medium text-[#64748B] mt-1">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
