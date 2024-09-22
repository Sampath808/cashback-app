import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import redbus from "./assets/redbus.png";
import ola from "./assets/ola.png";
import oyo from "./assets/oyo.png";
import liq from "./assets/liquor-c.jpeg";

const CouponCard = () => {
  return (
    <>
      <div className="coupon-container">
        <div className="coupon-card card card--box-shadow card--light m-2">
          <img
            src={liq}
            alt="coupon image"
            style={{ border: "2px solid red", borderRadius: "10px" }}
            className="rounded "
            width="350"
            height="200"
          ></img>
          <div>
            <p className="text-center">
              Get 20% of on your next purchase in our store
            </p>
            <p className="text-center">
              Buy this coupon for 350 cashback points!
            </p>
          </div>
          <div className="text-center">
            <Button
              className="removeButton"
              onClick={() => handleRemove()}
              variant="success"
            >
              Buy
            </Button>
          </div>
        </div>

        <div className="coupon-card card card--box-shadow card--light m-2">
          <img
            src={liq}
            alt="coupon image"
            style={{ border: "2px solid red", borderRadius: "10px" }}
            className="rounded "
            width="350"
            height="200"
          ></img>
          <div>
            <p className="text-center">
              Get 35% of on your next purchase in our store
            </p>
            <p className="text-center">
              Buy this coupon for 600 cashback points!
            </p>
          </div>
          <div className="text-center">
            <Button
              className="removeButton"
              onClick={() => handleRemove()}
              variant="success"
            >
              Buy
            </Button>
          </div>
        </div>

        <div className="coupon-card card card--box-shadow card--light m-2">
          <img
            src={liq}
            alt="coupon image"
            style={{ border: "2px solid red", borderRadius: "10px" }}
            className="rounded "
            width="350"
            height="200"
          ></img>
          <div>
            <p className="text-center">
              Get 50% of on your next purchase in our store
            </p>
            <p className="text-center">
              Buy this coupon for 1000 cashback points!
            </p>
          </div>
          <div className="text-center">
            <Button
              className="removeButton"
              onClick={() => handleRemove()}
              variant="success"
            >
              Buy
            </Button>
          </div>
        </div>

        <div className="coupon-card card card--box-shadow card--light m-2">
          <img
            src={redbus}
            alt="coupon image"
            style={{ border: "2px solid red", borderRadius: "10px" }}
            className="rounded"
            width="250"
            height="200"
          ></img>
          <div>
            <p className="text-center">Get 25% of on your next ride</p>
            <p className="text-center">
              Buy this coupon for 100 cashback points!
            </p>
          </div>
          <div className="text-center">
            <Button
              className="removeButton"
              onClick={() => handleRemove()}
              variant="success"
            >
              Buy
            </Button>
          </div>
        </div>

        <div className="coupon-card card card--box-shadow card--light m-2">
          <img
            src={ola}
            alt="coupon image"
            style={{ border: "2px solid red", borderRadius: "10px" }}
            className="rounded "
            width="350"
            height="200"
          ></img>
          <div>
            <p className="text-center">Get 25% of on your next ride</p>
            <p className="text-center">
              Buy this coupon for 150 cashback points!
            </p>
          </div>
          <div className="text-center">
            <Button
              className="removeButton"
              onClick={() => handleRemove()}
              variant="success"
            >
              Buy
            </Button>
          </div>
        </div>

        <div className="coupon-card card card--box-shadow card--light m-2">
          <img
            src={oyo}
            alt="coupon image"
            style={{ border: "2px solid red", borderRadius: "10px" }}
            className="rounded "
            width="350"
            height="200"
          ></img>
          <div>
            <p className="text-center">Get 25% of on your next ride</p>
            <p className="text-center">
              Buy this coupon for 300 cashback points!
            </p>
          </div>
          <div className="text-center">
            <Button
              className="removeButton"
              onClick={() => handleRemove()}
              variant="success"
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponCard;
