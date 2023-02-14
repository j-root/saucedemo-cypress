///<reference types="cypress" />
const home = require('../pages/home')
const { standarduser } = require('../utility/users')
const login = require('../pages/login')


describe('Sort products multiple ways', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
        login.loginIntoSauceDemo(standarduser);
        home.isProductsDisplayed();
    })

    it('validate all products', function(){
        home.isProductsComplete();
    })

    it('sort ascending by name', function(){
        home.sortProductsBy('ascendingByName');
    })

    it('sort descending by name', function(){
        home.sortProductsBy('descendingByName');
    })

    it('sort ascending by price', function(){
        home.sortProductsBy('ascendingByPrice');
    })

    it('sort descending by price', function(){
        home.sortProductsBy('descendingByPrice');
    })

})