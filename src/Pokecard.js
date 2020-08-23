import React from "react";
import "./Pokecard.css";
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export default function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;
  return (
    <div className="Pokecard">
      <h1>{props.name}</h1>
      <img src={imgSrc} alt={props.name} />
      <div>Type: {props.type}</div>
      <div>EXP: {props.exp}</div>
    </div>
  );
}
