import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state}=useContextGlobal()
  console.log(state.favs)
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
        {state.favs && state.favs.map((dentista_fav)=>(
          <Card key={dentista_fav.id} dentista={dentista_fav}/>
          ))
        }

      </div>
    </>
  );
};

export default Favs;
