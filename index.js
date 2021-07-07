// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'probably bob';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'some other person';
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'not bob';
  let favoriteCustomer = 'okay, I guess bob is okay';
}
