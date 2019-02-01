// Back End(Business)

var Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.priceShow = function(pizzaPrice) {

}


// Front End(User)

$(document).ready(function() {
  $("form#pizzaMenu").submit(function(event) {
    event.preventDefault();
    var userSize = parseInt($("input:radio[name=size]:checked").val());
    var userToppings = parseInt($("input:radio[name=toppings]:checked").val());
    var pizzaPrice = new Pizza(size, toppings);

    
  });
