import React from 'react';
import './main.css';
import Directory from './components/Directory';
import NavBar from './components/layout/NavBar';
import Hero from './components/layout/Hero';
import Footer from './components/layout/Footer';
import MovieBlock from './components/MovieBlock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      loading: true
    };
  }

  async componentDidMount() {
    //http://www.omdbapi.com/?s=blade&apikey=41f841b3
    //http://jsonplaceholder.typicode.com/users
    const api = "http://www.omdbapi.com/?s=blade&apikey=41f841b3";
    const response = await fetch(api);
    const data = await response.json();

    this.setState({
      movies: data.Search,
      loading: false
    });


    // fetch('http://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ contacts: data })
    //     })
    //     .catch(console.log)
  }
  render() {
    const data = this.state.movies;
    const loading = this.state.loading;
    let listMoviesBlocks = "";

    if (!loading) {
      console.log("api response: ", data);
      listMoviesBlocks = data.map((movie) =>
        <MovieBlock
          key={movie.imdbID}
          Title={movie.Title}
          Poster={movie.Poster} >
        </MovieBlock>
      );
    }
    return (
      <React.Fragment>
        <NavBar></NavBar>

        <main role="main">
          <Hero></Hero>
          {/* <Directory></Directory> */}

          <div className="album py-5 bg-light">
            <div className="container">

              <div className="row">
                {listMoviesBlocks}
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
