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

    
    context('valid credentials',  function(){

        it('login standard user', { tags: '@login'}, function(){
            login.loginIntoSauceDemo(standarduser);
        })

        it('login problematic user', { tags: '@login'}, function(){
            login.loginIntoSauceDemo(problemuser);
        })
    
        it('login glitched user', { tags: '@login'}, function(){
            login.loginIntoSauceDemo(glitchuser);
        })
    
        afterEach(() => {
            home.logoutFromSauceDemo();
        })
    })


    context('invalid credentials', { tags: '@login'}, function(){
        
        it('login locked out user', function(){
            login.loginIntoSauceDemo(lockeduser);
            login.isLoginFailed();
        })

    })





})