import React, { useState } from "react";
import { loginUser } from "../util/auth";
import PropTypes from "prop-types";
import "../styles/components/login.scss";

export const Login = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // handles auth on form submit.
  const submitHandler = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      username: username,
      password: password,
    });

    setToken(token);
  };

  return (
    <div>
      <div className="login">
        <div className="login__container">
          <h1 className="center white login__title">Log in</h1>
          <form onSubmit={submitHandler}>
            <div className="login__inputContainer">
              <input
                id="email"
                type="text"
                placeholder="Email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login__inputContainer">
              <input
                id="pass"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="cta">
              Login In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// type checking component props
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
