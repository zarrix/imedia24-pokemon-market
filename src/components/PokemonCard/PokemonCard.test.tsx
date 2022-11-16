import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { IPokemon } from "../../types";
import PokemonCard from "./PokemonCard";

// Mock IntersectionObserver
class IntersectionObserver {
  observe = jest.fn()
  disconnect = jest.fn()
  unobserve = jest.fn()
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

describe('PokemonCard Component Test', () => {

  const pokemon: IPokemon = {
    id: 1,
    name: 'bulbasaur',
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    types: [],
    stats: [],
    abilities: []
  }

  beforeEach(() => {
    render(<PokemonCard pokemon={pokemon} />);
  })

  it('Should render PokemonCard  with provided props successuflly', () => {
    expect(screen.getByAltText('Pokemon')).toHaveAttribute('src', pokemon.img);
    expect(screen.getByRole('heading')).toHaveTextContent(pokemon.name)
  });

  it('Should open Modal when clicked on the PokemanCard image', async () => {

    // Click the image
    fireEvent.click(screen.getByAltText('Pokemon'))
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(await screen.findByAltText('Close')).toBeInTheDocument();
  });
})
