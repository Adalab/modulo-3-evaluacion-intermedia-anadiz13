import React, { useState } from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import Data from "../data/data.json";

const App = () => {
  const [pokemons, setPokemons] = useState(Data);

  return (
    <div>
      <h1>Mi lista de Pokemon</h1>
      <PokeList pokemons={pokemons} />
    </div> //pokemons= {pokemons} se pasan las props
  );
};

export default App;
//   //lo que devuelva la funcion es lo que se muestra en la pagina
//   const primerPokemon = DataPokemon[0]; //van los datos del primer pokemon
//   console.log("DataPokemon", DataPokemon);
//   console.log("primerPokemon", primerPokemon);

//   return (
//     <div>
//       {DataPokemon.map((item, index) => (
//         <Pokemon primerPokemon={item}></Pokemon>
//       ))}

//       <Pokemon primerPokemon={primerPokemon}></Pokemon>
//     </div>
//   );
// }

/*variableDelArray.map(  (nombreItem,index)  =>    (<html></html>)    )} 
Siempre que haya que pintar un array en React hay que usar un .map()
.map() tiene dentro de los paréntesisi una función arrow. A la izquierda de => van dos nombres, el del ítem a mostrar y index. A la derecha va el HTML que pinta item*/
