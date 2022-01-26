describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

it('should be able to add', () => {
  cy.get('#number1').click();
  cy.get('#operator_add').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '5')
})

it('should be able to subtract', () => {
  cy.get('#number4').click();
  cy.get('#operator-subtract').click();
  cy.get('#number7').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '3')
})

it('should be able to multiply', () => {
  cy.get('#number3').click();
  cy.get('#operator-multiply').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '15')
})

it('should be able to divide', () => {
  cy.get('#number2').click();
  cy.get('#number1').click();
  cy.get('#operator-divide').click();
  cy.get('#number7').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '3')
})

it('should be able to chain multiple number button clicks', () => {
  cy.get('#number1').click();
  cy.get('#number1').click();
  cy.get('#number1').click();
  cy.get('.display').should('contain', '111')
})

it('should be able to chain multiple operations together', () => {
  cy.get('#number3').click();
  cy.get('#operator-multiply').click();
  cy.get('#number5').click();
  cy.get('#operator_add').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '19')
})

it('should output correctly for positive numbers', () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number1').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '3')
})

it('should output correctly for negative numbers', () => {
  cy.get('#number4').click();
  cy.get('#operator-subtract').click();
  cy.get('#number6').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-2')
})

it('should output correctly for float numbers', () => {
  cy.get('#number2').click();
  cy.get('#operator-divide').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '0.5')
})

it('should output correctly for very large numbers', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator-multiply').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '100000000')
})

it('should output error message for division of 0', () => {
  cy.get('#number2').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', 'Cannot divide by zero')
})























})