///<reference types="cypress" />
const { faker } = require('@faker-js/faker');

function User(username, password) {
    this.username = username,
    this.password = password
}

export const standarduser = new User(Cypress.env('STANDARD_USER'), Cypress.env('PASSWORD_USERS'));

export const lockeduser = new User(Cypress.env('LOCKED_USER'), Cypress.env('PASSWORD_USERS'));

export const problemuser = new User(Cypress.env('PROBLEM_USER'), Cypress.env('PASSWORD_USERS'));

export const glitchuser = new User(Cypress.env('PROBLEM_USER'), Cypress.env('PASSWORD_USERS'));


const fakeUserInfo = () => ({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    zipcode: faker.address.zipCode('####')
})

export const fake_user = fakeUserInfo();

// console.log(fake_user)