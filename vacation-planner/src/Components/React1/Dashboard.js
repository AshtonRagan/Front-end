import React, { useEffect } from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
import { VacationList } from "../React2/VacationList";

import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const vacations = useSelector(state => state.vacations);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("USEEEFT");
    const id = localStorage.getItem("userid");
    if (localStorage.getItem("token")) {
      axiosWithAuth()
        .get(`users/${id}`)
        .then(res => {
          console.log("RES EFFECT", res);

          dispatch({ type: "USER_IS_LOGGED", payload: res.data, pa: true });
        })
        .catch();
    } else {
      dispatch({ type: "USER_IS_LOGGED", pa: false });
    }
  }, []);

  return (
    <div>
      {/* <Link to = "/login">Log In</Link>  */}
      <h1>Dashboard</h1>
      <h1>Vacations:</h1>
      <div>{!vacations ? <div>Add New Vacations!</div> : <VacationList />}</div>
    </div>
  );
};

export default Dashboard;
