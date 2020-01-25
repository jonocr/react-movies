import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    handleChange(e) {
        e.preventDefault();
        const query = e.target.value;
        this.setState({
            query: query
        });
    }

    //call the parent onclick when enter is pressed
    onKeyPress(e) {
        const query = e.target.value;
        if (e.key === 'Enter') {
            e.preventDefault();
            this.props.onChange(e, query);
        }
    }

    render() {
        const query = this.state.query;
        return (
            <form className="form-movie-search">
                <input
                    className="form-control form-control movie-search"
                    type="text"
                    value={this.state.query}
                    onChange={(e) => this.handleChange(e)}
                    onKeyPress={(e) => this.onKeyPress(e)}
                    placeholder="Search...">
                </input>
            </form>
        )
    }
}

export default SearchBar;