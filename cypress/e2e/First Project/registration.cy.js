describe('Registration Functionality', () => {
    it('Register as a new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()

        cy.get("input[id='customer.firstName']").type('Darshan')
        cy.get("input[id='customer.lastName']").type('Darshu')
        cy.get("input[id='customer.address.street']").type('RT Nagar')
        cy.get("input[id='customer.address.city']").type('Bengaluru')
        cy.get("input[id='customer.address.state']").type('Karnataka')
        cy.get("input[id='customer.address.zipCode']").type('560053')
        cy.get("input[id='customer.phoneNumber']").type('9876543210')
        cy.get("input[id='customer.ssn']").type('12345654321')

        cy.get("input[id='customer.username']").type('darsh1911')
        cy.get("input[id='customer.password']").type('darsh@1911')
        cy.get("#repeatedPassword").type('darsh@1911')

        cy.get("input[value='Register']").click()
    })
  })