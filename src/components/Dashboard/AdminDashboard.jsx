import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-[#F1F5F9] text-[#1E293B] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
