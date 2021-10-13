import React from "react";
import PokeCard from "./PokeCard";



const PokeList = ({ pokemon }) => {
    return (
        <>
            {pokemon.map((poke, i) => {
                return (
                        <PokeCard
                            key={i}
                            name={pokemon[i].name}
                            />
                )
            })}
        </>
    );
}

export default PokeList;