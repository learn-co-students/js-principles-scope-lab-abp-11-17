// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'tony';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

function attemptTwoFavoriteCustomers() {
  const favoriteCustomer = 'steve';
  let favoriteCustomer = 'jim';
}
