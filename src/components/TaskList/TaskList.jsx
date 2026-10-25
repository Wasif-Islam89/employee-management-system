import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#1E293B]">My Assigned Tasks</h2>
          <p className="text-xs text-[#64748B]">Horizontal scroll to explore your active, new, completed, and failed tasks</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#64748B]">
          {data.tasks ? data.tasks.length : 0} Total
        </span>
      </div>

      <div
        id="tasklist"
        className="overflow-x-auto flex items-stretch justify-start flex-nowrap gap-6 w-full py-2 pb-6"
      >
        {data.tasks.map((elem, idx) => {
          if (elem.active) {
            return <AcceptTask key={idx} data={elem} />;
          }

          if (elem.newTask) {
            return <NewTask key={idx} data={elem} />;
          }

          if (elem.completed) {
            return <CompleteTask key={idx} data={elem} />;
          }

          if (elem.failed) {
            return <FailedTask key={idx} data={elem} />;
          }
        })}
      </div>
    </div>
  );
};

export default TaskList;
