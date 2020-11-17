import React from "react";
import "./Stock.css";

function Stock({ name, symbol, percentage, rate }) {
  return (
    <div className="stocks">
      <img
        src="https://www.dsij.in/Portals/0/EasyDNNnews/8324/img-Top.jpg"
        alt=""
      />
      <h2>{name}</h2>
      <p>{symbol}</p>
      <p>{percentage}</p>
      <p>${rate}</p>
    </div>
  );
}

export default Stock;
