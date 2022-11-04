import { createStore } from "redux";
import pokemonReducer from "./pokemons";
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    pokemonReducer,
    composeWithDevTools()
);

export default store;