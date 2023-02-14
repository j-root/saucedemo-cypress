///<reference types="cypress" />

class Login {

    elements = {
        usernameTxtbx: () => cy.get('#user-name'),
        passwordTxtbx: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    loginIntoSauceDemo(user) {
        this.elements.usernameTxtbx().type(user.username)
            .should('have.value', user.username);
        this.elements.passwordTxtbx().type(user.password)
            .should('have.value', user.password)
        this.elements.loginBtn()
            .should('be.visible')
            .click();
    }

    isLoginFailed(){
        this.elements.errorMessage().should('be.visible')
    }

}

module.exports = new Login();