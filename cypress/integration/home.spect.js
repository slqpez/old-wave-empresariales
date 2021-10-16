import Home from "./Pages/Home"


const homePage = new Home()

describe('Home page test', () => {

  it("Home can render",()=>{
    homePage.renderPage()
  })

  it("Test the cart empty",()=>{
    homePage.testEmptyCart()
  })

  it("Test search products and Add to cart",()=>{
    homePage.searchProductosAndAddToCart('televisor')
  })

  it("Test empty shopping cart",()=>{
    homePage.emptyShoppingCart('televisor')
  })

  it("Test delete from cart",()=>{
    homePage.deleteFromCart('televisor')
  })
})

