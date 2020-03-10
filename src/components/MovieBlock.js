import React from "react";

function MovieBlock(props) {
    return (
        <div className="col-md-3">
            <div className="card mb-3 shadow-sm">
                <img className="bd-placeholder-img card-img-top"
                    width="100%" 
                    height="375"
                    src={props.Poster}
                    preserveAspectRatio="xMidYMid slice" 
                    focusable="false"
                    role="img"></img>
                <div id="card-body" className="card-body">
                <p className="card-text font-weight-bold">{props.Title} ({props.Year})</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-md btn-outline-secondary" onClick={(e, i) => props.onClick(e, props.imdbID)}>View</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MovieBlock;