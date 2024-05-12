import React from "react";

import axios from "axios";
import { redirect } from "react-router-dom";

import Signin from "../components/signin/Signin";

export default function SigninPage() {
  return <Signin />;
}

export const action = async ({ request }) => {
  const data = await request.formData();
  console.log("Data", data);
  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  try {
    const { data } = await axios.post("http://localhost:3000/signin", {
      username: authData.username,
      password: authData.password,
    });
    console.log("Data", data);
    return redirect("/dashboard");
  } catch (error) {
    return error.response.data.message;
  }
};
