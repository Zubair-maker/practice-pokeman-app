import React from "react";

const PokiInfo = ({ data }) => {
  console.log("...", data);
  return (
    <div>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <hr/>
          <div className="abilities">
            {
              data.abilities.map((abilityItem) =>{
                    return(
                      <>
                  <div className="group">
                     <h2>{abilityItem.ability.name}</h2>
                  </div>
                      </>
                    )
              })
            }
            
          </div>
             {
              data.stats.map((statsItem) =>{
                return(
                  <>
                   <div className="stat">
                      <h3>{statsItem.stat.name} : {statsItem.base_stat}</h3>
                    </div>
                  </>
                )
              })
             }
         
        </>
      )}
    </div>
  );
};

export default PokiInfo;
