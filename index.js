// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer() {
  return bestCustomer = 'not bob';
}

function overwriteBestCustomer(customer) {
  return bestCustomer = customer;
}

const leastFavoriteCustomer = 'me';

function changeLeastFavoriteCustomer() {
  return leastFavoriteCustomer = 'Joe';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'Sam';
  let favoriteCustomer = 'Jack';
}
