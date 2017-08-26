//back-end
function check(box){
  if(box===true){
    box = false;
  }else if(box===false){
  box = true;
  }
  return box;
};

function getTopping(input,box,array,toppingPrice){
  box = box;
  box = check(box);
  var oneTopping = $("#"+input).val();
  if(box){
    array.splice(array.indexOf(oneTopping),1);
  }else if(!box){
    array.push(oneTopping);
  }
  return box;
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

  var initialTotal = 0;
  var sizeTotal = 0;
  var toppingTotal = 0;
  var sauceTotal = 0;
  var cheeseTotal = 0;

  var pizzaType;
  var sauce = $("#selectSauce").val();
  var cheese = $("#selectCheese").val();
  var topping = $("#selectToppings").val();

  //pizza type
  $("select#selectPizza").change(function() {
    pizzaType = $("#selectPizza").val();
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
    sizeTotal = initialTotal;
  });
  var sizeTotal = initialTotal;
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
    box1 = getTopping("tomatoes",box1,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));
  });
  var box2 = true;
  $("input#sundried").change(function() {
    box2 = getTopping("sundried",box2,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));

  });
  var box3 = true;
  $("input#onions").change(function() {
    box3 = getTopping("onions",box3,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));

  });
  var box4 = true;
  $("input#tempeh").change(function() {
    box4 = getTopping("tempeh",box4,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));

  });
  var box5 = true;
  $("input#peppers").change(function() {
    box5 = getTopping("peppers",box5,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));

  });
  var box6 = true;
  $("input#jalapenos").change(function() {
    box6 = getTopping("jalapenos",box6,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));

  });
  var box7 = true;
  $("input#basil").change(function() {
    box7 = getTopping("basil",box7,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));

  });
  var box8 = true;
  $("input#garlic").change(function() {
    box8 = getTopping("garlic",box8,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));

  });
  var box9 = true;
  $("input#tofu").change(function() {
    box9 = getTopping("tofu",box9,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));

  });

  $("select#selectSauce").change(function() {
    sauce = $("#selectSauce").val();
    if(sauce === "Pesto sauce (+ $3)"){
      sauceTotal = 3;
    }else if(sauce === "Tomatoe red sauce"){
      sauceTotal = 0;
    }
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));
  });

  $("select#selectCheese").change(function() {
    sauce = $("#selectCheese").val();
    if(sauce === "Pesto sauce (+ $3)"){
      sauceTotal = 3;
    }else if(sauce === "Tomatoe red sauce"){
      sauceTotal = 0;
    }
    $("#priceSection").text("$" + (sizeTotal+toppingTotal+sauceTotal));
  });

  $("form#orderForm").submit(function(event) {
    event.preventDefault();
  });
});
