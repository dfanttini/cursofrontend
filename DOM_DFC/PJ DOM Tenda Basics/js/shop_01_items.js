let card1 = document.getElementById("card1");
var cardId1 = card1.getAttribute("data-Id");

card1.addEventListener('click', e => {
    if (e.target.classList== 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId1)
        addToCart(cardId1);
    } 
    if (e.target.classList== 'fas fa-trash-alt cardRemove'){
        alert("remove product: " + cardId1);
        removeFromCart(cardId1);        
    }
});

let card2 = document.getElementById("card2");
var cardId2 = card2.getAttribute("data-Id");

card2.addEventListener('click', e => {
    if (e.target.classList== 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId2)
        addToCart(cardId2);
    } 
    if (e.target.classList== 'fas fa-trash-alt cardRemove'){
        removeFromCart(cardId2);
    }
});

let card3 = document.getElementById("card3");
var cardId3 = card3.getAttribute("data-Id");

card3.addEventListener('click', e => {
    if (e.target.classList== 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId3)
        addToCart(cardId3);
    } 
    if (e.target.classList== 'fas fa-trash-alt cardRemove'){
        removeFromCart(cardId3);
    }
});

let card4 = document.getElementById("card4");
var cardId4 = card4.getAttribute("data-Id");

card4.addEventListener('click', e => {
    if (e.target.classList== 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId4)
        addToCart(cardId4);
    } 
    if (e.target.classList== 'fas fa-trash-alt cardRemove'){
        removeFromCart(cardId4);
    }
});

let card5 = document.getElementById("card5");
var cardId5 = card5.getAttribute("data-Id");

card5.addEventListener('click', e => {
    if (e.target.classList== 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId5)
        addToCart(cardId5);
    } 
    if (e.target.classList== 'fas fa-trash-alt cardRemove'){
        removeFromCart(cardId5);
    }
});

let card6 = document.getElementById("card6");
var cardId6 = card6.getAttribute("data-Id");

card6.addEventListener('click', e => {
    if (e.target.classList== 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId6)
        addToCart(cardId6);
    } 
    if (e.target.classList== 'fas fa-trash-alt cardRemove'){
        removeFromCart(cardId6);
    }
}); 

let card7 = document.getElementById("card7");
var cardId7 = card7.getAttribute("data-Id");

card7.addEventListener('click', e => {
    if (e.target.classList== 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId7)
        addToCart(cardId7);
    } 
    if (e.target.classList== 'fas fa-trash-alt cardRemove'){
        removeFromCart(cardId7);
    }
}); 

let card8 = document.getElementById("card8");
var cardId8 = card8.getAttribute("data-Id");

card8.addEventListener('click', e => {
    if (e.target.classList== 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId8)
        addToCart(cardId8);
    } 
    if (e.target.classList== 'fas fa-trash-alt cardRemove'){
        removeFromCart(cardId8);
    }
}); 



