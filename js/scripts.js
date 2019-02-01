
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

function Pizza(name, meatTopping, vegTopping, size) {
  this.name = name;
  this.meatTopping = meatTopping;
  this.vegTopping = vegTopping;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.applyScore = function(price) {
  price = this.addPrice
  this.price.push(price);
}

Pizza.prototype.addPrice = function() {
  console.log(this.price)
  if (this.size === "Medium") {
    this.price += 1;
    console.log(this.price)
  }
  return this.price
}

var order = new Order();

function displayOrder(orderDisplay) {
  var orders = $("ul#orders");
  var orderInfo = "";
  orderDisplay.orders.forEach(function(order) {
    orderInfo += "<li id=" + order.id + ">" + order.name + ""
  });
  orders.html(orderInfo)
}



function showOrder (orderId) {
  var pizza = order.findOrder(orderId);


  $("#show-order").show();
  $(".name").html(pizza.name);
  $(".meatTopping").html(pizza.meatTopping);
  $(".vegTopping").html(pizza.vegTopping);
  $(".size").html(pizza.size);
  $(".price").html(pizza.price);
  if(pizza.size == $("select#newSize").val("Medium")) {
    pizza.price += 1;
  }
  return pizza.price
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
    var inputtedMeatTopping = $("select#newMeatTopping").val();
    var inputtedVegTopping = $("select#newVegTopping").val();
    var inputtedSize = $("select#newSize").val();
    var pizzaPrice = pizza.price
    $("input#newName").val("");
    $("select#newMeatTopping").val("");
    $("select#newVegTopping").val("");
    $("select#newSize").val("");
    var newPizza = new Pizza(inputtedName, inputtedMeatTopping, inputtedVegTopping, inputtedSize);
    order.addOrder(newPizza);
    displayOrder(order);

  })
})
