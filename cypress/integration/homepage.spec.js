
describe('Hackprague homepage', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('loads homepage', () => {
    cy.visit('http://localhost:3000')

    cy.get('.App-header').contains('Ahoj, webdev!')
  })
})
