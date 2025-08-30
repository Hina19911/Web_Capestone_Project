import React from "react";
import Header from "../../components/other/Header"
import TaskListNumbers from "../../components/other/TaskListNumbers"
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = ()=> {
  return (
    <div className="p-8 bg-[#1C1C1C] h-screen" >
   <Header />
   <TaskListNumbers />
   <TaskList />
    </div>
  );
};
export default EmployeeDashboard