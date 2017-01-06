describe('Initial Test', function(){
  it('cy.should - assert that <title> is correct', function(){

    // https://on.cypress.io/api/visit
    cy.visit('//localhost:3000')
    cy.title().should('include', 'Kitchen Sink')
  })

})