describe('Carrinho de Compras', () => {
  beforeEach(() => {
    // Acessa o site antes de cada teste
    cy.visit('https://www.saucedemo.com/v1/inventory.html') // Troque pelo seu URL real
  })

    // Adiciona produtos no carrinho
it('Deve adicionar um produto ao carrinho com sucesso', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()


    // Clica no carrinho
   cy.get('#shopping_cart_container').click()
   cy.get('.subheader').contains('Your Cart')

       // Verifica se o produto está no carrinho
    cy.get('#item_4_title_link > .inventory_item_name')
    cy.get('#item_0_title_link > .inventory_item_name')
    cy.get('#item_1_title_link > .inventory_item_name')


    //Clicar no botao checkout
    cy.get('.btn_action').click()
    cy.get('.subheader').contains('Checkout: Your Information')

    // Preencher campos de informacao
    cy.get('[data-test="firstName"]').type('Kenia')
    cy.get('[data-test="lastName"]').type('Reis')
    cy.get('[data-test="postalCode"]').type('12345000')

    // Clicar no botao continue
    cy.get('.btn_primary').click()
    cy.get('.subheader').contains('Checkout: Overview')

    //Clicar no botao finish
    cy.get('.btn_action').click()
    cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER')
  })
})
