import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
  const [username, setUsername] = useState("");

  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-5 md:px-8 md:py-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center font-bold text-lg shadow-sm border border-blue-200/50">
          {props.data?.firstName ? props.data.firstName[0].toUpperCase() : "A"}
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            Welcome back
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] mt-0.5">
            Hello, <span className="text-[#2563EB]">{props.data?.firstName ? props.data.firstName : "Admin"} 👋</span>
          </h1>
        </div>
      </div>
      <button
        onClick={logOutUser}
        className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        Log Out
      </button>
    </div>
  );
};

export default Header;
