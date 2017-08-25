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
  var kenton = 16;
  var goose = 15;
  var pearlDowntown = 14;
  var build = 13;
  var toppings = [];
  var priceTotal = 0;
  $("select#selectPizza").change(function() {
    var pizzaType = $("#selectPizza").val();
    $("#outputSection").show();
    $("#sizeSection").show();
    $("#orderButton").show();

    if(pizzaType ==="Build a peetz"){
      $("#buildPizzaSection").show();
      $("#toppingsSection").show();
      priceTotal += build;
      $("#priceSection").text("$" + priceTotal);
    }else{
      $("#toppingsSection").show();
    }
    var size = $("#selectPizzaSize").val();
    var sauce = $("#selectSauce").val();
    var cheese = $("#selectCheese").val();
    var topping = $("#selectToppings").val();
  });

  $("form#orderForm").submit(function(event) {
    event.preventDefault();
  });
});
