///<reference types="cypress" />
const {
    standarduser,
    glitchuser
} = require('../utility/users')
const login = require('../pages/login')
const home = require('../pages/home')
const cart = require('../pages/cart')
const userinfo = require('../pages/information')
const { back_pack, bike_light } = require('../utility/sauce-products')

describe('Edge case scenarios to automate', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
        login.loginIntoSauceDemo(standarduser);
        home.emptyMyShoppingCart();
    })

    it('Checkout with empty cart', function(){
        home.goToMyShoppingCart();
        cart.checkoutCart()
        userinfo.isCartEmpty();
    })

    it('Caching of cart per user', function(){

        // login as user 1
        cy.session('user 1', () => {
            cy.visit(Cypress.config('baseUrl'));
            login.loginIntoSauceDemo(standarduser);
            home.addProductToShoppingCart(back_pack.name);
            home.isProductsInCartCorrect(1);
            home.logoutFromSauceDemo();
        })

        // login as user 2
        cy.session('user 2', () => {
            cy.visit(Cypress.config('baseUrl'));
            login.loginIntoSauceDemo(glitchuser);
            home.emptyMyShoppingCart();
            home.addProductToShoppingCart(back_pack.name);
            home.isProductsInCartCorrect(1);
            home.addProductToShoppingCart(bike_light.name);
            home.isProductsInCartCorrect(2);
            home.logoutFromSauceDemo()
        })

    })


})