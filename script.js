// mengambil film
function getMovie(keyword) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // ketika ajak siap
            let movies = JSON.parse(xhr.response);
            showMovies(movies.Search);
        }
    }
    xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=' + keyword);
    xhr.send();
}




// menampilkan film 
function showMovies(movies) {
    if (!movies) {
        movieList.innerHTML = '<p class="alert alert-danger">not found </p>';

        return;
    }
    let cards = "";
    movies.forEach(function (movie) {
        cards += `  <div class="col-3 my-3">
        <div class="card">
            <img class="card-img-top" src="${movie.Poster}">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                <a href="detail.php?id=${movie.imdbID}" class="btn btn - primary">Show Detail</a>
            </div >
        </div >
    </div > `;
    });

    movieList.innerHTML = cards;
}
let movieList = document.querySelector('.movie-list');
let inputKeyword = document.querySelector('.keyword-keyword');
let buttonSearch = document.querySelector('button-search');

// ketika halama diload
getMovie('the flash');
//ketika film dicari

buttonSearch.addEventListener('click', function () {
    getMovies(inputKeyword.value);
});