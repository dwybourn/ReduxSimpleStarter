import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {'searchTerm': 'Starting Value'};
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.searchTerm}
                    onChange={ event => this.setState({'searchTerm': event.target.value}) }/>
            </div>
        );
    }
}

export default SearchBar;