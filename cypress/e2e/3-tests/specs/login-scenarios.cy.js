///<reference types="cypress" />
const login = require('../pages/login')
const {
    standarduser,
    lockeduser,
    problemuser,
    glitchuser
} = require('../utility/users')

describe('Saucedemo Login Scenarios', () => {

    beforeEach(function() {
        cy.visit(Cypress.config('baseUrl'));
    })

    it('login standard user', function(){
        login.loginIntoSauceDemo(standarduser);
    })

    it('login locked out user', function(){
        login.loginIntoSauceDemo(lockeduser);
    })

    it('login problematic user', function(){
        login.loginIntoSauceDemo(problemuser);
    })

    it('login glitched user', function(){
        login.loginIntoSauceDemo(glitchuser);
    })


})