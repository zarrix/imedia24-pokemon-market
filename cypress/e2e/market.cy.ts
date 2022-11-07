
describe('Pokemon Market e2e Test', () => {
  it('should show list of pokemons', () => {
    // open application
    cy.visit('http://localhost:3001')
    
    // fill the authentication form
    cy.findByRole('textbox', { name: /username/i }).type('admin');
    cy.findByLabelText(/Password/i).type('1234');
    cy.findByRole('button', { name: /se connecter/i }).click();

    // verify Home page
    cy.findByText(/tableau de bord/i).should('be.visible');

    // sign out
    cy.findByRole('img', { name: /profile image/i }).click();
    cy.findByRole('button', { name: /sign out/i }).click()

    //verify login page
    cy.findByRole('heading', { name: /connexion/i }).should('be.visible');
  })
})
