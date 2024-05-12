import React, { useCallback, useState } from "react";
import { Form } from "react-router-dom";
export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-400 ">
      <div className="flex justify-center items-center h-3/4 w-2/4 flex-col border-2 border-gray-300 rounded-lg shadow-xl">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-2xl font-sans text-slate-800 mb-2">
            Welcome
          </h1>
          <h3 className="font-bold text-xl text-slate-800">SignUp</h3>
        </div>
        <Form
          method="post"
          action="/signup"
          className="flex justify-center items-center flex-col "
        >
          <label
            htmlFor="firstname"
            className="mt-5 text-slate-800 font-medium"
          >
            First Name{" "}
          </label>
          <input
            name="firstname"
            type="text"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="bg-transparent border-b border-salte-300 text-center focus:border-slate-800 focus:outline-none"
          />
          <label htmlFor="lastname" className="mt-5 text-slate-800 font-medium">
            Lastname
          </label>
          <input
            name="lastname"
            type="text"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="bg-transparent text-center border-b border-salte-300 focus:border-slate-800 focus:outline-none"
          />
          <label htmlFor="username" className="mt-5 text-slate-800 font-medium">
            Username
          </label>
          <input
            name="username"
            type="email"
            value={formData.username}
            onChange={handleChange}
            required
            className="bg-transparent text-center border-b border-salte-300 focus:border-slate-800 focus:outline-none"
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
            className="bg-transparent text-center border-b border-salte-300 px-3 focus:border-slate-800 focus:outline-none"
          />
          <button className="bg-slate-600 px-9 py-1 my-3 rounded-lg shadow-md text-slate-200">
            Sign Up
          </button>
        </Form>
      </div>
    </div>
  );
}
