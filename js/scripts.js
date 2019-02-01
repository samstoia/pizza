// Back End(Business)

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.priceCalculate = function(price, toppings) {
  var price = 7;
  if (this.size === 1) {
    price -= 1;
  }
  if (this.size === 2) {
    price += 1;
  }
  if (this.size === 3) {
    price += 3;
  }
  else if (this.size !== 1 && this.size !== 2 && this.size !== 3) {
    alert("YOU HAVE TO PICK A SIZE!")
  }
  for (var i=0; i < this.toppings.length; i++) {
    price += 1;
  }
  this.price = price;
  return price
}



// Front End(User)
var userToppings = [];

$(document).ready(function() {
  $("form#pizzaMenu").submit(function(event) {
    event.preventDefault();
    var userSize = parseInt($("input:radio[name=size]:checked").val());
    console.log(userSize)
    $("input:checkbox[name=topping]:checked").each(function(){
      userToppings.push($(this).val())
      console.log(userToppings)
    })
    var newPizza = new Pizza(userSize, userToppings);
    var pizzaPrice = newPizza.priceCalculate()
    });
  });
