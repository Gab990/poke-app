import React from "react";


const PokeCard = ({ name }) => {
    return (
        <div className='card tc fl w-10 dib br3 pa3 ma2 grow bw2 shadow-5'>
            <a href={`https://www.pokemon.com/us/pokedex/${name}`} target="_blank" rel="noreferrer">
                <img src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`} alt={`${name}`} />
            </a>
            <div className="tc">
                <h2>{name.toUpperCase()}</h2>
            </div>
        </div>
    )
}

export default PokeCard;

