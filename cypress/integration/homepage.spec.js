
describe('Hackprague homepage', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('loads homepage', () => {
    cy.visit('http://localhost:3000')

    // cy.get('.App-header').contains('Ahoj, webdev!')
    cy.get('[data-ui="App-header"]').contains('Ahoj, webdev!')
  })
})



describe.skip('Avocode homepage', () => {
  it('loads homepage', () => {
    cy.visit('/')

    // cy.get('.App-header').contains('Ahoj, webdev!')
  })


  it('goes to contact page and fills a form', () => {
    cy.visit('/contact-us')

    cy
      .get('form input#name')
      .type('Jakub Žitný')
      .should('have.value', 'Jakub Žitný')

    cy
      .get('form input#email')
      .type('jakubzitny@avocode.com')
      .should('have.value', 'jakubzitny@avocode.com')

    cy
      .get('form select[name="companySize"]')
      .select('50-199')
  })
})
