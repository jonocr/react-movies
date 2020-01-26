import React from 'react';
import './main.css';
import NavBar from './components/layout/NavBar';
import Hero from './components/layout/Hero';
import Footer from './components/layout/Footer';
import MovieBlock from './components/MovieBlock';

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
    // const api = "http://www.omdbapi.com/?s=blade&apikey=41f841b3";
    // const response = await fetch(url+key+"&s="+query);
    // const data = await response.json();

    // this.setState({
    //   movies: data.Search,
    //   loading: false
    // });


    // fetch('http://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ contacts: data })
    //     })
    //     .catch(console.log)
  }

  async getMovieData(q) {
    const query = (q) ? q : this.state.query;
    const response = await fetch(API.URL + API.KEY + "&s=" + query);
    const data = await response.json();

    if (data.Response) {
      this.setState({
        movies: data.Search,
        query: query,
        loading: false
      });
    }
  }

  handleClick(e, i) {
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

  render() {
    const data = this.state.movies;
    const loading = this.state.loading;
    let movies = [];

    if (!loading && data) {
      for (let i = 0; i < data.length; i++) {
        movies.push(
          <MovieBlock
            id={data[i].imdbID}
            key={i}
            Title={data[i].Title}
            Poster={data[i].Poster} >
          </MovieBlock>
        )
      }
    }

    return (
      <React.Fragment>
        <NavBar onClick={(e, i) => this.handleClick(e, i)}></NavBar>

        <main role="main">
          {/* <Hero onClick={(e, i) => this.handleClick(e, i)}></Hero> */}
          {/* <Directory></Directory> */}

          <div className="album py-5 bg-light">
            <div className="container">

              <div className="row">
                {(data) ? movies : "No Results Found"}
              </div>
            </div>
          </div>
        </main>

        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
