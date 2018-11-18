<<<<<<< HEAD
function something() {
=======
function somethingss() {
>>>>>>> 560739b01bd8f1133b05c5ce57ffeb3623e33ecc
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

<<<<<<< HEAD
function update_cart() {
  $.each(localStorage, function(key, value){
    document.getElementById("in_cart_for_" + key).innerHTML = "In cart: " + value;
  });
  // for(var i=0, len=localStorage.length; i<len; i++) {
  //   var id = localStorage.key(i);
  //   var value = localStorage[id];
  //   document.getElementById("in_cart_for_" + id).innerHTML = "In cart: " + value;
  // }
=======
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
>>>>>>> 560739b01bd8f1133b05c5ce57ffeb3623e33ecc
}

$(document).ready(function(){
  update_cart()
})
