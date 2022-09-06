describe('Home page', () => {
  it('should display Welcome', () => {
    cy.visit('/')
    cy.contains('Welcome')
  })
})
