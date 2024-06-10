import React, { useState } from "react";
import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser, faX } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const clickHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  console.log("isDropdownOpen", isDropdownOpen);
  return (
    <div>
      <nav className="navbar bg-[#009578] w-screen h-[12vh] flex justify-between px-[2rem] items-center">
        <h1 className="font-bold text-2xl text-[#0d3a31]">Todo List</h1>
        <div className="relative ">
          <button
            className="font-bold text-[#0d3a31] text-2xl cursor-pointer  "
            onClick={clickHandler}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg ">
              <div className="p-4">
                <div className="flex justify-end">
                  <FontAwesomeIcon icon={faX} onClick={clickHandler} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  Username
                </h2>
                <button className="mt-4 w-full py-2 px-4 bg-[#009578]  text-[#0d3a31]   font-bold rounded-lg hover:bg-[#b8dcd5]">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="body">
        <div>
          <Form className="mt-4">
            <div className="flex justify-between px-6 items-center">
              <input
                type="text"
                placeholder="Enter Todo"
                name="todo"
                className="border w-[95%] p-4 text-xl rounded-s-lg shadow focus:outline-none focus:border-b-2 focus:border-gray-300"
              />
              {!isDropdownOpen && (
                <button className="bg-[#009578]  text-[#0d3a31] p-4 rounded-e-lg text-xl  shadow transform duration-500 ease-in-out hover:bg-[#b8dcd5] cursor-pointer">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
