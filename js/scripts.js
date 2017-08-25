//back-end
function check(box){
  if(box===true){
    box = false;
  }else if(box===false){
  box = true;
  }
  return box;
};

function getTopping(input,box,array){
  box = check(box);
  var oneTopping = $("#"+input).val();
  if(box){
    array.splice(array.indexOf(oneTopping),1);
  }else if(!box){
    array.push(oneTopping);
  }
}
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
  //pizza toppings
  var box1 = true;
  $("input#tomatoes").change(function() {
    getTopping("tomatoes",box1,toppings);
  });
  var box2 = true;
  $("input#sundried").change(function() {
    getTopping("sundried",box2,toppings);
    alert(toppings);
  });
  var box3 = true;
  $("input#onions").change(function() {
    getTopping("onions",box3,toppings);
  });
  var box4 = true;
  $("input#tempeh").change(function() {
    getTopping("tempeh",box4,toppings);
  });
  var box5 = true;
  $("input#peppers").change(function() {
    getTopping("peppers",box5,toppings);
  });
  var box6 = true;
  $("input#jalapenos").change(function() {
    getTopping("jalapenos",box6,toppings);
  });
  var box7 = true;
  $("input#basil").change(function() {
    getTopping("basil",box7,toppings);
  });
  var box8 = true;
  $("input#garlic").change(function() {
    getTopping("garlic",box8,toppings);
  });
  var box9 = true;
  $("input#tofu").change(function() {
    getTopping("tofu",box9,toppings);
  });

  $("form#orderForm").submit(function(event) {
    event.preventDefault();
  });
});
