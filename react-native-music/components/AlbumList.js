import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// props vs state
// state is only available to class based components
class AlbumList extends Component {
    constructor(props) {
        super(props);
        // only time you directly access state for initialization
        this.state = {
            animals: []
        };
    }

    componentWillMount() {
        axios.get('http://sustare2017-animals.s3-website-us-west-2.amazonaws.com')
            .then(response => {
                console.log(response.data);
                this.setState({ animals: response.data });
            });
    }

    renderAlbums() {
        return this.state.animals.map(animal => {
            // key should be unique!! 
            return <AlbumDetail key={animal.title} album={animal} />;
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
