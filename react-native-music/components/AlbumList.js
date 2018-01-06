import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// props vs state
// state is only available to class based components
class AlbumList extends Component {
    constructor(props) {
        super(props);
        // only time you directly access state for initialization
        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({albums: response.data});
            });
    }

    renderAlbums() {
        return this.state.albums.map(album => {
            // key should be unique!! 
            return <AlbumDetail key={album.title} album={album}/>;
        });
    }

    render() {
        return (
            // everything in this list should be scrollable
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;