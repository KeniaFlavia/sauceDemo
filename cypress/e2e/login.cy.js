describe('Login', () => {

  it('Deve fazer login com sucesso', () => {
    // 1. Visita a página de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

    // 2. Preenche o campo username e senha
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    // 3. Clica no botão de login
    cy.get('#login-button').click()
    
    // 4. Verifica se foi redirecionado para a página logada
    cy.get('.product_label')
        .should('be.visible')
        .and('have.text', 'Products') //texto esperado
  })


  it('Nao deve logar com senha invalida', () => {
    // 1. Visita a página de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

    // 2. Preenche o campo username
    cy.get('[data-test="username"]').type('standard_user')

    // 3. Preenche o campo de senha
    cy.get('[data-test="password"]').type('abcdef')

    // 4. Clica no botão de login
    cy.get('#login-button').click()

    // 5. Verifica o nao redirecionamento da area logada
    cy.contains('Epic sadface: Username and password do not match any user in this service') //texto esperado
        .should('be.visible')
  })


  it('Nao deve logar com username nao cadastrado', () => {
    // 1. Visita a página de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

    // 2. Preenche o campo username
    cy.get('[data-test="username"]').type('usarname_invalido')

    // 3. Preenche o campo de senha
    cy.get('[data-test="password"]').type('secret_sauce')

    // 4. Clica no botão de login
    cy.get('#login-button').click()

    // 5. Verifica o nao redirecionamento da area logada
    cy.contains('Epic sadface: Username and password do not match any user in this service') //texto esperado
        .should('be.visible')
  })
})