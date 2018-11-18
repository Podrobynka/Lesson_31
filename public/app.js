function something() {
  var x = window.localStorage.getItem('bbb');
  x = x * 1 + 1;
  window.localStorage.setItem('bbb', x);
  alert(x);
}

function add_to_cart(id) {
  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);
  update_cart();
  update_orders_input()
}

function remove_from_cart(id) {
  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  if (x > 0) {
    x = x * 1 - 1;
    window.localStorage.setItem(key, x);
  }
  update_cart();
  update_orders_input()
}

function update_cart() {
  for(var i=0, len=localStorage.length; i<len; i++) {
    var id = localStorage.key(i);
    var value = localStorage[id];
    document.getElementById("in_cart_for_" + id).innerHTML = "In cart: " + value;
  }
}

// function update_cart() {
//   $.each(localStorage, function(key, value){
//     document.getElementById("in_cart_for_" + key).innerHTML = "In cart: " + value;
//   });
// }

$(document).ready(function(){
  update_cart()
  update_orders_input()
})

function cart_get_orders(){
  var orders = '';
  for(var i=0; i < window.localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    orders = orders + key + '=' + value + ',';
  }
  return orders;
}

function update_orders_input() {
  var orders = cart_get_orders();
  $('#orders_input').val(orders);
}