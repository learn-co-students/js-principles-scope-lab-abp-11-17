
var customerName = 'bob';

//function upperCaseCustomerName(customerName) {
//  console.log (`${customerName}`.toUpperCase())
//}
//function upperCaseCustomerName(customerName) {
//return `${customerName}`.toUpperCase()
//}
function upperCaseCustomerName() {
customerName = 'BOB'
}

// in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer= 'not bob'
}

function overwriteBestCustomer(){
  bestCustomer= 'maybe bob'
  }

  const leastFavoriteCustomer = "mike"

  function changeLeastFavoriteCustomer() {
      leastFavoriteCustomer = "mikey";
  }

  function attemptTwoFavoriteCustomers(){
    let FavoriteCustomers= "mikey"
    let FavoriteCustomers= "mikey2"
  }
