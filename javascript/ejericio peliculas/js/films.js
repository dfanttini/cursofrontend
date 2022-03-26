function getAllDirectors (peliculas){
    let result =  []; //variable vacia 
    result = peliculas.map(function director(movie)){ //aqui vamos a trabajar con el origen del array. TRabajamos en el termino pelicula pero podriamos utilizar movies
        return movie.director,
    }
}
console.table(result);

//regresa result 

//forma corta

let result = peliculas.map(movie => {
    return movie.director;
});

console.table(result);

//version larga result = peluculas.map(function director(movie){
    return movie.director;
});
console.table(result);
}