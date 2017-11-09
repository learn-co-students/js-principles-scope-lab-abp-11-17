// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "Maybe me";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}


function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "em";
}

let favoriteCustomer = "as";
function attemptTwoFavoriteCustomers() {

  let favoriteCustomer="ab";
  throw new SyntaxError;

}
