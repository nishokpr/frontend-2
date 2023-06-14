var cartItems = [];

function addToCart(productId) {
  var product = getProductById(productId);
  cartItems.push(product);
  updateCart();
}

function getProductById(productId) {
  // Retrieve product details based on the provided productId
  // This can be an AJAX request to fetch the product information from a server or a local data source
  // Return the product object
  // Example:
  if (productId === 1) {
    return {
      id: 1,
      name: "Product 1",
      price: 10
    };
  } else if (productId === 2) {
    return {
      id: 2,
      name: "Product 2",
      price: 15
    };
  }
}

function updateCart() {
  var cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var cartItem = cartItems[i];

    var listItem = document.createElement("li");
    listItem.innerText = cartItem.name + " - $" + cartItem.price;
    cartItemsElement.appendChild(listItem);

    totalPrice += cartItem.price;
  }

  var totalPriceElement = document.createElement("li");
  totalPriceElement.innerText = "Total: $" + totalPrice;
  cartItemsElement.appendChild(totalPriceElement);
}
