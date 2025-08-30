import React from "react";
import Header from "../../components/other/Header";
import CreateTask from "../../components/other/CreateTask";
import AllTask from "../../components/other/AllTask";

/**
 * AdminDashboard
 * - Presents a clean, responsive "Create Task" form
 * - Uses semantic labels, helpful placeholders, and consistent Tailwind styling
 * - Mobile: single column; Desktop: two columns with clear grouping
 */
const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
    
};

export default AdminDashboard;
