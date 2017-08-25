//back-end
function pizza(pizzaType,pizzaSize,cheese,sauce){
  this.pizzaType = pizzaType;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
  this.cheese = cheese;
  this.sauce = sauce;
};


//front-end
$(document).ready(function(){
  var toppings = [];
  var size = $("#selectPizzaSize").val();
  var sauce = $("#selectSauce").val();
  var cheese = $("#selectCheese").val();
  var topping = $("#selectToppings").val();
  $("select#selectPizza").change(function() {
    var pizzaType = $("#selectPizza").val();
    if(pizzaType ==="Build a peetz"){
      $("#buildPizzaSection").show();
      $("#toppingsSection").show();
    }else{
      $("#toppingsSection").show();
    }
  });

  $("form#orderForm").submit(function(event) {
    event.preventDefault();
  });
});
