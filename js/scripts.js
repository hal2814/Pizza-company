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

  var sizetotal = 0;
  var initialTotal = 0;
  var toppingTotal = 0;

  var sauce = $("#selectSauce").val();
  var cheese = $("#selectCheese").val();
  var topping = $("#selectToppings").val();

  //pizza type
  $("select#selectPizza").change(function() {
    var pizzaType = $("#selectPizza").val();
    $("#outputSection").show();
    $("#sizeSection").show();
    $("#orderButton").show();

    if(pizzaType ==="Build a peetz"){
      $("#buildPizzaSection").show();
      $("#toppingsSection").show();
      initialTotal = build;
      $("#priceSection").text("$" + initialTotal);
    }else{
      $("#toppingsSection").show();
    }
    if(pizzaType ==="The Kenton"){
      initialTotal = kenton;
      $("#priceSection").text("$" + initialTotal);
    }
    if(pizzaType ==="The Goose Hollow"){
      initialTotal = goose;
      $("#priceSection").text("$" + initialTotal);
    }
    if(pizzaType ==="The Pearl" || pizzaType ==="The Downtown"){
      initialTotal = pearlDowntown;
      $("#priceSection").text("$" + initialTotal);
    }
  });
  //pizza size
  $("select#selectPizzaSize").change(function() {
    var size = $("#selectPizzaSize").val();
    if(size==="Medium (15 inch pie + $6)"){
      sizeTotal = initialTotal +6;
      $("#priceSection").text("$" + sizeTotal);
    }else if(size==="Large (18 inch pie + $11)"){
      sizeTotal =initialTotal +11;
      $("#priceSection").text("$" + sizeTotal);
    }else{
      sizeTotal =initialTotal;
      $("#priceSection").text("$" + sizeTotal);
    }
  });
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
  });
});
