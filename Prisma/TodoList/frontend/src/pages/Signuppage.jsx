import React from "react";
import Signup from "../components/Signup/Signup";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function SignupPage() {
  return <Signup />;
}

export const action = async ({ request }) => {
  const data = await request.formData();
  const authdata = {
    username: data.get("username"),
    password: data.get("password"),
    firsname: data.get("firsname"),
    lastname: data.get("lastname"),
  };

  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
      authdata
    );
    localStorage.clear();
    localStorage.setItem("token", data.token);
    return redirect("/");
  } catch (error) {
    return error.response.data.message;
  }
};
