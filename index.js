// Write your solution in this file!
customerName = 'bob'

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(name){
  bestCustomer = name
}

const leastFavoriteCustomer = 'judy'

function changeLeastFavoriteCustomer(name){
  leastFavoriteCustomer = name
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = customerName
  let favoriteCustomer = 'judy'
}
