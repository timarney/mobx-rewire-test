const page = 'http://localhost:3000'

describe('MobX Render Test', function(){
  it('Assert page rendered', function(){
    cy.visit(page)
    cy.get('#reset').should("have.length", 1)
  })

  it('Assert button rendered', function(){
    cy.visit(page)
    cy.get('.txt').should("have.text", 'Seconds passed:')
    cy.get('.timer').first().wait(2000).then(function($input){
      let val = $input[0].innerHTML
      expect(val).to.be.gte(1)
    })
  })

})