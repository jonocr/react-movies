import React from 'react';
import './main.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import MovieBlock from './components/MovieBlock';
import MovieDetail from './components/MovieDetail';

const API = {
  KEY: "41f841b3",
  URL: "http://www.omdbapi.com/?apikey="
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "blade",
      loading: true
    };
  }

  async componentDidMount() {
    this.getMovieData();
    // //http://www.omdbapi.com/?s=blade&apikey=41f841b3
    // //http://jsonplaceholder.typicode.com/users

  }

  async getMovieData(q) {
    const query = (q) ? q : this.state.query;
    const response = await fetch(API.URL + API.KEY + "&s=" + query);
    const data = await response.json();

    if (data.Response) {
      this.setState({
        movies: data.Search,
        movie: null,
        query: query,
        loading: false
      });
    }
  }

  async getMovieDataById(q) {
    const query = (q) ? q : this.state.query;
    const response = await fetch(API.URL + API.KEY + "&i=" + query);
    const data = await response.json();

    if (data.Response) {
      this.setState({
        movie: data,
        query: query,
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
        id={movie.imdbID}
        key={index}
        Title={movie.Title}
        Poster={movie.Poster} >
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

    if (!loading && data) {
      for (let i = 0; i < data.length; i++) {
        movies.push(
          <MovieBlock
            id={data[i].imdbID}
            key={i}
            Title={data[i].Title}
            Year={data[i].Year}
            Poster={data[i].Poster}
            imdbID={data[i].imdbID}
            onClick={(e, i) => this.handleMovieDetailClick(e, i)}>
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
                id={movie.imdbID}
                Actors={movie.Actors}
                Title={movie.Title}
                Year={movie.Year}
                Poster={movie.Poster}
                Director={movie.Director}
                Plot={movie.Plot}
                Country={movie.Country}
                Rated={movie.Rated}
                imdbVotes={movie.imdbVotes}
                Writer={movie.Writer}
                imdbRating={movie.imdbRating}
                imdbID={movie.imdbID}>
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