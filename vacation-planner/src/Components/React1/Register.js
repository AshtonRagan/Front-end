import React, { useState } from "react";

const Register = () => {
  //set up the initial state
  const [user, setUser] = useState({
    login: "",
    password: ""
  });

  //onChange handler
  const handleChanges = e => {
    setUser({ [e.target.name]: e.target.value });
  };

  // submitForm
  const submitForm = e => {
    e.preventDefault();
    setUser({ login: "", password: "", user_email: "" });
  };

  return (
    <div>
      <form className="form" onSubmit={submitForm}>
        <label htmlFor="login">LogIn</label>
        <input
          class="input"
          id="login"
          type="text"
          name="login"
          onChange={handleChanges}
          placeholder="userName"
          value={user.user_name}
        />

        <label htmlFor="email">Email</label>
        <input
          class="input"
          id="email"
          type="email"
          name="email"
          onChange={handleChanges}
          placeholder="email@prodiver.com"
          value={user.user_email}
        />

        <label htmlFor="password">Password</label>
        <input
          class="input"
          id="password"
          type="password"
          name="password"
          onChange={handleChanges}
          placeholder="password"
          value={user.user_password}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
