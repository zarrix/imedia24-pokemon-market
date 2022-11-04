import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Poster from './components/Poster/Poster';
import Market from './components/Market/Market';
import { useDispatch } from 'react-redux';
import { getPokemonsAction } from './store/pokemons';

function App() {

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(getPokemonsAction([
  //     {
  //       "name": "bulbasaur",
  //       "url": "https://pokeapi.co/api/v2/pokemon/1/"
  //     },
  //     {
  //       "name": "ivysaur",
  //       "url": "https://pokeapi.co/api/v2/pokemon/2/"
  //     },
  //     {
  //       "name": "venusaur",
  //       "url": "https://pokeapi.co/api/v2/pokemon/3/"
  //     },
  //     {
  //       "name": "charmander",
  //       "url": "https://pokeapi.co/api/v2/pokemon/4/"
  //     },
  //     {
  //       "name": "charmeleon",
  //       "url": "https://pokeapi.co/api/v2/pokemon/5/"
  //     },
  //     {
  //       "name": "charizard",
  //       "url": "https://pokeapi.co/api/v2/pokemon/6/"
  //     },
  //     {
  //       "name": "squirtle",
  //       "url": "https://pokeapi.co/api/v2/pokemon/7/"
  //     },
  //     {
  //       "name": "wartortle",
  //       "url": "https://pokeapi.co/api/v2/pokemon/8/"
  //     },
  //     {
  //       "name": "blastoise",
  //       "url": "https://pokeapi.co/api/v2/pokemon/9/"
  //     },
  //     {
  //       "name": "caterpie",
  //       "url": "https://pokeapi.co/api/v2/pokemon/10/"
  //     },
  //     {
  //       "name": "metapod",
  //       "url": "https://pokeapi.co/api/v2/pokemon/11/"
  //     },
  //     {
  //       "name": "butterfree",
  //       "url": "https://pokeapi.co/api/v2/pokemon/12/"
  //     },
  //     {
  //       "name": "weedle",
  //       "url": "https://pokeapi.co/api/v2/pokemon/13/"
  //     },
  //     {
  //       "name": "kakuna",
  //       "url": "https://pokeapi.co/api/v2/pokemon/14/"
  //     },
  //     {
  //       "name": "beedrill",
  //       "url": "https://pokeapi.co/api/v2/pokemon/15/"
  //     },
  //     {
  //       "name": "pidgey",
  //       "url": "https://pokeapi.co/api/v2/pokemon/16/"
  //     },
  //     {
  //       "name": "pidgeotto",
  //       "url": "https://pokeapi.co/api/v2/pokemon/17/"
  //     },
  //     {
  //       "name": "pidgeot",
  //       "url": "https://pokeapi.co/api/v2/pokemon/18/"
  //     },
  //     {
  //       "name": "rattata",
  //       "url": "https://pokeapi.co/api/v2/pokemon/19/"
  //     },
  //     {
  //       "name": "raticate",
  //       "url": "https://pokeapi.co/api/v2/pokemon/20/"
  //     }
  //   ]))
  // })

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <main>
        {/* Poster */}
        <Poster />

        {/* Market */}
        <Market />

      </main>

    </div>
  );
}

export default App;
