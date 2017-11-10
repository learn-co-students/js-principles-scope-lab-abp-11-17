// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Daniel';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'this works? that is really weird';
}

function attemptTwoFavoriteCustomers() {
  const favoriteCustomer = 1;
  const favoriteCustomer = 1;
}
