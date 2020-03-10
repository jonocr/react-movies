import React from 'react';
import './main.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import MovieBlock from './components/MovieBlock';
import MovieDetail from './components/MovieDetail';

const API = {
  KEY: "&api_key=5e5bec981504e27f1d0e7022e076e148",
  URL: "https://api.themoviedb.org/3/search/movie?page=1&include_adult=false",
  QUERY: "&query=",
  GET_MOVIE_BY_ID: "https://api.themoviedb.org/3/movie/",
  GET_MOVIES_DISCOVER: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
  POSTERPATH: "https://image.tmdb.org/t/p/w500/",
  LANGUAGE: "&language=en-US"
};

/*
results: (20) […]
​​
0: {…}
​​​
adult: false
​​​
backdrop_path: "/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg"
​​​
genre_ids: Array [ 35, 10749 ]
​​​
id: 475303
​​​
original_language: "en"
​​​
original_title: "A Rainy Day in New York"
​​​
overview: "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures."
​​​
popularity: 1452.5
​​​
poster_path: "/uPGq1mkEXznUpapDmOSxbsybjfp.jpg"
​​​
release_date: "2019-07-26"
​​​
title: "A Rainy Day in New York"
​​​
video: false
​​​
vote_average: 6.7
​​​
vote_count: 643




*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "blade",
      movieId: "",
      loading: true
    };
  }

  async componentDidMount() {
    this.getMovieData();
  }

  async getMovieData(q) {
    const query = (q) ? API.URL + API.QUERY + q + API.KEY : API.GET_MOVIES_DISCOVER + API.LANGUAGE + API.KEY;
    const response = await fetch(query);
    const data = await response.json();    

    if (data.results) {
      this.setState({
        movies: data.results,
        movie: null,
        query: query,
        loading: false
      });
    }
  }

  async getMovieDataById(q) {
    const response = await fetch(API.GET_MOVIE_BY_ID + q + "?" + API.KEY);
    const data = await response.json();

    console.log("getMovieDataById: ", data);

    if (data) {
      this.setState({
        movie: data,
        loading: false
      });
    }
  }

  handleSearchClick(e, i) {
    e.preventDefault();
    this.getMovieData(i);
  }

  renderMovie(movie, index) {
    return (
      <MovieBlock
        id={movie.id}
        key={index}
        Title={movie.original_title}
        Poster={movie.poster_path} >
      </MovieBlock>
    )
  }

  handleMovieDetailClick(e, i) {
    e.preventDefault();
    this.getMovieDataById(i);
  }

  render() {
    const data = this.state.movies;
    const movie = this.state.movie;
    const loading = this.state.loading;
    let movies = [];

    console.log("render movie data: ", movie);

    if (!loading && data) {
      for (let i = 0; i < data.length; i++) {
        const posterPath = API.POSTERPATH + data[i].poster_path;
        const movieId = data[i].id
        movies.push(
          <MovieBlock
            id={movieId}
            key={i}
            Title={data[i].original_title}
            Year={new Date(data[i].release_date).getFullYear()}
            Poster={posterPath}
            imdbID={data[i].imdbID}
            onClick={(e, i) => this.handleMovieDetailClick(e, movieId)}>
          </MovieBlock>
        )
      }
    }

    return (
      <React.Fragment>
        <NavBar onClick={(e, i) => this.handleSearchClick(e, i)}></NavBar>

        <main role="main">
          {movie ?
            (
              <MovieDetail
                id={movie.id}
                Title={movie.original_title}
                Year={new Date(movie.release_date).getFullYear()}
                Poster={movie.poster_path}
                popularity={movie.popularity}              
                Plot={movie.overview}
                imdbVotes={movie.vote_count}
                imdbRating={movie.vote_average}
                imdbID={movie.imdbID}
                budget={movie.budget}
                homepage={movie.homepage}>
                
              </MovieDetail>
            ) : (
              <div className="album py-5 bg-light">
                <div className="container">

                  <div className="row">
                    {(data) ? movies : "No Results Found"}
                  </div>
                </div>
              </div>
            )
          }
        </main>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
/*
​
backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"​
belongs_to_collection: Object { id: 86311, name: "The Avengers Collection", poster_path: "/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg", … }
budget: 356000000​
genres: Array(3) [ {…}, {…}, {…} ]​
homepage: "https://www.marvel.com/movies/avengers-endgame"​
id: 299534​
imdb_id: "tt4154796"​
original_language: "en"​
original_title: "Avengers: Endgame"​
overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."
popularity: 231.505​
poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg"​
production_companies: Array [ {…} ]​
production_countries: Array [ {…} ]​
release_date: "2019-04-24"​
revenue: 2797800564​
runtime: 181​
spoken_languages: Array(3) [ {…}, {…}, {…} ]
​status: "Released"​
tagline: "Part of the journey is the end."​
title: "Avengers: Endgame"​
video: false​
vote_average: 8.3​
vote_count: 11522
*/