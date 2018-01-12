// Write your solution in this file!

var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'jack';

function upperCaseCustomerName(){
  customerName = 'BOB';
  return customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'dean';
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'billy';
  let favoriteCustomer = 'billy';
}
