// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'none';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
};

function setBestCustomer() {
   bestCustomer = 'not bob';
};

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
};

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'everyone';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'bob';
  let favoriteCustomer = 'another bob';
}
