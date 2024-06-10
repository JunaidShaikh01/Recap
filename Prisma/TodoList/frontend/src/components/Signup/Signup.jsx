import React from "react";
import { Form, Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="bg-[#009578] flex h-screen w-screen items-center justify-center">
      <div className="bg-white flex flex-col items-center w-[25%] gap-6 rounded shadow-md">
        <h1 className="font-bold mt-4 text-2xl">Sign Up</h1>
        <Form
          method="post"
          action="/signup"
          className="flex flex-col items-center gap-4 w-full px-8 "
        >
          <input
            className="border-[1px] rounded w-full py-2 pl-4 shadow-sm"
            type="text"
            name="firstname"
            placeholder="First name"
          />
          <input
            className="border-[1px] rounded w-full py-2 pl-4 shadow-sm"
            type="text"
            name="lastname"
            placeholder="Last name"
          />
          <input
            className="border-[1px] rounded w-full py-2 pl-4 shadow-sm"
            type="email"
            name="username"
            placeholder="Username"
          />
          <input
            className="border-[1px] rounded w-full py-2 pl-4 shadow-sm"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="bg-[#009578] w-full  rounded py-2 cursor-pointer text-white hover:text-[#009578] hover:bg-[#b8dcd5] font-medium transition ease-in-out duration-500">
            Sign Up
          </button>
        </Form>
        <p className="mb-4">
          Already have an account?<Link className="text-[#009578]" to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
