import React, { useState, useEffect } from "react";
import "./Login.scss";

const Login = (props) => {
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(enteredMail.includes("@") && enteredPassword.length > 6);
  }, [enteredMail, enteredPassword]);

  function mailChangeHandler(e) {
    setEnteredMail(e.target.value);
  }

  function pswChangeHandler(e) {
    setEnteredPassword(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    props.isLoggedIn(enteredMail, enteredPassword);
  }

  return (
    <form onSubmit={formSubmitHandler} className="login-form">
      <div className="login-form__input-container">
        <label htmlFor="email">Email</label>
        <input onChange={mailChangeHandler} type="text" id="email"></input>
      </div>

      <div className="login-form__input-container">
        <label htmlFor="password">Password</label>
        <input
          onChange={pswChangeHandler}
          type="password"
          id="password"
        ></input>
      </div>

      <button
        type="submit"
        className="login-form__button"
        disabled={!formIsValid}
      >
        Log in
      </button>
    </form>
  );
};

export default Login;
