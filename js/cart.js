/**
 * Created by Kristina_Patrakova on 11/26/2015.
 */
var Carts = [];
function Cart(name, imgSrc, price, quantity, value){
    this.name = name;
    this.imgSrc = imgSrc;
    this.price = price;
    this.quantity = quantity;

}
function getCart(){
    Carts.push(new Cart('Martin Guitars D35 ','u1.jpg','450$', '3'));
    Carts.push(new Cart('Martin Guitars D35 ','u1.jpg','450$', '2'));
}

function createCartHTML(cart){
    var cartList = document.createElement('section');
    var gitarDescription = document.createElement('div');
    var imageBlock =document.createElement('div');
    var image = document.createElement('img');
    var nameBlock = document.createElement('div');
    var a = document.createElement('a');

    var gitarChoose = document.createElement('div');
    var quantity = document.createElement('div');
    var quantityForm =document.createElement('form');
    var select = document.createElement('select');
    var options = [];
    var cartPrice = document.createElement('div');
    var h = document.createElement('h3');
    var del = document.createElement('a');

    //присвоение элементам классов
    cartList.className = "main__cartList cartList";
    gitarDescription.className ='cartList__gitarDescription gitarDescription';
    imageBlock.className = "gitarDescription__imageBlock";
    image.className = "gitarDescription__image";
    image.setAttribute('src', 'images/' + cart.imgSrc);
    nameBlock.className = "gitarDescription__nameBlock";
    a.className = "gitarDescription__name";
    a.innerText = cart.name;

    gitarChoose.className = "cartList__gitarChoose gitarChoose";
    quantity.className = "gitarChoose__quantity";
    quantityForm.className = "gitarChoose__quantityForm";
    cartPrice.className =  'gitarChoose__cartPrice';
    h.className = 'gitarChoose__header';
    h.innerText = cart.price;
    del.className = 'gitarChoose__delete';

    for(var i=1; i<=4; i++){
        var index = i;
        var option = document.createElement('option');
        option.setAttribute('value',index);
        option.innerText = index;
        if((index+1)==cart.quantity){
            option.setAttribute('selected','true');
        }
        options.push(option);
    }

    //
    nameBlock.appendChild(a);
    imageBlock.appendChild(image);
    gitarDescription.appendChild(imageBlock);
    gitarDescription.appendChild(nameBlock);

    for(var i=0; i<options.length; i++){
        select.appendChild(options[i]);
    }
    quantityForm.appendChild(select);
    quantity.appendChild(quantityForm);
    cartPrice.appendChild(h);
    cartPrice.appendChild(del);
    gitarChoose.appendChild(quantity);
    gitarChoose.appendChild(cartPrice);

    cartList.appendChild(gitarDescription);
    cartList.appendChild(gitarChoose);

    return cartList;
}

function pushToCart(element){
    var list = document.getElementById('CartSections');
    list.appendChild(element);
}

function initCart(){
    getCart();
    for(var i=0; i< Carts.length; i++){
        var elem = createCartHTML(Carts[i]);
        pushToCart(elem);
    }
}

window.onload = function(){
    initCart();
}