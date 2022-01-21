import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((plants) => setPlantList(plants));
}, []);


  function handleAddNewPlant (newPlant){
    const updatedPlantList = [...plantList, newPlant]
    setPlantList(updatedPlantList)
  }


  function handleSearchFilter(newSearch) {
    console.log(newSearch)
    setSearch(newSearch)
  }

  let plantListFiltered =
  plantList
  .filter(plant => {
    return plant.name.toLowerCase().includes(search)
  })

  if (search === ""){
    plantListFiltered = plantList
  }

console.log("plantlistfiltered", plantListFiltered)

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddNewPlant}/>
      <Search onSearchFilter={handleSearchFilter}/>
      <PlantList search={search} plantList={plantListFiltered}/>
    </main>
  );
}

export default PlantPage;
