import React from "react";
import { loginUrl } from "../api/spotify";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <img
        id="logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
