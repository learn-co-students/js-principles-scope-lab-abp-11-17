// * `customerName`: Declare a variable in global scope called `customerName` using the `var` keyword.
// * `upperCaseCustomerName()`: Write a function that accesses that global `customerName` variable, and uppercases it.
// * `setBestCustomer()`: Write a function that when called, declares a variable called `bestCustomer` in global scope and assigns it to be `'not bob'`. (Poor Bob.) Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.
// * `overwriteBestCustomer()`: See the consequences of declaring a variable in global scope, by writing a new function called `overwriteBestCustomer()` that changes that `bestCustomer` variable.
// * `leastFavoriteCustomer` and `changeLeastFavoriteCustomer()`: Now declare a constant in global scope called `leastFavoriteCustomer`, be sure to assign it some initial value. Ok, now write a function called `changeLeastFavoriteCustomer()` that attempts to change that constant - notice what JavaScript does when you try to change the constant.
// * `attemptTwoFavoriteCustomers()`: Now write another function that will break down. Try declaring a variable called `favoriteCustomer` and redeclaring that same variable such that an error is thrown. This helps illustrate how `let` only allows a given variable to be declared one time, but that variable can be reassigned to a different value. However, `const` does not allow reassignment, nor does it allow the same constant to be declared more than once.

var customerName = "bob";

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

const leastFavoriteCustomer = "jane";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "luigi"
  let favoriteCustomer = "mario";
}
