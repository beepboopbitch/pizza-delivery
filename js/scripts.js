
function Order() {
  this.orders = [],
  this.orderId = 0,
}

Order.prototype.addOrder = function(order) {
  order.id = this.orderId();
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
  this.name = name,
  this.meatTopping = meatTopping,
  this.vegTopping = vegTopping,
  this.size = size,
  this.price = 0,
}

var order = new Order();

function displayOrder(orderDisplay) {
  var orders = $("ul#orders");
  var orderInfo = "",
  orderDisplay.orders.forEach(function(order) {
    orderInfo += "<li id=" + order.id + ">" + oredr.name + ""
  })
  orders.html(orderInfo)
}

function showOrder (orderId) {
  var order = Order.findOrder(orderId);
  $("#show-order").show();
  $(".name").html(order.name);
  $(".meatTopping").html(order.meatTopping);
  $(".vegTopping").html(order.vegTopping);
  $(".size").html(order.size);
  $(".price").html(order.price);
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
    var inputtedMeatTopping = $("input#newMeatTopping").val();
    var inputtedVegTopping = $("input#newVegTopping").val();
    var inputtedSize = $("input#size").val();
    $("input#newName").val("");
    $("input#newMeatTopping").val("");
    $("input#newVegTopping").val("");
    $("input#size").val("");
    var newPizza = new Pizza(inputtedName, inputtedMeatTopping, inputtedVegTopping, inputtedSize);
    order.addOrder(newPizza);
    displayOrder(order);
  })
})
