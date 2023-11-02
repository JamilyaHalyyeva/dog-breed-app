import { useEffect } from "react"
import { useState } from "react"
import { Outlet } from "react-router-dom"

import { SearchBox } from "../components/SearchBox"
import { getListOfDogs } from "../service/dataService"

function MasterLayout() {
  const [masterData, setMasterData]=useState([])
  const [data, setData]=useState([])
useEffect(()=>{
    const fetchDogs= async()=>{
      let dt=  await getListOfDogs ();
      setData(dt);
      setMasterData(dt);
 
    }
    fetchDogs().catch(console.error)

},[])
const selectedDogBreedHandler =(selectedDogBreed)=>{
  console.log()
 let filteredData = masterData.filter((dogData)=>{
    if(selectedDogBreed === "all"){
      return true;
    } else{
      return dogData.breed_group === selectedDogBreed;
    }
  
 })
 setData(filteredData)

}
  return (
    <div className="h-full flex items-center justify-center flex-col bg-slate-200 rounded">
       <h1>Dog Breed App</h1>
       <SearchBox 
       onDogBreedChanged={selectedDogBreedHandler}
       listItems={[...new Set(masterData.map(breed=>breed.breed_group))]} />


        <Outlet context ={data}/>
    </div>
  )
}

export default MasterLayout
