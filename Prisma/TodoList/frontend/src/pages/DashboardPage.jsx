import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";

export default function DashboardPage() {
  return <Dashboard />;
}

export const loader = async () => {
  const token = localStorage.getItem("token");
  {
    try {
      const { data } = await axios.get(
        "https://localhost:3000/api/v1/user/me",
        {
          Headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
};
