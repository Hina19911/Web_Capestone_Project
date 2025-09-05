import React from "react";
// TasklistNumbers.jsx


const TasklistNumbers =({data})=>{
 // Grab taskCounts directly from employee
 const counts = data?.taskCounts ?? { active: 0, newTask: 0, completed: 0, failed: 0 };
return(
  <div className="flex justify-between gap-5 screen">
    <div className="rounded-2xl h-40 w-[45%] p-10 bg-red-400">
      <h2 className="text-2xl">{counts.active}</h2>
      <h3 className="text-3xl font-bold"> New Task</h3>
    </div>
    <div className="rounded-2xl h-40 w-[45%] p-10 bg-red-400">
      <h2 className="text-2xl">{counts.newTask}</h2>
      <h3 className="text-3xl font-bold">In Progress</h3>

    </div>
    <div className="rounded-2xl h-40 w-[45%] p-10 bg-red-400">
      <h2 className="text-2xl">{counts.completed}</h2>
      <h3 className="text-3xl font-bold"> Completed</h3>

    </div>
    <div className="rounded-2xl h-40 w-[45%] p-10 bg-red-400">
      <h2 className="text-2xl">{counts.failed}</h2>
      <h3 className="text-3xl font-bold">Failed</h3>

    </div>
  </div>
  
)
}
export default TasklistNumbers