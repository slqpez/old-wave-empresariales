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

    
}