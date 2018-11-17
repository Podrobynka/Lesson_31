function somethingss() {
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
}

function remove_from_cart(id) {
  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  x = x * 1 - 1;
  window.localStorage.setItem(key, x);
  update_cart();
}

function update_cart() {
  for(var i=0, len=localStorage.length; i<len; i++) {
    var id = localStorage.key(i);
    var value = localStorage[id];
    document.getElementById("in_cart_for_" + id).innerHTML = "In cart: " + value;
  }
}

$(document).ready(function(){
  update_cart()
})
