$(document).ready(function(){
  update_orders_input();
  update_orders_button();
  update_cart();
  hide_if_null();
  count_amount();
})

function add_to_cart(id) {
  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);
  update_orders_input();
  update_orders_button();
  update_cart();
}

function remove_from_cart(id) {
  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  if (x > 0) {
    x = x * 1 - 1;
    window.localStorage.setItem(key, x);
  }
  update_orders_input();
  update_orders_button();
  update_cart();
}

// function update_cart() {
//   for(var i=0, len=localStorage.length; i<len; i++) {
//     button = document.getElementById("in_cart_for_" + id)
//     if (button) {
//       var id = localStorage.key(i);
//       var value = localStorage[id];
//       button.innerHTML = "In cart: " + value;
//     }
//   }
// }

function update_cart() {
  $.each(localStorage, function(key, value){
    button = document.getElementById("in_cart_for_" + key)
    if (button) {
    button.innerHTML = "In cart: " + value;
    }
  });
}

function cart_get_orders(){
  var orders = '';
  $.each(localStorage, function(key, value){
    orders = orders + key + '=' + value + ', ';
  });
  return orders;
}

// function cart_get_orders(){
//   var orders = '';
//   for(var i=0; i < window.localStorage.length; i++) {
//     var key = localStorage.key(i);
//     var value = localStorage.getItem(key);
//     orders = orders + key + '=' + value + ', ';
//   }
//   return orders;
// }

function update_orders_input() {
  var orders = cart_get_orders();
  $('#orders_input').val(orders);
}

function cart_get_number_of_items() {
  var count = 0;
  for(var i=0; i < window.localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    count = count * 1 + value * 1;
  }
  return count
}

function update_orders_button() {
  var text = 'Cart (' + cart_get_number_of_items() + ')';
  $('#update_orders_button').val(text);
}

function count_amount() {
  var amount = 0;
  for(var i=0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);

    table_field = document.getElementById("price_" + key.replace('product_',''))

    if (table_field) {
      var price = table_field.innerHTML;
      amount = price * value;
      document.getElementById("amount_of_items_" + key.replace('product_','')).innerHTML = amount + ' UAH';
    }
  }
}

function hide_if_null() {
  for(var i=0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    if (value != 0) {
      $('#cart_' + key.replace('product_','')).show();
    }
  }
}

