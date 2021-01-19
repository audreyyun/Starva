import React from "react";
import ReactDOM from "react-dom";
import * as SessionAPIUtil from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.login = SessionAPIUtil.login;
    window.logout = SessionAPIUtil.logout;
    window.signup = SessionAPIUtil.signup;
    ReactDOM.render(<h1>Welcome to Starva</h1>, root);
});