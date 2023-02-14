///<reference types="cypress" />
const { back_pack, bike_light, bolt_shirt, jacket, onesie, red_shirt, product_count } = require('../utility/sauce-products')
let prices = [];

class Checkout_Overview{

    elements = {
        paymentInfoTxt: () => cy.contains('Payment Information:').next(),
        shippingInfoTxt: () => cy.contains('Shipping Information:').next(),
        subtotalTxt: () => cy.get('.summary_subtotal_label'),
        taxtotalTxt: () => cy.get('.summary_tax_label'),
        totalTxt: () => cy.get('.summary_total_label'),
        cancelBtn: () => cy.get('#cancel'),
        finishBtn: () => cy.get('#finish')
    }

    validatePaymentShippingInfo() {
        this.elements.paymentInfoTxt().should('have.text', 'SauceCard #31337');
        this.elements.shippingInfoTxt().should('have.text', 'FREE PONY EXPRESS DELIVERY!');
    }

    cancelTransaction() {
        this.elements.cancelBtn().should('be.visible').click();
    }

    finishTransaction(){
        this.elements.finishBtn().should('be.visible').click();
    }

    validateItemTotal() {
        let subtotal = getSumOfProducts();
        console.log('Subtotal is: ' + subtotal)
        this.elements.subtotalTxt().should('be.visible')
            .should('contain.text', getSumOfProducts());
        this.elements.taxtotalTxt().should('be.visible')
            .should('contain.text', calculateTax())
        this.elements.totalTxt().should('be.visible')
            .should('contain.text', getTotalPurchase())
    }

}

function getSumOfProducts() {
    let backpack_price = parseFloat(String(back_pack.price).slice(1));
    let bikelight_price = parseFloat(String(bike_light.price).slice(1));
    let boltshirt_price = parseFloat(String(bolt_shirt.price).slice(1));
    let jacket_price = parseFloat(String(jacket.price).slice(1));
    let onesie_price = parseFloat(String(onesie.price).slice(1));
    let redshirt_price = parseFloat(String(red_shirt.price).slice(1));
    return backpack_price + bikelight_price + boltshirt_price + jacket_price + onesie_price + redshirt_price;
}

function calculateTax() {
    let subtotal = getSumOfProducts()
    let tax = (subtotal / 100) * 8;
    return Math.round(tax * 100) / 100
}

function getTotalPurchase(){
    return getSumOfProducts() + calculateTax();
}

module.exports = new Checkout_Overview()