///<reference types="cypress" />

class Checkout_Complete {

    elements = {
        homeBtn: () => cy.get('#back-to-products'),
        transactionResultTxt: () => cy.get('.complete-header')
    }

    isTransactionCompleted(){
        this.elements.transactionResultTxt()
            .should('be.visible')
            .should('have.text', 'THANK YOU FOR YOUR ORDER');
    }

    goBackToInventoryPage(){
        this.elements.homeBtn().should('be.visible').click();
    }

}

module.exports = new Checkout_Complete();