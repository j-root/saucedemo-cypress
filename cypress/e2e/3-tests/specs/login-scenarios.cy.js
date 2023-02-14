///<reference types="cypress" />
const login = require('../pages/login')
const {
    standarduser,
    lockeduser,
    problemuser,
    glitchuser
} = require('../utility/users')
const home = require('../pages/home')

describe('Saucedemo Login Scenarios', () => {

    beforeEach(function() {
        cy.visit(Cypress.config('baseUrl'));
    })

    context('valid credentials', function(){

        it('login standard user', function(){
            login.loginIntoSauceDemo(standarduser);
        })

        it('login problematic user', function(){
            login.loginIntoSauceDemo(problemuser);
        })
    
        it('login glitched user', function(){
            login.loginIntoSauceDemo(glitchuser);
        })
    
        afterEach(() => {
            home.logoutFromSauceDemo();
        })
    })


    context('invalid credentials', function(){
        
        it('login locked out user', function(){
            login.loginIntoSauceDemo(lockeduser);
            login.isLoginFailed();
        })

    })





})