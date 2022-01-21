import React, { useState } from "react";

function NewPlantForm({ onAddNewPlant }) {

  const [ formInputs, setFormInputs ] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange (e) {
    setFormInputs({...formInputs, 
      [e.target.name]: e.target.value})

  }
  
  function handleSubmit (e) {
    e.preventDefault();

    
    const newFormInputs = {
      "name": formInputs.name,
      "image": formInputs.image,
      "price": formInputs.price
    }
    console.log("new form inputs:", newFormInputs)

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormInputs),
    })
      .then((r) => r.json())
      .then((newPlant) => onAddNewPlant(newPlant));
  }

  return (
    <div className="new-plant-form" onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
