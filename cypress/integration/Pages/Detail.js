 /// <reference types="Cypress"/>

 export default class Detail{

    constructor(){
      
    }

    renderPage(){
      cy.visit("https://dsmf08fndc06u.cloudfront.net/Televisor/7/1")
        cy.get("[data-cy= container-products]")
        cy.get("[data-cy= img-detail]")
      } 

    addProductToCart(){
      cy.visit("https://dsmf08fndc06u.cloudfront.net/products/televisor/Televisor/7/1")
        cy.get("[data-cy= btn-detail-add]").click()
        cy.get('[data-cy= cart-icon]').click()
        cy.get('[data-cy= cart-list]').should('not.contain.text','Aún no tienes productos agregados...😓')
    }
}
