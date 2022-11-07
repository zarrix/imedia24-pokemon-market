import { ReactNode, RefObject, useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsRequestAction } from '../../store/pokemons/pokemons'
import { IPokemon } from '../../types'
import Loading from '../Loading/Loading'
import PokemonCard from '../PokemonCard/PokemonCard'

type State = {
    pokemons: IPokemon[],
    loading: boolean
}

function Market() {

    const pokemons: IPokemon[] = useSelector((state: State) => state.pokemons)
    const loading: boolean = useSelector((state: State) => state.loading);
    const dispatch = useDispatch()

    const observer: any = useRef();
    const lastPokemonCardRef: any = useCallback((node: ReactNode) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
            dispatch(getPokemonsRequestAction(pokemons.length));
          }
        })
        if (node) observer.current.observe(node)
      }, [loading])

    useEffect(() => {
        dispatch(getPokemonsRequestAction(0));
    }, [])


    return (
        <div className='p-5 max-w-screen-xl mx-auto'>
            {/* Search bar */}
            <div className='flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0'>
                <a href="#" className="flex items-center">
                    <img src="/imedia24-logo.png" className="mr-3 h-10 sm:h-20" alt="Flowbite Logo" />
                    <span className="self-center text-3xl lg:text-4xl font-semibold whitespace-nowrap">
                        PokeMedia <span className='text-[#BE1A27]'>Market</span>
                    </span>
                </a>
                <form className='w-full md:w-[50%]'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#BE1A27] hover:bg-[#BE1A27]/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
            </div>

            {/* Pokemon Cards */}
            <div role="pokemonCards" className='pt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-10 md:gap-10 mx-auto'>
                {pokemons.map((pokemon, index: number) => {
                    if (index === pokemons.length - 1) {
                        return <div ref={lastPokemonCardRef}><PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        /></div>
                    }
                    return <div><PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                    /></div>
                })}
            </div>
            {loading ? <Loading /> : null}
        </div>
    )
}

export default Market