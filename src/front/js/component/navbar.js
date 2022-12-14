import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid justify-content-evenly">
        <Link to="/">
          <span className="navbar-brand mx-auto">JWT Authentication</span>
        </Link>
        <div>
          {store.auth === true ? (
            <Link to="/">
              <button
                className="btn btn-dark px-4 me-md-2"
                onClick={actions.logout}
              >
                Log out
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-dark px-4 me-md-2">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
