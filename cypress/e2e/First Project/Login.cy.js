describe('Login Application', () => {
    it('Login to the test application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('darsh1911')
        cy.get("input[name='password']").type('darsh@1911')

        cy.get("input[value='Log In']").click()
       
        // cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
        // cy.get(".smallText").should('have.text','Welcome Darshan Darsh')
       
    })

    it('Checking Account Details', () => {

        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
        cy.get('#leftPanel > ul > :nth-child(1) > a').click()
    //     // cy.get("a[href='openaccount.htm']").click()
    //     // cy.get('#accountDetails > .title')

    })  

  })