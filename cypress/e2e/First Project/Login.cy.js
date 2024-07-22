describe('Login Application', () => {
    it('Login to the test application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('darsh1911')
        cy.get("input[name='password']").type('darsh@1911')

        cy.get("input[value='Log In']").click()
        // cy.get(".smallText").should('have.text','Welcome Darshan Darsh')
       
    })

    // it('Checking Account Details', () => {
    //     cy.get("a[href='activity.htm?id=14010']").click()
    //     cy.get("cy.get('#accountDetails > .title')")


    // })  

  })