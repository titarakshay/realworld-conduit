import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

function Header(props) {
  const handleLogout = () => {
    localStorage.clear();
    props.setisLogged(false);
    props.history.push("/login");
  };
  return (
    <header>
      <Link className="link" to="/">
        <h2 className="header-name">conduit</h2>
      </Link>
      {props.isLogged ? (
        <AuthHeader handleLogout={handleLogout} />
      ) : (
        <NonAuthHeader />
      )}
    </header>
  );
}

const NonAuthHeader = () => {
  return (
    <ul className="nav-bar">
      <Link className="link nav-links " to="/">
        Home
      </Link>
      <NavLink activeClassName="active" className="link nav-links" to="/login">
        Log In
      </NavLink>
      <NavLink activeClassName="active" className="link nav-links" to="/signup">
        Sign up
      </NavLink>
    </ul>
  );
};

const AuthHeader = (props) => {
  return (
    <ul className="nav-bar">
      <Link className="link nav-links" to="/">
        Home
      </Link>
      <Link className="link nav-links" to="/">
        New Post
      </Link>
      <Link className="link nav-links" to="/user">
        User
      </Link>
      <button className="link nav-links" onClick={props.handleLogout}>
        Logout
      </button>
    </ul>
  );
};

export default withRouter(Header);
