const form = document.querySelector("#TVShowSearch");
form.addEventListener('submit', async function (e){
    e.preventDefault();
    const searchTerm = form.elements.movieSearch.value;
    await getMovies(searchTerm);
});

const getMovies = async (searchTerm) => {
    const config = { params: {q: searchTerm} }
    const response = await axios("https://api.tvmaze.com/search/shows", config);
    for(let movie of response.data){
        if(movie.show.image){
            createMovie(movie.show.image.medium);
        }
    }
}

function createMovie(movieImage){
    const image = document.createElement('img');
    image.src = movieImage;
    document.body.append(image);
}
