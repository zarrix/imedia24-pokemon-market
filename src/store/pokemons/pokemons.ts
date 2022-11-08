import { ActionCreator, AnyAction } from "redux";
import { IPokemon } from "../../types";

// Actions Types
export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';

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

export const getPokemonsFailureAction: ActionCreator<AnyAction> = (error) => ({
    type: GET_POKEMONS_FAILURE,
    payload: {
        error
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
