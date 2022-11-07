
describe('Pokemon Market e2e Test', () => {
  it('should show list of pokemons with infinite scroll', () => {

    // open application
    cy.visit('http://localhost:3002/')

    // no pokemon cards at first
    cy.findByRole('pokemonCards').should("be.empty")

    cy.wait(8000)

    // should show pokemon cards
    cy.findAllByRole('pokemonCard').should("have.length", 20)

    //should show more pokemon cards when scrolled to the bottom
    cy.scrollTo(0, 5000);
    cy.wait(8000)
    cy.findAllByRole('pokemonCard').should("have.length", 40)
  })
})
