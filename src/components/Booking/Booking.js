import React, { useState } from "react";

import "./Booking.css";

import WaterCans from "../../assets/Water Cans.svg";
import WaterTankers from "../../assets/Water Tankers.svg";

const CanComp = ({ seller, stock, location }) => {
  return (
    <tr style={{ height: "50px" }}>
      <td>{seller}</td>
      <td>{stock}</td>
      <td>{location}</td>
      <td>
        <button className="button">Buy Now</button>
      </td>
    </tr>
  );
};

const Booking = () => {
  const [can, setCan] = useState(false);
  const [tanker, setTanker] = useState(false);

  const [booking, setBooking] = useState(false);

  const canData = [
    {
      name: "Jack Rand",
      rating: 4.5,
      currentStock: 100,
      location: "RD Road",
    },
    {
      name: "Jane Smith",
      rating: 3.8,
      currentStock: 75,
      location: "Park Avenue",
    },
    {
      name: "Mike Johnson",
      rating: 4.2,
      currentStock: 50,
      location: "Elm Street",
    },
    {
      name: "Sarah Lee",
      rating: 4.9,
      currentStock: 200,
      location: "Main Street",
    },
    {
      name: "John Doe",
      rating: 3.5,
      currentStock: 80,
      location: "Broadway",
    },
    {
      name: "Emily Green",
      rating: 4.0,
      currentStock: 120,
      location: "Pine Street",
    },
    {
      name: "David Kim",
      rating: 4.3,
      currentStock: 60,
      location: "Maple Avenue",
    },
    {
      name: "Rachel Davis",
      rating: 4.7,
      currentStock: 150,
      location: "Oak Lane",
    },
    {
      name: "Mark Thompson",
      rating: 3.9,
      currentStock: 90,
      location: "Cherry Street",
    },
    {
      name: "Kelly Brown",
      rating: 4.1,
      currentStock: 110,
      location: "Cedar Avenue",
    },
  ];

  const tankData = [
    {
      name: "Jack Rand",
      Rating: 4.5,
      currentStock: 100,
      location: "RD Road",
    },
    {
      name: "Samantha Lee",
      Rating: 3.2,
      currentStock: 50,
      location: "Main Street",
    },
    {
      name: "John Smith",
      Rating: 4.9,
      currentStock: 75,
      location: "Oak Avenue",
    },
    {
      name: "Emily Chen",
      Rating: 4.2,
      currentStock: 120,
      location: "Elm Street",
    },
    {
      name: "David Johnson",
      Rating: 3.8,
      currentStock: 90,
      location: "Maple Road",
    },
    {
      name: "Sophie Nguyen",
      Rating: 4.6,
      currentStock: 60,
      location: "Cedar Lane",
    },
    {
      name: "Michael Brown",
      Rating: 3.9,
      currentStock: 85,
      location: "Pine Drive",
    },
    {
      name: "Jessica Kim",
      Rating: 4.1,
      currentStock: 110,
      location: "Spruce Street",
    },
    {
      name: "William Davis",
      Rating: 4.4,
      currentStock: 95,
      location: "Birch Lane",
    },
    {
      name: "Ashley Garcia",
      Rating: 3.5,
      currentStock: 70,
      location: "Willow Avenue",
    },
  ];

  return (
    <>
      <div className="container">
        {!booking && (
          <div className="booking">
            <h1>Book Water</h1>
            <div className="booking__content">
              <img
                src={WaterCans}
                alt="Water Cans"
                className="booking_img"
                onClick={() => {
                  setCan(true);
                  setBooking(true);
                }}
              />
              <img
                src={WaterTankers}
                alt="Water Tankers"
                className="booking_img"
                onClick={() => {
                  setTanker(true);
                  setBooking(true);
                }}
              />
            </div>
          </div>
        )}

        {can ? (
          <table style={{ width: "100%", padding: "2rem 0" }}>
            <tr>
              <td>
                <strong>Seller</strong>
              </td>
              <td>
                <strong>Stock</strong>
              </td>
              <td>
                <strong>Location</strong>
              </td>
              <td>
                <strong>Buy Now</strong>
              </td>
            </tr>
            {canData.map((item, index) => {
              return (
                <CanComp
                  key={index}
                  seller={item.name}
                  stock={item.currentStock}
                  location={item.location}
                />
              );
            })}
          </table>
        ) : (
          <></>
        )}

        {tanker ? (
          <table style={{ width: "100%", padding: "2rem 0" }}>
            <tr>
              <td>
                <strong>Seller</strong>
              </td>
              <td>
                <strong>Stock</strong>
              </td>
              <td>
                <strong>Location</strong>
              </td>
              <td>
                <strong>Buy Now</strong>
              </td>
            </tr>
            {tankData.map((item, index) => {
              return (
                <CanComp
                  key={index}
                  seller={item.name}
                  stock={item.currentStock}
                  location={item.location}
                />
              );
            })}
          </table>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Booking;
