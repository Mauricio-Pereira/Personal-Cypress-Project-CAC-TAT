// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndClear',function(){
    const longText = 'Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste, '
    cy.get('#firstName').type('Mauricio').clear().should('be.empty')
    cy.get('#lastName').type('Pereira').clear().should('be.empty')
    cy.get('#email').type('mauricio.pvieira1@gmail.com').clear().should('be.empty')
    cy.get('#open-text-area').type(longText, {delay:0}).clear().should('be.empty')
    })
Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    const longText = 'Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste, '
    cy.get('#firstName').type('Mauricio')
    cy.get('#lastName').type('Pereira')
    cy.get('#email').type('mauricio.pvieira1@gmail.com')
    cy.get('#open-text-area').type(longText, {delay:0})
    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('fillNotAllMandatoryFields',function(){
    const longText = 'Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste, '
    cy.get('#firstName').type('Mauricio')
    cy.get('#lastName').type('Pereira')
    cy.get('#open-text-area').type(longText, {delay:0})
    cy.contains('button', 'Enviar').click()
})

