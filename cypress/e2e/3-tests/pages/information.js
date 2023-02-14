///<reference types="cypress" />
const  { fake_user } = require('../utility/users')

class Checkout_Information{

    elements = {
        firstnameTxtbx: () => cy.get('#first-name'),
        lastnameTxtbx: () => cy.get('#last-name'),
        zipcodeTxtbx: () => cy.get('#postal-code'),
        cancelBtn: () => cy.get('#cancel'),
        continueBtn: () => cy.get('#continue')
    }

    fillUserInformation() {
        //need faker to create user info
        // cy.log(fake_user)
        this.elements.firstnameTxtbx().should('be.visible')
            .type(fake_user.firstname)
            .should('have.value', fake_user.firstname)
        this.elements.lastnameTxtbx().should('be.visible')
            .type(fake_user.lastname)
            .should('have.value', fake_user.lastname)
        this.elements.zipcodeTxtbx().should('be.visible')
            .type(fake_user.zipcode)
            .should('have.value', fake_user.zipcode)
    }

    cancelTransaction() {
        this.elements.cancelBtn().should('be.visible').click();
    }

    continueTransaction(){
        this.elements.continueBtn().should('be.visible').click();
    }

    isCartEmpty(){
        this.elements.firstnameTxtbx().should('not.be.visible');
    }

}

module.exports = new Checkout_Information()