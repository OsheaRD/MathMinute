// This is the landing page where user inputs name. 

import React, { useState } from "react";
import { Redirect } from "react-router";

const Form = () => {
  const [user_name, setUserName] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "player_name":
        console.log(e.target.value);
        setUserName(e.target.value);
        break;

      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!user_name) return;
    setRedirectToHome(true);
  };

  const redirectMe = () => {
    return (
      <Redirect
        to={{
          pathname: "/home",
          state: { user_name },
        }}
      />
    );
  };

  return (
    <div className="form">
      {redirectToHome && redirectMe()}
      <div className="form__container">
        <h1>The Math Minute</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="input"
            placeholder="Enter Player Name"
            name="player_name"
            onChange={changeHandler}
          />
          <button className="btn-1">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
