import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] p-6 bg-white border border-[#E2E8F0] hover:border-emerald-300 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[260px]">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            {data.category}
          </h3>
          <h4 className="text-xs font-medium text-[#64748B] flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {data.taskDate}
          </h4>
        </div>
        <h2 className="mt-4 text-lg font-bold text-[#1E293B] leading-snug">{data.taskTitle}</h2>
        <p className="text-sm text-[#64748B] mt-2 leading-relaxed line-clamp-3">{data.taskDescription}</p>
      </div>

      <div className="mt-5 pt-4 border-t border-[#E2E8F0]">
        <button className="w-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-default">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
