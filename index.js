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

const leastFavoriteCustomer = "john";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "dave";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "bill";
  let favoriteCustomer = "phil";
}
