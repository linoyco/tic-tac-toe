describe("Test login and logout page", () => {
    it("login", () => {
        //Arrange
        //visit a page
        cy.visit("https://localhost:19006/")
        //find an element
        // Act
        //interact with element
        cy.contains('Please login').click()
        // Assert
        // make an assertion about the changes
        // cy.url().should('include', '/commands/actions')

        //find the email input by class not id and types an email and check if the value is the same
        cy.get('your phone number').type('0502009298').should('have.value', '0502009298')
    })
})