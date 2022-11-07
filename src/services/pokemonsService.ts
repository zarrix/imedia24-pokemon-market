import axios from 'axios';
import { API_URL } from '../config/api';
import { IPokemon } from '../types';

async function getPokemonByName(name: string): Promise<IPokemon> {
    const pokemon = (await axios.get(`${API_URL}/pokemon/${name}`)).data
    return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types,
        stats: pokemon.stats,
        abilities: pokemon.abilities
    };
}

export async function getPokemons(offset: number) {
    const pokes = (await axios.get(`${API_URL}/pokemon?offset=${offset}`)).data.results;
    const pokemons: IPokemon[] = await Promise.all(
        pokes.map(async (poke: any) => {
            return await getPokemonByName(poke.name)
        })
    );
    return pokemons;
}