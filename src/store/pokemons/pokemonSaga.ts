import { AnyAction } from "redux";
import { call, put, takeEvery } from 'redux-saga/effects'
import { getPokemons } from "../../services/pokemonsService";
import { IPokemon } from "../../types";
import { apiRequestFinishedAction, apiRequestPendingAction } from "../loading/loading";

import { getPokemonsSuccessAction } from "./pokemons";


function* getPokemonsSaga(action: AnyAction) {
    yield put(apiRequestPendingAction());
    try {
        const pokemons: IPokemon[] = yield call(getPokemons, action.payload.offset, 20);
        yield put(getPokemonsSuccessAction(pokemons));
        yield put(apiRequestFinishedAction());
    } catch (e) {
        yield put(apiRequestFinishedAction());
    }
}

function* pokemonSaga() {
    yield takeEvery("GET_POKEMONS_REQUEST", getPokemonsSaga);
}

export default pokemonSaga;