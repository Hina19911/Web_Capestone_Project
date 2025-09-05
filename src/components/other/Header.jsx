import React from "react";

const Header = ({data}) =>{
  console.log(data)
  return(
    <div className="flex items-center justify-between">
      <h2 className="text-2xl">Hello <br/><span className="text-3xl text-amber-300"> {data.firstName}</span></h2>
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Logout</button>
    </div>
  )
}

export default Header;