import React from "react";

import axios from "axios";
import { redirect } from "react-router-dom";
import Signup from "../components/signup/Signup";
export default function SignupPage() {
  return (
    <div>
      <Signup />
    </div>
  );
}

export const action = async ({ request }) => {
  const data = await request.formData();
  const authData = {
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
    username: data.get("username"),
    password: data.get("password"),
  };
  console.log("Authdata", authData);
  try {
    const { data } = await axios.post("http://localhost:3000/signup", authData);
    console.log("Data", data);
    return redirect("/");
  } catch (error) {
    return error.response.data.message;
  }
};
