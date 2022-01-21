import React, { useState } from "react";

function PlantCard({ plant }) {

  const [stockText, setStockText] = useState("In Stock")
  const [buttonClass, setButtonClass] = useState("primary")

  function handleClick (e) {
    let updatedClassName = e.target.className
    let updatedTextContent = e.target.textContent

    if (updatedClassName === "primary") {
      updatedClassName = "";
      updatedTextContent = "Out of Stock" 
      setButtonClass(updatedClassName);
      setStockText(updatedTextContent);
      
    } else {
      updatedClassName = "primary";
      updatedTextContent = "In Stock"
      setButtonClass(updatedClassName);
      setStockText(updatedTextContent);
    }
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button className={buttonClass} onClick={handleClick}>{stockText}</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
