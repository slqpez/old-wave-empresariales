import Detail from "./Pages/Detail"


const detailPage = new Detail()

describe('Detail page test', ()=> {

    it('Render detail page',()=>{
        detailPage.renderPage()
    })

    it('Test add to cart from detail', () =>{
        detailPage.addProductToCart()
    })
})