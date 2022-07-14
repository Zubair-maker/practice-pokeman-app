import React, { useEffect, useState } from "react";
import PokiInfo from "./PokiInfo";
import PokiCard from "./PokiCard";
import axios from "axios";

const Index = () => {
   
const [pokiData, setPokiData] = useState([]);
const [loading, setLoading] = useState(true);
const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
const [nextUrl, setNextUrl] = useState();
const [prevUrl, setPrevUrl] = useState();
const [pokiDisplay, setPokiDisplay] = useState();

//create a arrow function getPoki and use async await for async.call 
//and use axios for Api call.
const getPoki = async() => {
    setLoading(true);
    const resp = await axios.get(url);
    // console.log("--->",resp.data.results);
    setNextUrl(resp.data.next);
    setPrevUrl(resp.data.previous);
    getPokemon(resp.data.results);
    setLoading(false)
    // console.log("---->",pokiData);
}
//create a getPokemon function for calling different url
const getPokemon =async(resp) =>{
     resp.map(async(item)=>{
      //  console.log(item.url)
    const result = await axios.get(item.url) 
    //  console.log(result.data)
//store all this object in one array
    setPokiData( state => {
      state = [...state, result.data]
      // console.log("---",state)
      return state;
    })
     })
}

useEffect(() => {
   getPoki();
},[url])
  return (
    <>
    <div className="container">
      <div className="left-container">
        <PokiCard pokiData={pokiData}
         loading={loading}
         infoPoki={poke=> setPokiDisplay(poke)}
         />    
        <div className="btn">
          <button onClick={()=> setUrl(prevUrl)}>Prev</button>
          <button onClick={()=> setUrl(nextUrl) }>Farward</button>
        </div>
      </div>
      <div className="right-container">
        <PokiInfo data={pokiDisplay}/>      
      </div>
    </div>
    </>
  );
};

export default Index;
