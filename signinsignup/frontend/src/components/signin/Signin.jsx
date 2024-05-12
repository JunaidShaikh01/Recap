import React, { useCallback } from "react";
import { Form, Link } from "react-router-dom";
import { useState } from "react";

export default function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  console.log("FormData", formData);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-400 ">
      <div className="flex justify-center items-center h-3/5 w-2/4 flex-col border-2 border-gray-300 rounded-lg shadow-xl">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-2xl font-sans text-slate-800 mb-2">
            Welcome
          </h1>
          <h3 className="font-bold text-xl text-slate-800">SignIn</h3>
        </div>
        <Form
          method="post"
          action="/"
          className="flex justify-center items-center flex-col "
        >
          <label htmlFor="username" className="mt-5 text-slate-800 font-medium">
            Username / e-mail{" "}
          </label>
          <input
            name="username"
            type="text"
            value={formData.firstname}
            onChange={handleChange}
            required
            className=" text-center bg-transparent border-b border-salte-300 focus:border-slate-800 focus:outline-none"
          />
          <label htmlFor="password" className="mt-5 text-slate-800 font-medium">
            Password
          </label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className=" text-center bg-transparent border-b border-salte-300 focus:border-slate-800 focus:outline-none"
          />
          <button className="bg-slate-600 px-9 py-1 my-3 rounded-lg shadow-md text-slate-200">
            Sign in
          </button>
        </Form>
        Dont have an accout{" "}
        <Link to="/signup" className="text-blue-800 font-bold underline">
          SignUp
        </Link>
      </div>
    </div>
  );
}
