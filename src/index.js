import ReactDom from "react-dom";
import React from "react";

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDv9O-OdVxEKpqJ9TPabDQD3awNCNQntis';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

ReactDom.render(<App/>, document.querySelector('.container'));
