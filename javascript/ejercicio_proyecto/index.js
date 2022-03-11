// function buy (id){
//     const addedProd = products.find(element => element.id == id); //El find busca la coincidencia con el id
//     console.log(addedProd);
//     cartList.push(addedProd);
//     // console.table(cart);
//     // console.table(products);

// }  

// function buy (id) {
//     console.table(products);
//     console.log(cartList);
//     cart.push(products [id -1]);
// }

function buy(id) {
    productBuy = products.find(function(element){
        if (element.id == id){ 
            return element;
     }

})

}







// cartList.push(productBuy);
// console.table(cartList);
