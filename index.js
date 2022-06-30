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

//function listItems(){
//let liEl= document.createElement('li')
//let imgDivEl=document.createElement('div')
//let imgEl=document.createElement('img')
//imgEl.src="assets/icons/001-beetroot.svg"
//let buttonEl =document.createElement('button')
//buttonEl.textContent="Add to cart"

//imgDivEl.append(imgEl)
//liEl.append(imgDivEl, buttonEl)

//let itemsStoreList=document.querySelector('.item-list')
//itemsStoreList.append(liEl)
//console.log(itemsStoreList)
//}

//listItems()

//recreating the dynamic part

let state={}

function renderStoreItems(){
  let storeItemsUl=document.querySelector('store--item-list')
  storeItemsUl.textContent=''
}


function renderCartItems(){
let cartItemsUl=document.querySelector('cart--item-list')
cartItemsUl.textContent=''
}

function renderTotal(){}
let totalPrice=document.querySelector('total-section')

function render(){
  renderStoreItems()
  renderStoreItems()
  renderTotal()
}