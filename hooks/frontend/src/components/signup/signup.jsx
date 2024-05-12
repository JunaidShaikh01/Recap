import React, { useState } from "react";
import { useCallback } from "react";
import { Form } from "react-router-dom";

export default function signup() {
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
    <div>
      <Form action="/signup" method="post">
        <label htmlFor="firstname">First name</label>
        <input
          name="firstname"
          type="text"
          value={formData.firstname}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Last name</label>
        <input
          name="lastname"
          type="text"
          value={formData.lastname}
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
        <label name="password">Password</label>
        <input
          name="password"
          type="password"
          vlaue={formData.password}
          onChange={handleChange}
        />
        <button>Signup</button>
      </Form>
    </div>
  );
}
