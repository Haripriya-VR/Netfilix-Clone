const key = '517f9890f55639cc5afd85ba5a8f0ccb';

const requests ={
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    getTrailerUrl: (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`
}

export default requests;