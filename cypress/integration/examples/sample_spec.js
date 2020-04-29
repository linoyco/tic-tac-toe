
describe("My first test", () => {
    it("visit page", () => {
        //Arrange
        //visit a page
        cy.visit("https://example.cypress.io")

        cy.pause()
        //find an element
        // Act
        //interact with element
        cy.contains('type').click()
        // Assert
        // make an assertion about the changes
        cy.url().should('include', '/commands/actions')

        //find the email input by class not id and types an email and check if the value is the same
        cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    })
})