// Write your solution in this file!
var customerName='bob';
const leastFavoriteCustomer='leastFav';

function upperCaseCustomerName(){
  customerName=customerName.toUpperCase();
  return customerName;
}
function setBestCustomer(){
  bestCustomer='not bob';
  return bestCustomer;
}
function overwriteBestCustomer(){
  bestCustomer='maybe bob';
  return bestCustomer;
}
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer='newLeast';
  return leastFavoriteCustomer;
}
function attemptTwoFavoriteCustomers(){
  let favoriteCustomer='jim';
  let favoriteCustomer='bob';
  return favoriteCustomer;
}
