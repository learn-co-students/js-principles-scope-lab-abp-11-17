// Write your solution in this file!
var customerName="bob";

function upperCaseCustomerName(){
  customerName=customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer="not bob";
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer="maybe bob";
}

const leastFavoriteCustomer="bob";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer="bobby";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer="bob";
  let favoriteCustomer="bobby";
}
