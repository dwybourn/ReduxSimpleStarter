import _ from 'lodash';
import ReactDom from "react-dom";
import React, {Component} from "react";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBeULTWad2VeJvCD1ujTgsJKMOBcgF1DSA';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('puppies and kittens');
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((searchTerm) => {this.videoSearch(searchTerm)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={searchTerm => {videoSearch(searchTerm)}}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.querySelector('.container'));
