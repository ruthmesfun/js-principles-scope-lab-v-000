// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName
}

var bestCustomer;

function setBestCustomer(){
  bestCustomer = "not bob"
  return bestCustomer
}

function overwriteBestCustomer(){
  bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer(){
  const leastFavoriteCustomer = "bob";
  leastFavoriteCustomer = "john";

  return leastFavoriteCustomer;
}
