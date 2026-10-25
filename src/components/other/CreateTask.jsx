import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newtask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData;

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(taskObj);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    });
    setUserData(data);
    // console.log(data);

    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };
  return (
    <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E2E8F0]">
        <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-bold text-[#1E293B]">Create New Task</h2>
          <p className="text-xs text-[#64748B]">Assign and schedule a new task for team members</p>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-start"
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-2.5 text-sm text-[#1E293B] outline-none transition placeholder:text-slate-400"
              type="text"
              placeholder="e.g. Design Landing Page"
            />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-2.5 text-sm text-[#1E293B] outline-none transition text-slate-700"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-2.5 text-sm text-[#1E293B] outline-none transition placeholder:text-slate-400"
              type="text"
              placeholder="e.g. Ali, Hamza, Usman..."
            />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-2.5 text-sm text-[#1E293B] outline-none transition placeholder:text-slate-400"
              type="text"
              placeholder="Design, Dev, Frontend, etc."
            />
          </div>
        </div>
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-xl p-4 text-sm text-[#1E293B] outline-none transition placeholder:text-slate-400 resize-none h-48"
              name=""
              id=""
              placeholder="Describe the scope, deliverables, and expectations..."
            ></textarea>
          </div>
          <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium py-3 px-5 rounded-xl text-sm shadow-md shadow-blue-600/20 active:scale-[0.99] transition-all duration-200 mt-4 cursor-pointer flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
