describe('Testes de registro', () => {
  beforeEach(() => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.url().should('include', '/registro')
  });
  it('Teste de registro bem-sucedido', () => {

    //Interagir com o campo "nome"
    cy.get('[placeholder=Nome]').type('Daniel Feijo')
    //Interagir com o campo "email"
    cy.get('[placeholder=Email]').type('daniel_cy@teste.com')
    //Interagir com o campo "senha"
    cy.get('[placeholder=Senha]').type('senha123')
    //Clicar no botão "registrar"
    cy.get('.btn').click()
    //Verificar se usuario foi adicionado com sucesso
    cy.get('.toast').should('be.visible')
     .and('contain','Usuário adicionado com sucesso')
  })
  it.only('Teste de registro sem o preenchimento do campo "nome"', () => {

    cy.get('[placeholder=Email]').type('teste_cy@teste.com')
    cy.get('[placeholder=Senha]').type('senha123')
    cy.get('.btn').click()
    cy.contains('status code 500')
    
  });
  it('Teste de registro sem o preenchimento do campo "email"', () => {

    cy.get('[placeholder=Nome]').type('teste_cy@teste.com')
    cy.get('[placeholder=Senha]').type('senha123')
    cy.get('.btn').click()
    cy.contains('status code 500')
    
  });
  it('Teste de registro sem o preenchimento do campo "senha"', () => {
    
    cy.get('[placeholder=Nome]').type('teste_cy@teste.com')
    cy.get('[placeholder=Email]').type('senha123')
    cy.get('.btn').click()
    cy.contains('status code 500')

  });
  it('Teste de registro sem o preenchimento dos campos', () => {
    
    cy.get('.btn').click()
    cy.contains('status code 500')

  });
})