let openShopping = document.getElementById("shopping");
let listCart = document.getElementById("listCart");
let subtotal = document.getElementById("subtotal");

const sidebar = document.getElementById("sidebar");
const navbar = document.getElementById("navbar");

let listCarts = [];

// Cart Actions
const ADD_ITEM = (json) => {
  let item = JSON.parse(decodeURIComponent(json));
  // https://stackoverflow.com/questions/12109811/javascript-pass-an-object-as-the-argument-to-a-onclick-function-inside-string
  listCarts = addItemToCart(listCarts, item);
  reloadCart();
};

const REMOVE_ITEM = (json) => {
  let item = JSON.parse(decodeURIComponent(json));
  listCarts = removeItemFromCart(listCarts, item);
  reloadCart();
};

const CLEAR_ITEM = (json) => {
  let item = JSON.parse(decodeURIComponent(json));
  listCarts = clearItemFromCart(listCarts, item);
  reloadCart();
};

const CLEAR_CART = () => {
  listCarts = [];
  reloadCart();
};

function reloadCart() {
  if (!listCarts.length) {
    listCart.innerHTML = `
      <span class="h-full flex items-center justify-center">Your cart is empty!</span>
    `;
  } else {
    listCart.innerHTML = ``;
    listCarts.forEach((item) => {
      const { name, price, quantity } = item;
      let json = encodeURIComponent(JSON.stringify(item));

      listCart.innerHTML += `
        <div class="grid grid-cols-10 gap-4 w-full text-sm my-1">
          <span class="col-span-2">
            <img src="${
              item.productImage
            }" class="h-14 w-12 border border-black"/>
          </span>
          <span class="col-span-3 flex items-center">${name}</span>
          <span class="col-span-2 flex items-center justify-between">
            <button onclick="REMOVE_ITEM('${json}')" class="font-mono">
              &#10096;
            </button>
            <p>${quantity}</p>
            <button onclick="ADD_ITEM('${json}')" class="font-mono">
              &#10097;
            </button>
          </span>
          <span class="col-span-2 flex items-center">${quantity * price}</span>
          <span class="col-span-1 flex items-center">
            <button onclick="CLEAR_ITEM('${json}')" class="font-mono">
              &#10005;
            </button>
          </span>
        </div>
      `;
    });
  }

  //price.js
  updatePrice(listCarts);
}

//sidebar open or close
openShopping.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  reloadCart();
});

sidebar.style.top = parseInt(navbar.clientHeight) - 1 + "px";
