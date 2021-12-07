if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
   ready()
}

function ready() {
   
    const removeItem = document.getElementsByClassName('remove');
        for(let i = 0; i < removeItem.length; i++){
            let button = removeItem[i]
            button.addEventListener('click', removeCartItem)
        }
      
        let qtyElem = document.getElementsByClassName('quantity-input');
        for(let i = 0 ; i < qtyElem.length ; i++){
            input = qtyElem[i]
            input.addEventListener('change', quantityChange)
        }

        let shopItem = document.getElementsByClassName('bx-heart');
        for(let i = 0 ; i < shopItem.length ; i++){
            let button = shopItem[i];
            button.addEventListener('click', addToCart)
        }

        let shopLink = document.getElementsByClassName('bx-shopping-bag');
        for(let i = 0 ; i < shopLink.length ; i++){
            let button = shopLink[i];
            button.addEventListener('click', cartLink)
        }

        let shopButton = document.getElementsByClassName('shop')[0];
        shopButton.addEventListener('click', showCart);

        let navCart = document.getElementsByClassName('nav-cart')[0];
        navCart.addEventListener('click', cartLink);

        
}

showCart = (e) => {
    let content = document.querySelector('#top-content');
    let cartPage = document.querySelector('.cart');
    let all = document.querySelector('.all');
    all.hidden = false;
    cartPage.hidden = true;
    content.hidden = true;
}

removeCartItem = (e) => {
    
    let buttonClicked = e.target
    let parent = buttonClicked.parentElement.parentElement.parentElement
    .parentElement;
    parent.remove();
    updateCartTotal();
}

cartLink = (e) => {

    let button = e.target
    let content = document.querySelector('#top-content');
    let cartPage = document.querySelector('.cart');
    let all = document.querySelector('.all');
    all.hidden = true;
    cartPage.hidden = false;
    content.hidden = false;

}

quantityChange = (e) => {

    let input = e.target
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1
    }
    updateCartTotal();
}

addToCart = (e) => {
    let button = e.target;

    button.parentElement.style.backgroundColor = "#e74242";
    let shopItem = button.parentElement.parentElement.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('price')[0].innerText;
    let image = shopItem.getElementsByClassName('item-image')[0].src;
    addItemToCart(title, price, image);
    updateCartTotal();
}

addItemToCart = (title, price, image) => {
    let cartRow = document.createElement('tr');
    let cartItems = document.querySelector('tbody');
    let cartInfo = document.getElementsByClassName('cart-info');

    for(let i = 0 ; i < cartInfo.length ; i++){    
        if(cartInfo[i].querySelector('p').innerText == title){
            alert("Already added to the cart");
            return
        }
    }
    let cartRowContent = `
    <td>
      <div class="cart-info">
        <img src="${image}" alt="">
        <div>
          <p class="cart-item-title">${title}</p>
          <span class="price">${price}</span>
          <br />
          <a href="#wew" class="remove">remove</a>
          
        </div>
       
      </div>
    </td>
    <td class="td"><input class="quantity-input" type="number" value="1" min="1"></td>
    <td>${price}</td>
    `
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('remove')[0].addEventListener('click',
    removeCartItem);
    cartRow.getElementsByClassName('quantity-input')[0].addEventListener('change',
    quantityChange);

}


updateCartTotal = () => {
    let cartItemContainer =  document.getElementsByClassName('cart')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-info');
    let tables = document.getElementsByClassName('td');
    let total = 0;
    let subTotal = 0;
    let deliveryPrice = 50.32;
    for(let i = 0 ; i < cartRows.length; i++){
        let cartRow = cartRows[i];
        let td = tables[i];
        let qtyElem = td.getElementsByClassName('quantity-input')[0];
        let priceElement = cartRow.getElementsByClassName('price')[0];
        let price = parseFloat(priceElement.innerText.replace(/(₱)|(,)/gi,''));
        let quantity = qtyElem.value;
 
        total = total + (price * quantity)
    }

    subTotal = (Math.round(total * 100) / 100);
    total = (Math.round((total + deliveryPrice) * 100) / 100);
    document.getElementsByClassName('cart-total-price')[0].innerText = `₱${numberWithCommas(total)}`;
    document.getElementsByClassName('sub-total')[0].innerText = `₱${numberWithCommas(subTotal)}`; 

}

// Format
numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

checkout = () => {
   const pop = document.querySelector('.popProperty');
   pop.style.visibility = "visible";
}

closePop = () => {
    const pop = document.querySelector('.popProperty');
    pop.style.visibility = "hidden";
}
home = () =>{
    alert('Thanks for buying');
    location.replace("./index.html");
}
