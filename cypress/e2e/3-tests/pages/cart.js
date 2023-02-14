///<reference types="cypress" />

class Cart{

    elements = {
        continueShoppingBtn: () => cy.get('[data-test="continue-shopping"]'),
        checkoutBtn: () => cy.get('[data-test="checkout"]'),
        removeProductBtn: () => cy.get('[data-test^="remove-sauce-labs"]'),
        productInCart: () => cy.get('.inventory_item_name')
    }

    goBackToShoppingPage() {
        this.elements.continueShoppingBtn().should('be.visible').click();
    }

    checkoutCart() {
        this.elements.checkoutBtn().should('be.visible').click();
    }

    removeProductFromCart(product) {
        //Input should be name
        cy.contains(product).parentsUntil('.inventory_item_description')
          .siblings('.pricebar')
          .within(($elements) => {
            cy.contains('Remove').click();
        })

    }

    isCartCorrect(num){
        this.elements.productInCart()
            .should('have.length', num);
    }


}

module.exports = new Cart();