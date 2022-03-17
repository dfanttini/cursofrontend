//ejercicio getAllDirectors

const movies = require("./data");

//revisar tooooodooooo

function getAllDirectors (director){
    let allDirectors = movies.map(function(pelis){
        return pelis.director;
    })

}

//ejercicio 2 obtener peliculas por director

function getPelisFromDirector (nameDirector){
    let resultaP = movies.filter(function(film){
        return film.director === nameDirector
    });
    return resultaP;
}


//exercise 3 calcula el promedio de las peliculas segun director

function moviesAverageOfDirector (director){
    const filmsByDirector = movies.filter(movie => movie.director ==  director);
    console.log('Este es el director: ' + director);
    console.log(filmsByDirector);

        const lkjljl = filmsByDirector.reduce((contador, film)=> {
        console.log('pelis ' + filmsByDirector.title + 'puntuacion ' + filmsByDirector.score);
        return contador + filmsByDirector;
    },0);}

    //orden alfabetico

    function ordeAlphabetically (array) {
        array.sort(function(a,b) {
            if (a.title > b.title){
                return 1;
            }

            if (a.title < b.title)
            return -1;
        } else {
            
        }
    }

    //Metodo abreviado 