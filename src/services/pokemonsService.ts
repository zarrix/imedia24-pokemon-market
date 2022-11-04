import axios from 'axios';
import { API_URL } from '../config/api';

async function getPokemonByName(name: string) {
    const pokemon = (await axios.get(`${API_URL}/pokemon/${name}`)).data
    return pokemon;
}

export async function getPokemons(offset: number, limit: number) {
    const pokemons: any = [];
    const pokes = (await axios.get(`${API_URL}/pokemon?offset=${offset}&limit=${limit}`)).data.results;
    console.log(pokes)
    for (let poke of pokes) {
        const pokemon = await (await getPokemonByName(poke.name));
        pokemons.push(pokemon);
    }
    // await pokes.forEach(async (poke: any) => await pokemons.push(await getPokemonByName(poke.name)))
    // console.log(pokemons)
    return pokemons;
}