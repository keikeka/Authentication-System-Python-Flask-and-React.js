import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import CardRewards from "../component/cardRewards";
import RewardsOne from "./../../img/rewards1.jpg";
import RewardsTwo from "./../../img/rewards2.jpg";
import RewardsThree from "./../../img/rewards3.jpg";
import RewardsFour from "./../../img/rewards4.jpg";

const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.auth) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="container-fluid text-center mt-3">
        <h1>Private area</h1>
        <h3>Your Rewards</h3>
        <div className="row row-cols-1 row-cols-md-2 gt-2 w-50 mx-auto">
          <div className="col">
            <CardRewards image={RewardsOne} titleRewards={"Gold found"} />
          </div>
          <div className="col">
            <CardRewards image={RewardsTwo} titleRewards={"Winning card"} />
          </div>
          <div className="col">
            <CardRewards image={RewardsThree} titleRewards={"Overtime"} />
          </div>
          <div className="col">
            <CardRewards image={RewardsFour} titleRewards={"Memories"} />
          </div>
        </div>
        <div className="col-12 mt-5">
          <input
            type="button"
            value="Logout"
            className="btn btn-dark px-4 me-md-2"
            onClick={() => actions.logout(navigate("/"))}
          />
        </div>
      </div>
    </>
  );
};
export default Profile;
