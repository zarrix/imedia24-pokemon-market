import { AnyAction } from "redux";
import { call, put, takeEvery } from 'redux-saga/effects'
import { getPokemons } from "../../services/pokemonsService";
import { IPokemon } from "../../types";
import { apiRequestFinishedAction, apiRequestPendingAction } from "../loading/loading";

import { getPokemonsFailureAction, getPokemonsSuccessAction, GET_POKEMONS_REQUEST } from "./pokemons";


function* getPokemonsSaga(action: AnyAction) {
    yield put(apiRequestPendingAction());
    try {
        const pokemons: IPokemon[] = yield call(getPokemons, action.payload.offset);
        yield put(getPokemonsSuccessAction(pokemons));
    } catch (e) {
        yield put(getPokemonsFailureAction());
    } finally {
        yield put(apiRequestFinishedAction());
    }
}

function* pokemonSaga() {
    yield takeEvery(GET_POKEMONS_REQUEST, getPokemonsSaga);
}

export default pokemonSaga;