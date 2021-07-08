var customerName = 'bob';
const leastFavoriteCustomer = 'sour fred';

function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newGuy) {
  bestCustomer = newGuy;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'sour fred';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'bar';
  let favoriteCustomer = 'not bar';
}
