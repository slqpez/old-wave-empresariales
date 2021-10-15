 /// <reference types="Cypress"/>

 export default class Detail{

    constructor(){
      beforeEach(()=>{
        cy.visit("http://localhost:3000/products/televisor/Televisor/undefined/1")
      })
    }

    renderPage(){
        cy.get("[data-cy= container-products]")
        cy.get("[data-cy= img-detail]")
      } 

    addProductToCart(){
        cy.get("[data-cy= btn-detail-add]").click()
        cy.get('[data-cy= cart-icon]').click()
        cy.get('[data-cy= cart-list]').should('not.contain.text','no tienes productos agregados')
    }
}
