import React from "react";

function Hero() {
    return (
        <section className="jumbotron text-center">
            <div id="jumbotron-head" className="container">
                <h1>React Movie Data Base</h1>
                <p className="lead text-muted">This is a project in react, using Sass, Bootstrap, Gulp and callings to a Restful API.</p>
                <p>
                    <p>
                        <form className="form-movie-search">
                            <input className="form-control form-control-lg movie-search" type="text" placeholder="Search...">
                            </input>
                        </form>
                    </p>
                    <a href="#" className="btn btn-primary my-2">Main call to action</a>
                    &nbsp;
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                </p>
            </div>
        </section>
    )
}

export default Hero;