/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Open Page', function(){
  const longText = ('Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test' )
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    
    cy.visit('./src/index.html')
  })

  it('Verificar o titulo da pagina', function(){
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preencher os campos obrigatórios e validar', function(){
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })

  it('Deixar de preencher algum campo obrigatório e validar a mensagem de erro', function(){
    cy.fillNotAllMandatoryFields()
    cy.get('.error').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
    cy.get('#email').type('mauricio.pvieira1#$gmail.com')
    cy.fillNotAllMandatoryFields()
    cy.get('.error').should('be.visible')
  })

  it('Verificar que o campo "numero de telefone" aceita apenas numeros',function(){
    cy.get('#phone').type('mauricioPereira').should('be.empty')

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário e desmarca a opção', function(){
    cy.get('#phone-checkbox').check()
    cy.get('.phone-label-span').should('contain.text', 'obrigatório')
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.error').should('be.visible')
    cy.get('input[type="checkbox"').check().last().uncheck()
    cy.get('#phone-checkbox').should('not.be.checked')
    })

  it('preenche e limpa os campos nome, sobrenome, email e telefone',function(){
    cy.fillMandatoryFieldsAndClear()
    cy.get('#phone').type('91447165').clear().should('be.empty')
  })

  it('seleciona um produto (YouTube) por seu texto',function(){
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
    
  })

  it('seleciona um produto (Mentoria) por seu valor (value)',function(){
    cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    
  })

  it('seleciona um produto (Blog) por seu índice',function(){
    cy.get('#product').select(1).should('have.value', 'blog')
    
  })

  it('Marca o tipo de atendimento "feedback" e valida', function(){
    cy.get(':nth-child(4) > input').check().should('be.checked')
    
  })

  it('Marcar cada tipo de atendimento e validar se cada um deles foi marcado', function(){
    cy.get('input[type="radio"]').each(function($radio){
      cy.wrap($radio).check().should('be.checked')
    })
    
  })

  it('Selecionar um arquivo na pasta fixtures', function(){
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json').should('contain.value','example')

  })

  it('Selecionar um arquivo na pasta fixtures simulando drag-and-drop', function(){
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json', {action: 'drag-drop'}).should('contain.value','example')

  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
    cy.fixture("example").as("sampleFile")
    cy.get('#file-upload').selectFile('@sampleFile').should('contain.value','example')

  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
    cy.get('a').should('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
    cy.get('a').invoke('removeAttr', 'target').click()
    cy.contains('Talking About Testing').should('be.visible')
  })
})