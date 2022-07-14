import React from "react";

const PokiCard = (props) => {
  const Pokemon = props.pokiData;
  const Display = props.loading;
  // console.log("---->", Pokemon, Display);
  return (
    <>
      {Display ? (
        <h2>loading...</h2>
      ) : (
        Pokemon.map((poki) => {
          return (
            <>
              <div className="pokicard" key={poki.id} onClick={()=>props.infoPoki(poki)}>
                <hi>{poki.id}</hi>
                <img
                  src={poki.sprites.front_default}
                  alt="images"
                />
                <h1>{poki.name}</h1>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default PokiCard;
