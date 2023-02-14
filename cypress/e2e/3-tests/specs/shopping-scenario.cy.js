///<reference types="cypress" />
const { standarduser } = require('../utility/users')
const login = require('../pages/login')
const home = require('../pages/home')
const cart = require('../pages/cart')
const userinfo = require('../pages/information')
const product = require('../pages/product')
const viewcheckout = require('../pages/overview')
const result = require('../pages/complete')
const { back_pack, bike_light, bolt_shirt, jacket, onesie, red_shirt, product_count } = require('../utility/sauce-products')
// let product_names, product_details = [];

describe('End-to-end test of user shopping in Saucedemo', () => {

    beforeEach(() => {
        // cy.fixture('products')
        //   .then((products) => {
        //     product_details = products;
        //     product_names = Cypress._.map(products, 'name')
        // })
        cy.visit(Cypress.config('baseUrl'));
        login.loginIntoSauceDemo(standarduser);
        home.emptyMyShoppingCart();
    })

    it('happy path of entire transaction', function(){

        // login into saucedemo as standard user
        cy.visit(Cypress.config('baseUrl'));
        login.loginIntoSauceDemo(standarduser);

        // validate all products are displayed
        home.isProductsDisplayed();

        // add products to cart
        home.addProductToShoppingCart(back_pack.name)
        home.isProductsInCartCorrect(1);
        home.addProductToShoppingCart(bike_light.name)
        home.isProductsInCartCorrect(2);
        home.addProductToShoppingCart(bolt_shirt.name)
        home.isProductsInCartCorrect(3);

        // remove products from cart
        home.removeProductFromShoppingCart(bolt_shirt.name)
        home.isProductsInCartCorrect(2);

        // add all remaining products
        home.addProductToShoppingCart(bolt_shirt.name)
        home.isProductsInCartCorrect(3);
        home.addProductToShoppingCart(jacket.name)
        home.isProductsInCartCorrect(4);
        home.addProductToShoppingCart(onesie.name)
        home.isProductsInCartCorrect(5);

        // navigate to product
        home.navigateToProduct(red_shirt.name)
        product.validateProductDetails(red_shirt)
        product.addCurrentProductToCart();
        product.returnToInventoryPage();


        // checkout all current existing products in cart
        home.goToMyShoppingCart();
        cart.isCartCorrect(product_count)
        cart.checkoutCart();

        // provide all user information
        userinfo.fillUserInformation();
        userinfo.continueTransaction();

        // checkout overview
        viewcheckout.validatePaymentShippingInfo();
        viewcheckout.validateItemTotal();
        viewcheckout.finishTransaction();

        // validate end of transaction
        result.isTransactionCompleted();
        result.goBackToInventoryPage();
    })



})