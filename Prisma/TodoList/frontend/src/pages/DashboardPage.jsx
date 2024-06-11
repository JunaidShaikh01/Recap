import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export default function DashboardPage() {
  const loaderData = useLoaderData();
  console.log("LoaderData", loaderData);
  const data = loaderData;
  return <Dashboard data={data} />;
}

export const loader = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/user/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      console.log("data", data);
      return data;
    } catch (error) {
      console.error("Error fetching data ", error);
      return error.message;
    }
  } else {
    return { error: "No token found" };
  }
};
