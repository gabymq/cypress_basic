describe('My first test', () => {
    it('Visits the Venta web and login', ()=> {
        const host = Cypress.env('host')
        cy.visit(host)

        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-id')
        cy.type('admintest')
        cy.type('123456')
        .should('have.value', 'admintest', '123456')
     
    })
})