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
      key: "41f841b3",
      apiUrl: "http://www.omdbapi.com/?apikey=",
      query: "blade",
      loading: true
    };
  }

  async componentDidMount() {
    this.getMovieData();
    // const url = this.state.apiUrl;
    // const key = this.state.key;
    // const query = this.state.query;

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

  async getMovieData (q) {
    const url = this.state.apiUrl;
    const key = this.state.key;
    const query = (q) ? q : this.state.query;
    console.log('getMovieData query: ', url+key+"&s="+query);
    const response = await fetch(url+key+"&s="+query);
    const data = await response.json();

    this.setState({
      movies: data.Search,
      loading: false
    });
  }

  handleClick(e, i) {
    e.preventDefault();
    this.setState({
      query: i
    })
    this.getMovieData(i);
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
          <Hero onClick={(e,i) => this.handleClick(e,i)}></Hero>
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
