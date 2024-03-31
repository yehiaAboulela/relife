"use strict";
// hero slider
const slides = document.querySelectorAll(".slide");
let slideInterval;

const nextSlide = () => {
  const currentSlide = document.querySelector(".active-slide");
  currentSlide.classList.remove("active-slide");
  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add("active-slide");
  } else {
    slides[0].classList.add("active-slide");
  }
};

slideInterval = setInterval(nextSlide, 5000);

/////////////
/////////
////////////////////
//////////////////// cart

// open and close the cart
const cartMain = document.querySelector(".cart-main");
const cartBtn = document.querySelector(".cart");
const cartEecabeBtn = document.querySelector(".cart-escabe");
const cartSlide = document.querySelector(".cart-content");

cartBtn.addEventListener("click", function () {
  cartMain.classList.add("cart-active");
});

cartMain.addEventListener("click", function (e) {
  if (e.target.classList[0] === "cart-main") {
    cartMain.classList.remove("cart-active");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    cartMain.classList.remove("cart-active");
  }
});

cartEecabeBtn.addEventListener("click", function () {
  cartMain.classList.remove("cart-active");
});

///////////////////////////////////////
// empliminting cart logic
const productsContainer = document.querySelector(".products-container");
const itemsCount = document.querySelector(".cart-elements__number");
const cartContainer = document.querySelector(".cart-products");
const emptyMsg = document.querySelector(".cart-empty-msg");
const subtotal = document.querySelector(".subtotal");
// const totalPriceItem = document.querySelector(".total-price__item");
productsContainer.addEventListener("click", function (e) {
  if (e.target.textContent === "Add to Cart") {
    itemsCount.textContent = `${Number(itemsCount.textContent) + 1}`;
    const cart = {
      img: e.target.parentElement.children[0].getAttribute("src"),
      name: e.target.parentElement.children[1].textContent,
      about: e.target.parentElement.children[2].textContent,
      price: e.target.parentElement.children[3].textContent,
    };
    //creating product inside the cart
    const cartProduct = document.createElement("div");
    cartProduct.classList.add("cart-product");
    cartProduct.innerHTML = `
    <div class="img-container">
      <img
        src="${cart.img}"
        alt=""
        class="cart-product__img"
      />
    </div>

    <div class="cart-product__details">
      <div class="top">
        <p>${cart.name}</p>
        <i class="product-cancel fa-solid fa-xmark" title="delete"></i>
      </div>
      <div class="down">
        <div class="product-counter">
          <button class="minus-item">-</button>
          <h2 class="product-number">1</h2>
          <button class="plus-item">+</button>
        </div>
        <h2 class="total-price">${cart.price}</h2>
      </div>
    </div>`;
    //add the product to the cart
    cartContainer.append(cartProduct);
    subtotal.textContent = `$${Math.round(
      Number(subtotal.textContent ? subtotal.textContent.slice(1) : 0) +
        Number(cart.price.slice(1))
    )}`;
  }
});

// deleting the product
cartContainer.addEventListener("click", function (e) {
  if (e.target.classList[0] === "product-cancel") {
    const itemPrice = Number(
      e.target.parentElement.parentElement.children[1].children[1].textContent.slice(
        1
      )
    );
    let itemPriceTotal = Number(
      e.target.parentElement.parentElement.children[1].children[0].children[1]
        .textContent
    );
    itemsCount.textContent = `${Number(itemsCount.textContent) - 1}`;
    subtotal.textContent = `$${Math.round(
      Number(subtotal.textContent ? subtotal.textContent.slice(1) : 0) -
        itemPrice * itemPriceTotal
    )}`;
    e.target.closest(".cart-product").remove();
  }
});

// counter logic

cartContainer.addEventListener("click", function (e) {
  if (e.target.classList[0] === "plus-item") {
    let counter = Number(e.target.parentElement.children[1].textContent);
    e.target.parentElement.children[1].textContent = counter + 1;
    subtotal.textContent = `$${Math.round(
      Number(subtotal.textContent.slice(1)) +
        Number(
          e.target.parentElement.parentElement.children[1].textContent.slice(1)
        )
    )}`;
  } else if (e.target.classList[0] === "minus-item") {
    if (e.target.parentElement.children[1].textContent !== "1") {
      let counter = Number(e.target.parentElement.children[1].textContent);
      e.target.parentElement.children[1].textContent = counter - 1;
      subtotal.textContent = `$${Math.round(
        Number(subtotal.textContent.slice(1)) -
          Number(
            e.target.parentElement.parentElement.children[1].textContent.slice(
              1
            )
          )
      )}`;
    }
  }
});

//checkout form logic

const checkoutParent = document.querySelector(".checkout-form__parent");
const chickoutBtn = document.querySelector(".checkout-btn");

//checkout-active
chickoutBtn.addEventListener("click", function () {
  checkoutParent.classList.add("checkout-active");
  console.log(checkoutParent.classList);
});

checkoutParent.addEventListener("click", function (e) {
  if (e.target.classList[0] === "checkout-form__parent") {
    checkoutParent.classList.remove("checkout-active");
  }
});

//filtering

const productCard = document.querySelectorAll(".product-item");
const foodCat = document.querySelectorAll("#food");
const clothesCat = document.querySelectorAll("#clothes");
const kitchenCat = document.querySelectorAll("#kitchen");
