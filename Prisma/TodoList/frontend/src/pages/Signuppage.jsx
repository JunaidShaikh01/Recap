import React from "react";
import Signup from "../components/Signup/Signup";
import axios from "axios";
import { redirect, json } from "react-router-dom";

export default function SignupPage() {
  return <Signup />;
}

export const action = async ({ request }) => {
  const data = await request.formData();
  const authdata = {
    username: data.get("username"),
    password: data.get("password"),
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
  };

  try {
    const { data } = await axios.post(
      "http://localhost:3000/app/v1/user/signup",
      {
        username: authdata.username,
        password: authdata.password,
        firstname: authdata.firstname,
        lastname: authdata.lastname,
      }
    );
    localStorage.clear();
    localStorage.setItem("token", data.token);
    return redirect("/");
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data && error.response.data.message) {
      return json({ message: error.response.data.message }, { status: 400 });
    }

    // Fallback error response
    return json({ message: "An unexpected error occurred" }, { status: 500 });
  }
};
