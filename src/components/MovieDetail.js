import React from "react";

class MovieDeatil extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const posterPath = "https://image.tmdb.org/t/p/w500/" + this.props.Poster;
        return (
            <div className="container movie-detail">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-4">

                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1">
                                        <img src={posterPath} />
                                    </div>
                                </div>


                            </div>
                            <div className="details col-md-8">
                                <h3 className="product-title">{this.props.Title}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <p className="font-weight-bold">
                                        Rating: <spam className="orange">{this.props.imdbRating}</spam>
                                    </p>
                                    <span className="review-no font-weight-bold">{this.props.imdbVotes} Votes</span>
                                </div>
                                <p className="product-description">
                                    <h5><strong>PLOT:</strong></h5> {this.props.Plot}
                                </p>
                                <p>
                                    <h5>
                                        <strong>Casting: </strong>
                                    </h5>
                                    EMpty
                                </p>
                                <p>
                                    <h5 className="product-description">
                                        <strong>Director: </strong> 
                                    </h5>
                                    EMpty
                                </p>
                                <p>
                                    <h5 className="product-description">
                                        <strong>Year: </strong> 
                                    </h5>
                                    {this.props.Year}
                                </p>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDeatil;




/*
 id={movie.id}
Title={movie.original_title}
Year={movie.release_date}
Poster={movie.poster_path}
popularity={movie.popularity}              
Plot={movie.overview}
imdbVotes={movie.imdbVotes}
imdbRating={movie.vote_average}
imdbID={movie.imdbID}
budget={movie.budget}
homepage={movie.homepage}>
                */















































//Data from movie
// Actors: "Yukie Nakama, Joe Odagiri, Tomoka Kurotani, Erika Sawajiri"// ​
// Awards: "4 wins & 2 nominations."// ​
// BoxOffice: "N/A"// ​
// Country: "Japan"// ​
// DVD: "06 Feb 2007"// ​
// Director: "Ten Shimoyama"// ​
// Genre: "Action, Drama, Fantasy, Romance"// ​
// Language: "Japanese"// ​
// Metascore: "N/A"// ​
// Plot: "Star-crossed lovers must fight on opposing sides in a battle that will determine the next Shogun."// ​
// Poster: "https://m.media-amazon.com/images/M/MV5BNjZhMTNmMTItNmU4Mi00YTdkLWFkZWUtOGExNTQ3MGRiYWYyXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"// ​
// Production: "FUNimation Entertainment"// ​
// Rated: "R"// ​
// Ratings: Array [ {…} ]// ​
// Released: "17 Sep 2005"// ​
// Response: "True"// ​
// Runtime: "107 min"// ​
// Title: "Shinobi: Heart Under Blade"// ​
// Type: "movie"// ​
// Website: "N/A"// ​
// Writer: "Kenya Hirata, Fûtarô Yamada (novel)"// ​
// Year: "2005"// ​
// imdbID: "tt0475723"// ​
// imdbRating: "6.9"// ​
// imdbVotes: "11,865"