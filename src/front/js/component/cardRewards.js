import React from "react";

const CardRewards = (items) => {
  return (
    <div className="row w-auto">
      <div className="col">
        <div className="card mt-3 shadow bg-body rounded">
          <div className="card-body">
            <p className="card-text fs-4 fw-bold">{items.titleRewards}</p>
          </div>
          <img
            src={items.image}
            className="card-img-top w-auto mx-auto"
            alt="Rewards"
          />
        </div>
      </div>
    </div>
  );
};
export default CardRewards;
