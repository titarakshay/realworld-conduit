import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

function SignupPage(props) {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [terms, setterms] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const url = "https://mighty-oasis-08080.herokuapp.com/api/users";
    console.log(username, email, password, "here are");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          username,
        },
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(({ user }) => {
        user && localStorage.setItem("authToken", user.token);
        props.setisLogged(true);
        props.history.push("/userhome");
      })
      .catch((error) => console.log(error, "error is here"));
  }

  let disable = !email || !username || !password || !terms;
  return (
    <div className="margin-top form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            class="form-control"
          />
        </div>

        <div class="form-group form-check">
          <input
            type="checkbox"
            name="terms"
            value={terms}
            onChange={() => setterms(!terms)}
            class="form-check-input"
          />
          <label class="form-check-label">
            I accept the terms and condtion
          </label>
        </div>
        <button type="submit" disabled={disable} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(SignupPage);
