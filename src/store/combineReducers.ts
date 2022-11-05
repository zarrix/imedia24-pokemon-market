import { combineReducers } from "redux";
import loadingReducer from "./loading/loading";
import pokemonReducer from "./pokemons/pokemons";

const reducer =  combineReducers({
    pokemons: pokemonReducer,
    loading: loadingReducer
})

export default reducer;