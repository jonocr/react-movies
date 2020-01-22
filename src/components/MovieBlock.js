import React from "react";

function MovieBlock(props) {
//     Poster: 
// Title: "Blade Runner"
// ​​
// Type: "movie"
// ​​
// Year: "1982"
// ​​
// imdbID: "tt0083658"
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img className="bd-placeholder-img card-img-top"
                    width="100%" 
                    height="375"
                    src={props.Poster}
                    preserveAspectRatio="xMidYMid slice" 
                    focusable="false"
                    role="img"></img>
                <div className="card-body">
                <p className="card-text">{props.Title}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MovieBlock;