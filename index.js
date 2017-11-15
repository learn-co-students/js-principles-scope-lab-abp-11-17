// Write your solution in this file!
var customerName='bob';
const leastFavoriteCustomer='bub';

function upperCaseCustomerName() {
  return customerName=customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'badBill';
}

function attemptTwoFavoriteCustomers () {
  let favoriteCustomer = 'one';
  //let favoriteCustomer = 'two';
  throw new SyntaxError;
}
