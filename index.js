// Price of burgers
const bigCheesePrice = 169;
const theDevilPrice = 666;
const theDoubblePrice = 200;
const breckfastPrice = 239;
const haminatorPrice = 196;
// lets used to summerice prices
let totalCost = 0;
let totalItems = 0;
let finalPrice = 0;
// to count number of burgers of same type
let cheese = 0;
let devil = 0;
let doubble = 0;
let breckfast = 0;
let haminator = 0;
// to count total price when multiple burgers of one type 
let burgerPrice1 = 0;
let burgerPrice2 = 0;
let burgerPrice3 = 0;
let burgerPrice4 = 0;
let burgerPrice5 = 0;
// doms
const bigCheeseCart = document.getElementById("bigCheeseCart");
const theDevilCart = document.getElementById("theDevilCart");
const theDoubbleCart = document.getElementById("theDoubbleCart");
const breackfastCart = document.getElementById("breackfastCart");
const haminatorCart = document.getElementById("haminatorCart");
const totalPrice = document.getElementById("totalPrice");
const totalPriceTag = document.getElementById("totalPriceTag");
const ItemsInCart = document.getElementById("totalItems")
const caart = document.getElementById("deCart")

const bigcheeseTotal = document.getElementById("bigCheeseTotal")
const devilTotal = document.getElementById("devilTotal")
const doubbleTotal = document.getElementById("doubbleTotal")
const breckfastTotal = document.getElementById("breckfastTotal")
const haminatorTotal = document.getElementById("haminatorTotal")
const finalPriceTag = document.getElementById("finalPrice")

// Functions that calculates prices 
function addPriceCheese () {
    totalCost += 169;
    cheese += 1;
    animation();
}

function addPriceDevil () {
    totalCost += 666;
    devil += 1;
    animation();
}

function addPriceDoubble () {
    totalCost += 200;
    doubble += 1;
    animation();
}

function addPriceBreckfast () {
    totalCost += 239;
    breckfast += 1;
    animation();
}

function addPriceHaminator () {
    totalCost += 196;
    haminator += 1;
    animation();
}
// The animation for the "total price"
function animation () {
    totalItems += 1;
    ItemsInCart.innerText = totalItems;
    totalPrice.classList.remove("priceRemove")
    console.log("hello world");
    console.log(totalPrice.classList)
    totalPriceTag.innerText = totalCost + ",-";
    setTimeout (() => {
        totalPrice.classList.add("priceRemove")
        console.log(totalPrice.classList)
    }, 2) 
}

// function that hides/shows elements in the cart. If there is more then one item of the burger type it will display that div when the cart is clicked.
  caart.addEventListener("click", hello
  )

  function hello() {
      console.log("hello");
      if (cheese >= 1) {
          console.log("vicotry")
          burgerPrice1 = cheese * bigCheesePrice;
          bigcheeseTotal.style.display = "block";
          bigcheeseTotal.innerHTML = `Big cheese x ${cheese} = ${burgerPrice1}`
      } 
      if(devil >= 1) {
        console.log("vicotry")
        burgerPrice2 = devil * theDevilPrice;
        devilTotal.style.display = "block";
        devilTotal.innerHTML = `The Devil x ${devil} = ${burgerPrice2}`   
  } 
  if (doubble >= 1) {
    console.log("YEEEES")
    burgerPrice3 = doubble * theDoubblePrice;
    doubbleTotal.style.display = "block";
    doubbleTotal.innerHTML = `Doubble x ${doubble} = ${burgerPrice3}`
}
if (breckfast >= 1) {
    console.log("YEEEES")
    burgerPrice4 = breckfast * breckfastPrice;
    breckfastTotal.style.display = "block";
    breckfastTotal.innerHTML = `Breckfast x ${breckfast} = ${burgerPrice4}`
}
if (haminator >= 1) {
    console.log("YEEEES")
    burgerPrice5 = haminator * haminatorPrice;
    haminatorTotal.style.display = "block";
    haminatorTotal.innerHTML = `Haminator x ${haminator} = ${burgerPrice5}`
}

calcFinalPrice(), 2

}

function calcFinalPrice () {
    finalPriceTag.style.display = "block";
    finalPriceTag.innerHTML = " Final Price = " + totalCost
}