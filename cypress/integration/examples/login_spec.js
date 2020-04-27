describe("Test login and logout page", () => {
    it("login", () => {
        cy.visit("https://localhost:19006/")
        cy.contains('Please login').click()
        // cy.url().should('include', '/commands/actions')
        cy.contains('Submit').click()

        cy.get('[data-testid=fullName-error]').contains("Required")
        cy.get('[data-testid=phoneNumber-error]').contains("Required")
        cy.get('[data-testid=phoneNumber-input]').type('050').should('have.value', '050')
        cy.get('[data-testid=fullName-input]').type('C').should('have.value', 'C')
        cy.contains('Submit').click()

        cy.get('[data-testid=phoneNumber-error]').contains("Phone number must be exactly 10 characters")
        cy.get('[data-testid=fullName-error]').contains("Too Short!")
        cy.get('[data-testid=phoneNumber-input]').clear().type('05020092981').should('have.value', '05020092981')
        cy.get('[data-testid=fullName-input]').clear().type('zxcvbnmasdzxcvbnmasdzxcvbnmasdzxcvbnmasdzxcvbnmasda').should('have.value', 'zxcvbnmasdzxcvbnmasdzxcvbnmasdzxcvbnmasdzxcvbnmasda')
        cy.contains('Submit').click()

        cy.get('[data-testid=phoneNumber-error]').contains("Phone number must be exactly 10 characters")
        cy.get('[data-testid=fullName-error]').contains("Too Long!")
        cy.get('[data-testid=phoneNumber-input]').clear().type('a').should('have.value', 'a')
        cy.contains('Submit').click()
        cy.get('[data-testid=phoneNumber-error]').contains("Phone number must contain only numbers")
        cy.get('[data-testid=phoneNumber-input]').clear().type('0502009298').should('have.value', '0502009298')
        cy.get('[data-testid=fullName-input]').clear().type("Chen Ben Ami").should("have.value",'Chen Ben Ami')
        cy.contains('Submit').click()
    })
})