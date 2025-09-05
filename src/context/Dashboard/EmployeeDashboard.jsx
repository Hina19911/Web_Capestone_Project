import React from "react";
import Header from "../../components/other/Header";
import TaskListNumbers from "../../components/other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  // `data` is one employee (like Arjun above)
  console.log("EmployeeDashboard data:", data);

  return (
    <div className="p-8 bg-[#1C1C1C] h-screen">
      <Header data={data} />
      {/* Just pass whole employee object down */}
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
