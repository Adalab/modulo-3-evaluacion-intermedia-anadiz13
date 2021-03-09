import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  console.log(props.pokemons);
  const PokeList = props.pokemons.map((pokemonItem) => {
    return (
      <li clasName="card__list" key={pokemonItem.id}>
        <Pokemon
          name={pokemonItem.name}
          imgSrc={pokemonItem.url}
          types={[`grass`, `poison`]}
        />
      </li>
    );
  });
  return (
    <div>
      <ul clasName="cards">{PokeList}</ul>
    </div>
  );
};

export default PokeList;
