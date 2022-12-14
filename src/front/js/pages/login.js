import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import RewardsImage from "./../../img/rewards-image.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      actions.login(email, password);
    } else {
      alert("Fill in all fields");
    }
  };

  return (
    <>
      <div className="container">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="card mt-3 shadow bg-body rounded">
            <div className="card-body ">
              <img
                src={RewardsImage}
                className="card-img-top d-flex mx-auto mb-4"
                alt="Rewards Image"
              />
              <h5 className="card-text text-center">Review your rewards</h5>
              <br />
              <div className="d-grid gap-2 col-10 mx-auto">
                {store.auth === true ? (
                  <Navigate to="/protected" />
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 px-4 me-md-2"
                    >
                      Log in
                    </button>
                  </form>
                )}
              </div>
              <br />
              <div className="col-12 mx-auto">
                <div className="d-flex gap-2 col-10 mx-auto justify-content-center align-items-center">
                  <p>Don't have an account?</p>
                  <Link to="/signup">
                    <button
                      className="btn btn-dark w-auto px-4 pb-2 me-md-1"
                      type="button"
                    >
                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
