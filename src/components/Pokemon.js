import React from "react";

const Pokemon = (props) => {
  console.log("props", props);
  const typeList = props.types.map((nombreDeType, index) => {
    return <li key={index}>{nombreDeType}</li>;
  });

  return (
    <div className="card__list">
      <img
        className="card__img"
        src={props.imgSrc}
        alt={`imagen de` + props.name}
      />
      <h3 className="card__title">{props.name}</h3>
      <ul className="card__description"> {typeList}</ul>
    </div>
  );
};
export default Pokemon;
{
  /* index:se lo vamos a poner a la key del primer elemento pokemon se encarga de pintar los datos de un pokemon*/
}
