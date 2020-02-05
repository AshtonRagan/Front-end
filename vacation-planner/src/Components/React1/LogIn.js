import React, { useState } from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
import { useDispatch } from "react-redux";
const LogIn = props => {
  //set up the initial state
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    user_name: "",
    user_password: ""
  });
  //onChange handler
  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    console.log("Submitting", user);
    e.preventDefault();
    axiosWithAuth()
      .post("https://vacation-planner-2020.herokuapp.com/api/auth/login", user)
      .then(response => {
        console.log("Success", response);
        // localStorage.setItem("token", response.data.token);
        // localStorage.setItem("userid", response.data.id);
        // props.setUserid(response.data.id);
        dispatch({ type: "LOGIN_USER", payload: response.data });
        props.history.push("/dashboard");
      })
      .catch(error => console.log("ERROR", error.response));
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="login">Username</label>
        <input
          class="input"
          id="username"
          type="text"
          name="user_name"
          onChange={handleChanges}
          placeholder="userName"
          value={user.user_name}
        />
        <label htmlFor="password">Password</label>
        <input
          class="input"
          id="password"
          type="password"
          name="user_password"
          onChange={handleChanges}
          placeholder="password"
          value={user.user_password}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default LogIn;
