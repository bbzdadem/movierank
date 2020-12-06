function badOrgood(movie_rating){
    let rating = " ";
    if(movie_rating>6){
        rating="good";
    }else{
        rating = "bad"; 
    }
   return rating;

}

function findMin(array) {

    let x = array[0];
    let i = 0;

    for(i; i<array.length; i++){
        if(array[i] < x){
            x=array[i];
        }
    }

    return x;
}

function findMax(array) {

    let x = array[0];
    let i = 0;

    for(i; i<array.length; i++){
        if(array[i] > x){
            x=array[i];
        }
    }

    return x;
}

// console.log(badOrgood(8.7))
// console.log(findMin([1,2,3,45,6,7]))
// console.log(findMax([1,2,3,45,6,7]))

function sortRatings(rating) {

    for (let j = 0; j<rating.length-1; j++) {

        let maximum = rating[j];
        let max_location = j;

        for (let i=j; i<rating.length; i++){
            if(rating[i] > maximum){
                maximum = rating[i];
                max_location = i;
            }
        }

        rating[max_location] = rating[j];
        rating[j] = maximum;
    }
    
    return rating;
    
}

let movieratings = [5, 3, 8, 9, 2, 6];

console.log(sortRatings(movieratings))

// ----------------------------------------------------------------------------------

let movies = [
    {
        title: "Film 1",
        rank: 10,
        id: "a00012"
    },
    {
        title: "Film 2",
        rank: 8,
        id: "a00038"
    },
    {
        title: "Film 3",
        rank: 9,
        id: "a00022"
    },
    {
        title: "Film 4",
        rank: 4,
        id: "a00019"
    },
    {
        title: "Film 5",
        rank: 6,
        id: "a00015"
    },
    {
        title: "Film 6",
        rank: 7,
        id: "a00023"
    },
    {
        title: "Film 7",
        rank: 5,
        id: "a00045"
    },
]

function docID() {

    let sortedMovies = sortMoviesbyAttr(movies, 'id')
    displayMovies(movies);
    
}

function docNAME() {

    let sortedMovies = sortMoviesbyAttr(movies, 'title')
    displayMovies(movies);
    
}

function docRANK() {

    let sortedMovies = sortMoviesbyAttr(movies, 'rank')
    displayMovies(movies);
    
}

window.onload = function() {
    displayMovies(movies);
}

function displayMovies(movies) {
    let table = "<table border='1' style='width:100%'> ";
    table += "<tr><th>ID</th><th>NAME</th><th>RANK</th></tr>";

    for (let i=0; i<movies.length; i++) {
        table += "<tr>";
        table += "<td>" + movies[i].id+ "</td>"
        table += "<td>" + movies[i].title+ "</td>"
        table += "<td>" + movies[i].rank+ "</td>"
        table += "</tr>";
    }

    table += "</table>"
    document.getElementById("movies-list").innerHTML = table;

}

function sortMoviesbyRank(movies) {
    
    for (let j = 0; j<movies.length-1; j++) {

        let max_obj = movies[j];
        let max_location = j;

        for (let i=j; i<movies.length; i++){
            if(movies[i].rank > max_obj.rank){
                max_obj = movies[i]
                max_location = i
            }
        }

        movies[max_location] = movies[j];
        movies[j] = max_obj;
    }
    
    return movies;
}

function sortMoviesbyAttr(movies, sortAttr) {

    for (let j = 0; j<movies.length-1; j++) {

        let max_obj = movies[j];
        let max_location = j;

        for (let i=j; i<movies.length; i++){
            if(movies[i][sortAttr] > max_obj[sortAttr]){
                max_obj = movies[i]
                max_location = i
            }
        }

        movies[max_location] = movies[j];
        movies[j] = max_obj;
    }
    
    return movies;

}

