import React from "react";

const AcceptTask = ()=>{
  return(
    <div
    id="tasklist"
    className="h-[50%] overflow-auto flex items-center justify-start gap-5 w-full flex-nowrap mt-10">
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
      <div className="flex justify-between mt-4">
      <button className="bg-green-400 py-1 px-2 text-2xl">mark as complete</button>
      <buton className="bg-red-400 py-1 px-2 text-2xl">Mark as failed</buton>
      </div>
    </div>
    </div>
  )
}
export default AcceptTask