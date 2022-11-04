import { ActionCreator, AnyAction } from "redux";

// Actions Types
const GET_POKEMONS = 'GET_POKEMONS';

// Actions Creators
export const getPokemonsAction: ActionCreator<any> = (pokemons: any) => ({
    type: GET_POKEMONS,
    payload: {
        pokemons
    }
});

// Reducer
export default function pokemonReducer(state: any = [] , action: AnyAction) {
    switch(action.type) {
        case GET_POKEMONS:
            return [...state, ...action.payload.pokemons]
        default: 
        return state
    } 
}
