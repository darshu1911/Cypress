describe('Login Application', () => {
    it('Login to the test application', () => {
        cy.visit('http://doctor.sparks.dap-health.com/login')
        cy.get("#email").type('doctor@gmail.com')
        cy.get("#password").type('Dap@123')

        cy.get("button[type='submit']").click()
        cy.get("body > app-root:nth-child(1) > app-home:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(3) > span:nth-child(1)").should('have.text','Claim Details')
       
    })

    it('Checking Account Details', () => {
        cy.get("div[class='col-lg-12 col-md-12 order-1 mb-4'] button[type='button']").click()
        cy.get("cy.get('#accountDetails > .title')")


    })  

  })