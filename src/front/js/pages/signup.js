import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import SignupImage from "./../../img/signup-image.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      actions.createUser(email, password);
      navigate("/login");
    } else {
      alert("Fill in all fields");
    }
  };

  return (
    <div className="container overflow-hidden">
      <div className="row gx-5 w-auto">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="card mt-3 shadow bg-body rounded">
            <div className="card-body ">
              <img
                src={SignupImage}
                className="card-img-top d-flex mx-auto mb-4"
                alt="Rewards Image"
              />
              <h5 className="card-text text-center">Get the best rewards</h5>
              <br />
              <div className="d-grid gap-2 col-10 mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
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
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></input>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 px-4 me-md-2"
                    onSubmit={() => actions.createUser}
                  >
                    Sign up
                  </button>
                </form>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
