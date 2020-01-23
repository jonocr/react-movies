import React from "react";

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    handleClick(e) {
        const query = e.target.value;
        this.setState({
            query: query
        });
    }
    
    render() {
        const query = this.state.query;
        return (
            <section className="jumbotron text-center">
                <div id="jumbotron-head" className="container">
                    <h1>React Movie Data Base</h1>
                    <p className="lead text-muted">This is a project in react, using Sass, Bootstrap, Gulp and callings to a Restful API.</p>
                    <p>
                        <p>
                            <form className="form-movie-search">
                                <input 
                                    className="form-control form-control-lg movie-search" 
                                    type="text" 
                                    onChange={(e) => this.handleClick(e)}
                                    placeholder="Search...">
                                </input>
                            </form>
                        </p>
                        <a href="#" className="btn btn-primary my-2" onClick={(e) => this.props.onClick(e, query)}>
                                Search Movie
                        </a>
                    </p>
                </div>
            </section>
        )
    }
}

export default Hero;