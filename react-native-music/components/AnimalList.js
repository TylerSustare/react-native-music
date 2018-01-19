import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AnimalDetail from './AnimalDetail';
import { AppLoading } from 'expo';
import axios from 'axios';

// props vs state
// state is only available to class based components
class AnimalList extends Component {
    constructor(props) {
        super(props);
        // only time you directly access state for initialization
        this.state = {
            animals: [],
            isReady: false
        };
    }

    componentWillMount() {
        axios.get('http://sustare2017-animals.s3-website-us-west-2.amazonaws.com')
            .then(response => {
                this.setState({ animals: response.data });
            });
    }

    renderAnimals() {
        try { // but first time you shall fail
            return this.state.animals.map(animal => {
                // key should be unique!! 
                return <AnimalDetail key={animal.title} animal={animal} />;
            });
        } catch (err) {
            return err;
        }
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this.renderAnimals}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }

        return (
            // everything in this list should be scrollable
            <ScrollView>
                {this.renderAnimals()}
            </ScrollView>
        );
    }
}

export default AnimalList;
