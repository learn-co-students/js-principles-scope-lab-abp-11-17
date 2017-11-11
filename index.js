/* jshint esversion: 6 */

var customerName = 'bob';

function upperCaseCustomerName(name) {
  customerName = customerName.toUpperCase();
}

function setBestCustomer(name) {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'kerpal';

function changeLeastFavoriteCustomer(name) {
  leastFavoriteCustomer = 'abtar';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'mike';
  let favoriteCustomer = 'susan';
}
