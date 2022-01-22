import React from 'react';
import '../styles/components/login.scss';

export const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="login__container">
          <h1 className="center white login__title">Log in</h1>
          <form>
            <div className="login__inputContainer">
              <input id="email" type="text" placeholder="Email"/>
            </div>
            <div className="login__inputContainer">
              <input id="pass" type="password" placeholder="Password"/>
            </div>
            <button className="cta">Login In</button>
          </form>
        </div>
      </div>
    </div>
  );
}