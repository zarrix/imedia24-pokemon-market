import { ActionCreator, AnyAction } from "redux";
import { IPokemon } from "../../types";

// Actions Types
const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';

// Actions Creators
export const getPokemonsSuccessAction: ActionCreator<AnyAction> = (pokemons: IPokemon[]) => ({
    type: GET_POKEMONS_SUCCESS,
    payload: {
        pokemons
    }
});

export const getPokemonsRequestAction: ActionCreator<AnyAction> = (offset) => ({
    type: GET_POKEMONS_REQUEST,
    payload: {
        offset
    }
});


// Reducer
export default function pokemonReducer(state: IPokemon[] = [] , action: AnyAction) {
    switch(action.type) {
        case GET_POKEMONS_SUCCESS:
            return [...state, ...action.payload.pokemons]
        default: 
            return state
    } 
}
