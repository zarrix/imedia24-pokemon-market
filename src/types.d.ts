interface IPokeTypes {
    slot: number;
    type: {
        name:
        | 'grass'
        | 'fire'
        | 'water'
        | 'bug'
        | 'normal'
        | 'poison'
        | 'electric'
        | 'ground'
        | 'fairy'
        | 'fighting'
        | 'flying'
        | 'rock';
        url: string;
    };
}

interface IPokeStats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
    };
}

interface IPokeAbilities {
    ability: {
        name: string;
    };
}

export interface IPokemon {
    name: string;
    id: number | string;
    img: string;
    types: IPokeTypes[];
    stats: IPokeStats[];
    abilities: IPokeAbilities[];
}

export enum ApiStatus {
    LOADING = 'loading',
    LOADED = 'loaded',
}
