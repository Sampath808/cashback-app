import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import "./index.css";
import Card from "react-bootstrap/Card";

const OrdersPage = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-around m-4">
        <h2>Total cash back points gained from your orders: {"   "} Rs.790</h2>
        <Button variant="danger">Click to Redeem</Button>
      </div>
      <Card className="mw-70 m-5 card--box-shadow card--light">
        <Card.Header className="text-center">Order no 1.</Card.Header>
        <Card.Body className="d-flex justify-content-around">
          <div>
            <Card.Title>Johnnie Walker...</Card.Title>
            <Card.Text>Total amount paid: Rs.5,000.0</Card.Text>
            <Card.Text>
              Date and Time of purchase: August 3rd 2023, 08:04 PM IST{" "}
            </Card.Text>
          </div>
          <div>
            <Card.Text>Cashback points gained: 250</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="mw-70 m-5 card--box-shadow card--light">
        <Card.Header className="text-center">Order no 2.</Card.Header>
        <Card.Body className="d-flex justify-content-around">
          <div>
            <Card.Title>Jack Daniel's...</Card.Title>
            <Card.Text>Total amount paid: Rs.2,500.0</Card.Text>
            <Card.Text>
              Date and Time of purchase: August 21st 2023, 05:04 PM IST{" "}
            </Card.Text>
          </div>
          <div>
            <Card.Text>Cashback points gained: 125</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="mw-70 m-5 card--box-shadow card--light">
        <Card.Header className="text-center">Order no 3.</Card.Header>
        <Card.Body className="d-flex justify-content-around">
          <div>
            <Card.Title>Captain Morgan...</Card.Title>
            <Card.Text>Total amount paid: Rs.8,300.0</Card.Text>
            <Card.Text>
              Date and Time of purchase: September 5th 2023, 10:55 AM IST{" "}
            </Card.Text>
          </div>
          <div>
            <Card.Text>Cashback points gained: 415</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrdersPage;
