import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AnimalDetail from './AnimalDetail';

// props vs state
// state is only available to class based components
class AnimalList extends Component {
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
                this.setState({ animals: response.data });
            });
    }

    renderAnimals() {
        return this.state.animals.map(animal => {
            // key should be unique!! 
            return <AnimalDetail key={animal.title} animal={animal} />;
        });
    }

    render() {
        return (
            // everything in this list should be scrollable
            <ScrollView>
                {this.renderAnimals()}
            </ScrollView>
        );
    }
}

export default AnimalList;
