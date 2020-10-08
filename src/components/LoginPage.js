import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let disable = !email || !password;

  function handleSubmit(e) {
    e.preventDefault();
    const url = "https://mighty-oasis-08080.herokuapp.com/api/users/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(({ user }) => {
        user && localStorage.setItem("authToken", user.token);
        props.setisLogged(true);
        props.history.push("/");
      })
      .catch((error) => console.log(error, "error is here"));
  }
  return (
    <div className="margin-top form-container">
      <h1>Log In</h1>
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
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            class="form-control"
          />
        </div>

        <button type="submit" disabled={disable} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default withRouter(LoginPage);
