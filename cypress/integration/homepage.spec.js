
// https://docs.cypress.io/guides/guides/continuous-integration.html

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



describe('Avocode homepage', () => {
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
      .get('form input#organization')
      .type('avo')
      .should('have.value', 'avo')

    cy
      .get('form textarea')
      .type('test')
      .should('have.value', 'test')

    cy
      .get('form select[name="inquiry"]')
      .select('I need help')

    cy
      .get('form select[name="companySize"]')
      .select('50-199')


    cy.get('button[data-test="contactUs_submit"]').click()




  })
})
