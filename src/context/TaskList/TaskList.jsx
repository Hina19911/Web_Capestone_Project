import React from 'react';

const TaskList = () => {
  return (
    // 📦 Main container for the horizontal scrolling task list
    <div
      id="tasklist"
      className="h-[50%] overflow-auto flex items-center justify-start gap-5 w-full flex-nowrap mt-10"
    >
      {/* Each task card is fixed width*/}
      <div className="h-full w-[300px] bg-amber-400 rounded-xl shrink-0 p-5">
        
        {/* 🏷 Top row: Priority badge + Date */}
        <div className="flex justify-between items-center">
          {/* Priority tag */}
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded-2xl">High</h3>

          {/* Due date */}
          <h4 className="text-sm">20 August 2025</h4>
        </div>

        {/* 📌 Task title */}
        <h2 className="mt-5 text-2xl font-semibold">
          Make capestone today
        </h2>

        {/* 📄 Task description */}
        <p className="text-sm mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Sequi quisquam molestias hic officiis maxime. Veritatis, 
          nostrum id impedit, laborum repellat earum commodi ab quam 
          doloremque porro consequatur libero, pariatur ratione!
        </p>
      </div>

      {/* ❗ Right now this block is repeated  */}
      <div className="h-full w-[300px] bg-amber-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded-2xl">High</h3>
          <h4 className="text-sm">20 August 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make capestone today</h2>
        <p className="text-sm mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Sequi quisquam molestias hic officiis maxime. Veritatis, 
          nostrum id impedit, laborum repellat earum commodi ab quam 
          doloremque porro consequatur libero, pariatur ratione!
        </p>
      </div>

      {/* ... more identical blocks ... */}
      <div className="h-full w-[300px] bg-green-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded-2xl">High</h3>
          <h4 className="text-sm">20 August 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make capestone today</h2>
        <p className="text-sm mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Sequi quisquam molestias hic officiis maxime. Veritatis, 
          nostrum id impedit, laborum repellat earum commodi ab quam 
          doloremque porro consequatur libero, pariatur ratione!
        </p>
      </div>
      <div className="h-full w-[300px] bg-amber-100 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded-2xl">High</h3>
          <h4 className="text-sm">20 August 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make capestone today</h2>
        <p className="text-sm mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Sequi quisquam molestias hic officiis maxime. Veritatis, 
          nostrum id impedit, laborum repellat earum commodi ab quam 
          doloremque porro consequatur libero, pariatur ratione!
        </p>
      </div>
      <div className="h-full w-[300px] bg-blue-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded-2xl">High</h3>
          <h4 className="text-sm">20 August 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make capestone today</h2>
        <p className="text-sm mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Sequi quisquam molestias hic officiis maxime. Veritatis, 
          nostrum id impedit, laborum repellat earum commodi ab quam 
          doloremque porro consequatur libero, pariatur ratione!
        </p>
      </div>

    </div>
  );
};

export default TaskList;
