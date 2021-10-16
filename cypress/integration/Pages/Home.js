 /// <reference types="Cypress"/>

 export default class Home{

  constructor(){
    beforeEach(()=>{
      cy.visit("http://localhost:3000")
    })
  }

   renderPage(){
     cy.get("input")
     cy.get("[data-cy= btn-login]").contains("Regístrate o inicia sesión")
     cy.get("[data-cy= input-search]")
   } 

   testEmptyCart(){
      
      cy.get('[data-cy= cart-icon]').click()
      cy.get('[data-cy= cart-list]').should('contain.text','no tienes productos agregados')
      cy.get('[data-cy= cart-icon]').click()
      
   }

   searchProductosAndAddToCart(productName){
      cy.get('[data-cy= input-search]').type(`${productName}`+ '{enter}')
      cy.wait(2000)
      cy.get('[data-cy= card-product]').first().within(()=>{
          cy.get('[data-cy= img-card]').should('be.visible')
          cy.get('[data-cy= btn-add-product]').should('contain.text','Agregar al carrito').click()            
      })
      cy.get('[data-cy= cart-icon]').click()
      
      cy.get('[data-cy= cart-list]').should('not.contain.text','no tienes productos agregados')
   }

   emptyShoppingCart(productName){
    cy.get('[data-cy= input-search]').type(`${productName}`+ '{enter}')
    cy.wait(2000)
    cy.get('[data-cy= card-product]').first().within(()=>{
        cy.get('[data-cy= img-card]').should('be.visible')
        cy.get('[data-cy= btn-add-product]').should('contain.text','Agregar al carrito').click()            
    })
     cy.get('[data-cy= cart-icon]').click()
     cy.get('[data-cy= btn-empty-cart]').click()
     cy.get('[data-cy= cart-list]').should('contain.text','no tienes productos agregados')
   }

   deleteFromCart(productName){
    cy.get('[data-cy= input-search]').type(`${productName}`+ '{enter}')
    cy.wait(2000)
    cy.get('[data-cy= card-product]').first().within(()=>{
        cy.get('[data-cy= img-card]').should('be.visible')
        cy.get('[data-cy= btn-add-product]').should('contain.text','Agregar al carrito').click()            
    })
     cy.get('[data-cy= cart-icon]').click()
     cy.get('[data-cy= btn-delete-cart]').click()
     cy.get('[data-cy= cart-list]').should('contain.text','no tienes productos agregados')
   }

    
}