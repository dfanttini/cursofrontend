function orderByPrice (){
    Productos.sort ( (a,b) =>{
    if (a.precio < b.precio){
        return 1;
    }
    if (a.precio > b.precio){
        return -1;
    } 
    return 0;
})
}


