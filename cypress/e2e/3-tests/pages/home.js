///<reference types="cypress" />

class Inventory {

    elements = {
        burgerBtn: () => cy.get('#react-burger-menu-btn'),
        allItemsLink: () => cy.get('#inventory_sidebar_link'),
        aboutLink: () => cy.get('#about_sidebar_link'),
        logoutLink: () => cy.get('#logout_sidebar_link'),
        resetappLink: () => cy.get('#reset_sidebar_link'),
        goToCartBtn: () => cy.get('#shopping_cart_container > a'),
        addToCartBtns: () => cy.contains('Add to cart'),
        sortDrpdown: () => cy.get('[data-test="product_sort_container"]'),
        closeMenuBtn: () => cy.get('#react-burger-cross-btn')
    }

    navigateToAllItemsPage() {
        this.elements.burgerBtn().should('be.visible').click();
        this.elements.allItemsLink().should('be.visible').click();
    }

    navigateToAboutPage() {
        this.elements.burgerBtn().should('be.visible').click();
        this.elements.aboutLink().should('be.visible').click();
    }

    logoutFromSauceDemo() {
        this.elements.burgerBtn().should('be.visible').click();
        this.elements.logoutLink().should('be.visible').click();
    }

    emptyMyShoppingCart() {
        this.elements.burgerBtn().should('be.visible').click();
        this.elements.resetappLink().should('be.visible').click();
        this.elements.closeMenuBtn().should('be.visible').click();
    }

    goToMyShoppingCart() {
        this.elements.goToCartBtn().should('be.visible').click();
    }

    //product should be product name in sauce demo
    //Jude's note: a bit hard to traverse in dom
    addProductToShoppingCart(product) {
        //Input should be name
        cy.contains(product).parentsUntil('.inventory_item_description')
          .siblings('.pricebar')
          .within(($elements) => {
            cy.contains('Add to cart').click();
          })
    }

    removeProductFromShoppingCart(product) {
        //Input should be name
        cy.contains(product).parentsUntil('.inventory_item_description')
          .siblings('.pricebar')
          .within(($elements) => {
            cy.contains('Remove').click();
          })
    }

    isProductsInCartCorrect(num){
        cy.get('.shopping_cart_badge')
          .should('have.text', num)
    }

    sortProductsBy(option){
        switch(option) {
            case 'ascendingByName':
                this.elements.sortDrpdown().should('be.visible')
                    .select('az', {force: true})
                break;
            case 'descendingByName': 
                this.elements.sortDrpdown().should('be.visible')
                    .select('za', {force: true})
                break;
            case 'ascendingByPrice': 
                this.elements.sortDrpdown().should('be.visible')
                    .select('lohi', {force: true})
                break;
            case 'descendingByPrice': 
                this.elements.sortDrpdown().should('be.visible')
                    .select('hilo', {force: true})
                break;
        }
    }

    isProductsDisplayed(){
        cy.get('.inventory_item_label > a > div')
          .then(($el) => {
            expect($el.length).greaterThan(0)
          })
    }

    isProductsComplete(){
        cy.get('.inventory_item_name')
          .then(($cells) => {
            const displayedProducts = Cypress._.map($cells, 'innerText')
            console.log(displayedProducts)
            cy.fixture('products')
              .then((products) => {
                const productnames = Cypress._.map(products, 'name')
                expect(productnames).to.deep.equal(displayedProducts)
              })
          })
    }

    // product name as input
    navigateToProduct(product){
        cy.contains(product)
          .should('be.visible')
          .click();
    }

}

module.exports = new Inventory();