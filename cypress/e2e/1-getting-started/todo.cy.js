/// <reference types="cypress" />



describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login correcto', () => {
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.get('#login-button').click()
    cy.wait(3000)

  })

  it('Login incorrecto', () => {
    cy.get('#user-name').type("standard_user1")
    cy.get('#password').type("secret_sauce1")
    cy.get('#login-button').click()
    cy.wait(3000)


  })

 
  })

