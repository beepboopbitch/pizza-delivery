
function Order() {
  this.orders = [];
  this.orderId = 0;
}

Order.prototype.addOrder = function(order) {
  order.id = this.assignId();
  this.orders.push(order);
}

Order.prototype.assignId = function() {
  this.orderId += 1;
  return this.orderId;
}

Order.prototype.findOrder = function (id) {
  for (var i = 0; i < this.orders.length; i++) {
    if (this.orders[i]) {
      if(this.orders[i].id == id) {
        return this.orders[i];
      }
    }
  }
  return false;
}

function Pizza(name, sauce, cheese, meatTopping, vegTopping, size) {
  this.name = name;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meatTopping = meatTopping;
  this.vegTopping = vegTopping;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.addSizePrice = function() {
  if(this.size === "ExtraLarge"){
    this.price += 20;
  } else if (this.size === "Large") {
    this.price += 15;
  } else if (this.size === "Medium") {
    this.price += 11;
  } else if (this.size === "Small") {
    this.price += 8;
  }
  return this.price
}

Pizza.prototype.addSaucePrice = function() {
  if(this.sauce === "RedSauce"){
    this.price += 1;
  } else if (this.sauce === "GarlicSauce") {
    this.price += 4;
  } else if (this.sauce === "BBQSauce") {
    this.price += 3;
  } else if (this.sauce === "None") {
    this.price += 0;
  }
  return this.price
}

Pizza.prototype.addCheesePrice = function() {
  if(this.cheese === "Provolone"){
    this.price += 3;
  } else if (this.cheese === "Parmigian") {
    this.price += 1;
  } else if (this.cheese === "Cheddar") {
    this.price += 2;
  } else if (this.cheese === "None") {
    this.price += 0;
  }
  return this.price
}

Pizza.prototype.addMeatToppingPrice = function() {
  if(this.meatTopping === "Chicken"){
    this.price += 5;
  } else if (this.meatTopping === "Beef") {
    this.price += 6;
  } else if (this.meatTopping === "Anchovy") {
    this.price += 7;
  } else if (this.meatTopping === "Pepperoni") {
    this.price += 2;
  } else if (this.meatTopping === "None") {
    this.price += 0;
  }
  return this.price
}

Pizza.prototype.addVegToppingPrice = function() {
  if(this.vegTopping === "Olive"){
    this.price += 2;
  } else if (this.vegTopping === "Spinach") {
    this.price += 3;
  } else if (this.vegTopping === "Basil") {
    this.price += 2;
  } else if (this.vegTopping === "Artichoke") {
    this.price += 4;
  } else if (this.vegTopping === "None") {
    this.price += 0;
  }
  return this.price
}



function displayOrder(orderDisplay) {

  var orders = $("ul#orders");
  var orderInfo = "";
  orderDisplay.orders.forEach(function(order) {
    orderInfo += "<li id=" + order.id + ">" + order.name + ""
  });
  orders.html(orderInfo)
}

var order = new Order();

function showOrder (orderId) {
  var pizza = order.findOrder(orderId);
  $("#show-order").show();
  $(".name").html(pizza.name);
  $(".sauce").html(pizza.sauce);
  $(".cheese").html(pizza.cheese);
  $(".meatTopping").html(pizza.meatTopping);
  $(".vegTopping").html(pizza.vegTopping);
  $(".size").html(pizza.size);
  $(".price").html( "$" + pizza.price);
}

function attachOrder() {
  $("ul#orders").on("click", "li", function() {
    showOrder(this.id)
  });
}

$(document).ready(function() {
  attachOrder();
  $("form#newPizza").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#newName").val();
    var inputtedSauce = $("select#newSauce").val();
    var inputtedCheese = $("select#newCheese").val();
    var inputtedMeatTopping = $("select#newMeatTopping").val();
    var inputtedVegTopping = $("select#newVegTopping").val();
    var inputtedSize = $("select#newSize").val();
    $("input#newName").val("");
    $("select#newSauce").val("");
    $("select#newCheese").val("");
    $("select#newMeatTopping").val("");
    $("select#newVegTopping").val("");
    $("select#newSize").val("");
    var newPizza = new Pizza(inputtedName, inputtedSauce, inputtedCheese, inputtedMeatTopping, inputtedVegTopping, inputtedSize);
    newPizza.addSizePrice();
    newPizza.addSaucePrice();
    newPizza.addCheesePrice();
    newPizza.addMeatToppingPrice();
    newPizza.addVegToppingPrice();
    order.addOrder(newPizza);
    displayOrder(order);

  })
})
