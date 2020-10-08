import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "react-bootstrap";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Header from "./Header";
import UserPage from "./UserPage";

function APP() {
  const [isLogged, setisLogged] = useState(false);
  useEffect(() => {
    if (localStorage.authToken) {
      setisLogged(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="body-wrapper">
        <Header isLogged={isLogged} setisLogged={setisLogged} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/login"
            render={() => <LoginPage setisLogged={setisLogged} />}
          />
          <Route
            exact
            path="/signup"
            render={() => <SignupPage setisLogged={setisLogged} />}
          />
          <Route path="/user" component={UserPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default APP;
