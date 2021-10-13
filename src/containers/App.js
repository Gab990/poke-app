import React from "react";
import SearchBox from '../components/SearchBox';
import PokeList from '../components/PokeList';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemon: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=800')
            .then(response => response.json())
            .then(pokes => this.setState({ pokemon: pokes.results }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { pokemon, searchfield } = this.state;
        const filteredPokemon = pokemon.filter(poke => {
            return poke.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <>
                <h1 className="main-title f1 ttu tc">welcome to the <img src="https://fontmeme.com/permalink/211011/71dc44c84d81edb1bc7e9f907809aa99.png" alt="pokemon-font" border="0" /> searcher</h1>
                <p className="f4 tc">Just enter a name to learn more about that Pokémon</p>
                <SearchBox searchChange={this.onSearchChange} />
                <div className="flex flex-wrap items-center justify-center">
                    <PokeList pokemon={filteredPokemon} />
                </div>
            </>
        )
    }
}

export default App;
