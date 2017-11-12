var customerName = 'bob';

function upperCaseCustomerName()
{
     customerName = customerName.toUpperCase();
}// Write your solution in this file!

function setBestCustomer()
{
  bestCustomer = 'not bob';
}

function overwriteBestCustomer()
{
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Prem';
function changeLeastFavoriteCustomer()
{
  leastFavoriteCustomer = 'Ryan';
}

let favoriteCustomer = 'Prem';
function attemptTwoFavoriteCustomers()
{
 let favoriteCustomer = 'Rachel';
 throw new SyntaxError;
}
