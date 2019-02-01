// Back End(Business)

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.priceShow = function(pizzaPrice) {

}


// Front End(User)
var userToppings = [];

$(document).ready(function() {
  $("form#pizzaMenu").submit(function(event) {
    event.preventDefault();
    var userSize = parseInt($("input:radio[name=size]:checked").val());
    console.log(userSize)
    $("input:checkbox[name=topping]:checked").each(function(){
      userToppings.push($(this).val());
      console.log(userToppings)
    })
    var pizzaPrice = new Pizza(userSize, userToppings);
    });
  });
