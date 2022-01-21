import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ search, plantList }) {
  console.log(plantList, search)

  


  const eachPlant = plantList.map(plant => {
    return <PlantCard plant={plant} key={plant.name} />
  })

  return (
    <ul className="cards">
      {eachPlant}
    </ul>
  );
}

export default PlantList;
