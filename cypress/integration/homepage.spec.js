
describe('Hackprague homepage', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('loads homepage', () => {
    cy.visit('http://localhost:3000')

    cy.get('a.App-menu-item').contains('Home')
    cy.get('a.App-menu-item').contains('About')
    cy.get('a.App-menu-item').contains('Contact')
  })
})