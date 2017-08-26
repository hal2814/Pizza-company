//back-end

function price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal){
  $("#priceSection").text("$" + (initialTotal+sizeTotal+toppingTotal+sauceTotal+cheeseTotal));
  return initialTotal+sizeTotal+toppingTotal+sauceTotal+cheeseTotal;
}

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

function pizza(pizzaType,pizzaSize,cheese,sauce,price){
  this.pizzaType = pizzaType;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
  this.cheese = cheese;
  this.sauce = sauce;
  this.price = price;
};

pizza.prototype.saveToppings = function (array) {
  for(var i=0;i<array.length;++i){
    this.toppings.push(array[i]);
  }
};

pizza.prototype.printPeetz = function () {
  return "<p>Your order for a "+pizza.pizzaSize+" "+pizza.pizzaType+", "+pizza.toppings+"</p><p>Your account has been charged $<u>"+pizza.price+"</u></p><p>Your order will be ready in approximately 45 minutes</p>";
};

pizza.prototype.pizzaTypePrint = function(){
  return this.pizzaType;
};
pizza.prototype.pizzaSizePrint = function(){
  return this.pizzaSize;
};
pizza.prototype.toppingsPrint = function(){
  return this.toppings;
};
pizza.prototype.cheesePrint = function(){
  return this.cheese;
};
pizza.prototype.saucePrint = function(){
  return this.sauce;
};
pizza.prototype.pricePrint = function(){
  return this.price;
};


function receiptBuild(section,pizza) {
  alert("order placed!");
  $("#"+section).append("<p>Your order for a "+pizza.pizzaSize+" "+pizza.pizzaType+" with "+pizza.cheese+", "+pizza.sauce+", "+pizza.toppings+"</p><p>Your account has been charged $<u>"+pizza.price+"</u></p><p>Your order will be ready in approximately 45 minutes</p>");
};

// pizza.prototype.receiptBuild = function (section) {
//   alert("order placed!");
//   $("#"+section).append("<p>Your order for a "+this.pizzaSize+" "+this.pizzaType+" with "+this.cheese+", "+this.sauce+", "+this.toppings+"</p><p>Your account has been charged $<u>"+this.price+"</u></p><p>Your order will be ready in approximately 45 minutes</p>");
// };

function receipt(section, pizza) {
  alert("order placed!");
  $("#"+section).append("<p>Your order for a "+pizza.pizzaSize+" "+pizza.pizzaType+", "+pizza.toppings+"</p><p>Your account has been charged $<u>"+pizza.price+"</u></p><p>Your order will be ready in approximately 45 minutes</p>");
};

// pizza.prototype.receipt = function (section) {
//   alert("order placed!");
//   $("#"+section).append("<p>Your order for a "+this.pizzaSize+" "+this.pizzaType+", "+this.toppings+"</p><p>Your account has been charged $<u>"+this.price+"</u></p><p>Your order will be ready in approximately 45 minutes</p>");
// };

//front-end
$(document).ready(function(){
  var kenton = 16;
  var goose = 15;
  var pearlDowntown = 14;
  var build = 9;
  var toppings = [];

  var initialTotal = 0;
  var sizeTotal = 0;
  var toppingTotal = 0;
  var sauceTotal = 0;
  var cheeseTotal = 0;

  var pizzaType;
  var size = "Small (13 inch pie)";
  var sauce = "Tomatoe red sauce";
  var cheese = "Housemade cashew Mozz";
  //var topping;

  //select type of pizza
  $("select#selectPizza").change(function() {
    pizzaType = $("#selectPizza").val();
    $("#outputSection").show();
    $("#sizeSection").show();
    $("#orderButton").show();

    if(pizzaType ==="Build a peetz"){
      $("#buildPizzaSection").show();
      $("#toppingsSection").show();
      initialTotal = build;
      price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
    }else{
      $("#toppingsSection").show();
    }
    if(pizzaType ==="The Kenton"){
      initialTotal = kenton;
      price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
    }
    if(pizzaType ==="The Goose Hollow"){
      initialTotal = goose;
      price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
    }
    if(pizzaType ==="The Pearl" || pizzaType ==="The Downtown"){
      initialTotal = pearlDowntown;
      price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
    }
  });

  //select size
  $("select#selectPizzaSize").change(function() {
    size = $("#selectPizzaSize").val();
    if(size==="Medium (15 inch pie + $6)"){
      sizeTotal = 6;
      price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
    }else if(size==="Large (18 inch pie + $11)"){
      sizeTotal = 11;
      price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
    }else if(size==="Small (13 inch pie)"){
      sizeTotal = 0;
      price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
    }
  });
  //select toppings
  var box1 = true;
  $("input#tomatoes").change(function() {
    box1 = getTopping("tomatoes",box1,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
  });
  var box2 = true;
  $("input#sundried").change(function() {
    box2 = getTopping("sundried",box2,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);

  });
  var box3 = true;
  $("input#onions").change(function() {
    box3 = getTopping("onions",box3,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);

  });
  var box4 = true;
  $("input#tempeh").change(function() {
    box4 = getTopping("tempeh",box4,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);

  });
  var box5 = true;
  $("input#peppers").change(function() {
    box5 = getTopping("peppers",box5,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);

  });
  var box6 = true;
  $("input#jalapenos").change(function() {
    box6 = getTopping("jalapenos",box6,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);

  });
  var box7 = true;
  $("input#basil").change(function() {
    box7 = getTopping("basil",box7,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);

  });
  var box8 = true;
  $("input#garlic").change(function() {
    box8 = getTopping("garlic",box8,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);

  });
  var box9 = true;
  $("input#tofu").change(function() {
    box9 = getTopping("tofu",box9,toppings,toppingTotal);
    toppingTotal = (toppings.length * 2);
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);

  });
//select sauce
  $("select#selectSauce").change(function() {
    sauce = $("#selectSauce").val();
    if(sauce === "Pesto sauce (+ $3)"){
      sauceTotal = 3;
    }else if(sauce === "Tomatoe red sauce"){
      sauceTotal = 0;
    }
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
  });
//select cheese
  $("select#selectCheese").change(function() {
    cheese = $("#selectCheese").val();
    if(cheese === "Follow Your Heart (+ $1)" || cheese === "Diaya (+ $1)"){
      cheeseTotal = 1;
    }else if(cheese === "Housemade cashew Mozz"){
      cheeseTotal = 0;
    }
    price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal);
  });
//place order
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    var pizzaOrdered = new pizza(pizzaType,size,cheese,sauce,price(initialTotal,sizeTotal,toppingTotal,sauceTotal,cheeseTotal));
    pizzaOrdered.saveToppings(toppings);
    if(pizzaType !== "Build a peetz"){
      $("#receiptSection").append("<h3>You ordered:</h3><p> "+pizzaOrdered.pizzaSizePrint()+" "+pizzaOrdered.pizzaTypePrint()+" with toppings of "+pizzaOrdered.toppingsPrint()+"</p><p>Your account has been charged $<u>"+pizzaOrdered.pricePrint()+".00</u></p><p>Your order will be ready in approximately 45 minutes</p>");
    }else{
      $("#receiptSection").append("<h3>You ordered:</h3><p> "+pizzaOrdered.pizzaSizePrint()+" "+pizzaOrdered.pizzaTypePrint()+" with "+pizzaOrdered.cheesePrint()+", "+pizzaOrdered.saucePrint()+", "+pizzaOrdered.toppingsPrint()+"</p><p>Your account has been charged $<u>"+pizzaOrdered.pricePrint()+".00</u></p><p>Your order will be ready in approximately 45 minutes</p>");
    }
  });
});
