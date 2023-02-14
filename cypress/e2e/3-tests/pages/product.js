///<reference types="cypress" />

class Product{

    elements = {
        backToInventoryBtn: () => cy.get('#back-to-products'),
        productNameTxt: () => cy.get('div[class^="inventory_details_name"]'),
        productDescTxt: () => cy.get('.inventory_details_desc_container > div:nth-child(2)'),
        productPriceTxt: () => cy.get('div[class^="inventory_details_price"]'),
        addToCartBtn: () => cy.get('button[id^="add-to-cart"]'),
        removeFromCartBtn: () => cy.get('button[id^="remove-sauce-labs"]')
    }

    // array of product details as input
    validateProductDetails(product){
        this.elements.productNameTxt()
            .should('have.text', product.name)
        this.elements.productDescTxt()
            .should('have.text', product.description)
        this.elements.productPriceTxt()
            .should('have.text', product.price)
    }
    
    addCurrentProductToCart() {
        this.elements.addToCartBtn().should('be.visible').click();
    }

    removeCurrentProductFromCart() {
        this.elements.removeFromCartBtn().should('be.visible').click();
    }

    returnToInventoryPage() {
        this.elements.backToInventoryBtn().should('be.visible').click();
    }

}

module.exports = new Product();