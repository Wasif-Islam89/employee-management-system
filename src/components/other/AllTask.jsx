import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-6 md:p-8 mt-6">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1E293B]">Employee Task Overview</h2>
            <p className="text-xs text-[#64748B]">Real-time status across team members</p>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#DBEAFE] text-[#1D4ED8]">
          {userData ? userData.length : 0} Employees
        </span>
      </div>

      <div className="bg-[#F8FAFC] border border-[#E2E8F0] py-3.5 px-5 flex justify-between items-center rounded-xl text-xs font-semibold uppercase tracking-wider text-[#64748B]">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#1E293B] w-1/5">Employee Name</h2>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 w-1/5 text-center">New Task</h3>
        <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-600 w-1/5 text-center">Active Task</h5>
        <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 w-1/5 text-center">Completed</h5>
        <h5 className="text-xs font-semibold uppercase tracking-wider text-rose-600 w-1/5 text-center">Failed</h5>
      </div>

      <div id="alltask" className="space-y-2 mt-3 max-h-80 overflow-y-auto pr-1">
        {userData && userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-blue-200 py-3 px-5 flex justify-between items-center rounded-xl transition-all duration-150"
            >
              <div className="w-1/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center font-bold text-xs">
                  {elem.firstName ? elem.firstName[0].toUpperCase() : "E"}
                </div>
                <h2 className="text-sm font-semibold text-[#1E293B]">{elem.firstName}</h2>
              </div>
              <h3 className="w-1/5 text-center">
                <span className="inline-block min-w-8 py-0.5 px-2.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  {elem.taskNumbers.newTask}
                </span>
              </h3>
              <h5 className="w-1/5 text-center">
                <span className="inline-block min-w-8 py-0.5 px-2.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                  {elem.taskNumbers.active}
                </span>
              </h5>
              <h5 className="w-1/5 text-center">
                <span className="inline-block min-w-8 py-0.5 px-2.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {elem.taskNumbers.completed}
                </span>
              </h5>
              <h5 className="w-1/5 text-center">
                <span className="inline-block min-w-8 py-0.5 px-2.5 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                  {elem.taskNumbers.failed}
                </span>
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
