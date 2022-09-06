describe('Todos', () => {
  it('should add new todo', () => {
    cy.visit('/todos')
    cy.get('input').type('abcdefghijklmn');
    cy.get('button.btn-primary').click();
    cy.get('app-todos-list').contains('abcdefghijklmn')
  })
})
