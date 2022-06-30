/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
//<li>
//<div class="store--item-icon">
//  <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
//</div>
//<button>Add to cart</button>
//</li>

//recreating the dynamic part

let state = {
  storeItems: [
    {
      id: 1,
      name: "beetroot",
      price: 0.35,
      inCart: 4,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.20,
      inCart: 0,
    },
    {
      id: 3,
      name: "apple",
      price: 0.15,
      inCart: 0,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.35,
      inCart: 0,
    },
    {
      id: 5,
      name: "avocado",
      price: 0.75,
      inCart: 1,
    },
    {
      id: 6,
      name: "bananas",
      price: 0.35,
      inCart: 0,
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.35,
      inCart: 0,
    },
    {
      id: 8,
      name: "berry",
      price: 0.30,
      inCart: 7,
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.65,
      inCart: 5,
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.25,
      inCart: 0,
    },
  ]
}
//update state
//rerender 

//function getTotal(){}

//function increaseQuantity() { }

//function decreaseQuantity() { }

function getImagePath(item) {
  let id = String(item.id).padStart(3, '0') // instead of 1 --> 001
  return `assets/icons/${id}-${item.name}.svg`

}

function renderStoreItems() {
  let storeItemsUl = document.querySelector('.store--item-list')
  storeItemsUl.textContent = ''

  for (let item of state.storeItems) {

    let liEl = document.createElement('li')

    let imgDivEl = document.createElement('div')
    imgDivEl.className = '.store--item-icon'

    let imgEl = document.createElement('img')
    imgEl.src = getImagePath(item)

    let buttonEl = document.createElement('button')
    buttonEl.textContent = 'Add to cart'

    imgDivEl.append(imgEl)
    liEl.append(imgDivEl, buttonEl)

    storeItemsUl.append(liEl)
  }
}


function renderCartItems() {
  let cartItemsUl = document.querySelector('cart--item-list')
  cartItemsUl.textContent = ''
//  <li>
//  <img
//    class="cart--item-icon"
//    src="assets/icons/001-beetroot.svg"
//    alt="beetroot"
//  />
//  <p>beetroot</p>
//  <button class="quantity-btn remove-btn center">-</button>
//  <span class="quantity-text center">1</span>
//  <button class="quantity-btn add-btn center">+</button>
//</li>
let cartItemLiEl= document.createElement('li')

let cartImgEl= document.createElement('img')
cartImgEl.className='cart--item-icon'

let cartPEl=document.createElement('p')
cartPEl.textContent='beetroot'

let cartButtonEl=document.createElement('button')
cartButtonEl.className='remove-btn center'

let cartSpanEl=document.createElement('span')
cartSpanEl.className='center'

let cartButtonEl2=document.createElement('button')
cartButtonEl2.className='remove-btn center'

}

function renderTotal(){
let totalPrice = document.querySelector('total-section')
}

function render() {
  renderStoreItems()
  renderStoreItems()
  renderTotal()
}

render()