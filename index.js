// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "also not bob";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "or is it bob?";
}

// test isn't passing, but is throwing a SyntaxError, as expected
function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "still not bob";
  let favoriteCustomer = "no way is it bob";
}
