This repository is an test assessment exercise for the system under test: https://www.saucedemo.com/

*** Author: Jude Bordallo ***

*** TEST CASES ***
//TODO: need steps and expected results on below
UI: validate products are complete
Navigation: end to end lifecycle of shopping
Functional: filtering/sorting scenarios
Edge: caching of cart when checkout is delayed

*** Bugs discovery ***
//TODO: need additional details like steps to reproduce and evidence
1. Checkout without an item in cart
2. Enter spaces in details
3. 404 page when going to 'About' page with problem_user
4. Reset app state removes items from cart but does not reset the functionality of adding products into cart
5. Images loaded with problem_user is different from standard_user
6. problem_user => filter/sort is not working
7. checkout overview doesn't show personal details entered 

*** Scenarios to be automated ***
1. login/logout scenarios
2. shopping scenarios
3. sorting products in inventory

*** Out-of-scope scenarios in automation ***
1. no api connections in login and checkout
2. add/update/delete products in store
3. validating purchase confirmation sent to customer


*** How to install ***
1. git clone the repository to local machines
2. npm install
3. npx cypress open 
4. run spec files