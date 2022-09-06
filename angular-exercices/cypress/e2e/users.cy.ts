describe('Users', () => {
  it('should display users from backend', () => {
  //  cy.intercept({
  //     method: 'GET',
  //     url: 'https://jsonplaceholder.typicode.com/users',
  //   }, {
  //     statusCode: 200,
  //     body: [{id: 1, name: 'Toto'}, {id: 2, name: 'Titi'}],
  //     headers: { 'access-control-allow-origin': '*' },
  //     // delayMs: 2000,
  //   }).as('getUsers')

    cy.visit('/users');

    cy.contains('Leanne');
    // cy.contains('Titi');
  })
})
