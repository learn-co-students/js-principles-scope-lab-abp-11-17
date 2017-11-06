// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'peggy';
let favoriteCustomer = 'Alan';

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  var bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'Sue';
  return favoriteCustomer;
}
