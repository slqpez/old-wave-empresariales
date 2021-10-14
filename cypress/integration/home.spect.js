import Home from "./Pages/Home"


const homePage = new Home()

describe('Home page test', () => {

it("Home can render",()=>{
  homePage.renderPage()
})
})