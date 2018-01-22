import React, { Component } from 'react';
import { View, Text, Image, Linking, Dimensions, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Expo from 'expo';

class AnimalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getSound(animal, sound) {
        // required must be a string literal for webpack ... so this is gross
        switch (animal) {
        case 'Anteater':
            return require('../sounds/anteater.mp3');
        case 'Bear':
            return require('../sounds/bear.mp3');
        case 'Beluga':
            return require('../sounds/beluga.mp3');
        case 'Camel':
            return require('../sounds/camel.mp3');
        case 'Cat':
            return require('../sounds/cat.mp3');
        case 'Cougar':
            return require('../sounds/cougar.mp3');
        case 'Dog':
            return require('../sounds/dog.mp3');
        case 'Dolphin':
            return require('../sounds/dolphin.mp3');
        case 'Eagle':
            return require('../sounds/eagle.mp3');
        case 'Elephant':
            return require('../sounds/elephant.mp3');
        case 'Falcon':
            return require('../sounds/falcon.mp3');
        case 'Frog':
            return require('../sounds/frog.mp3');
        case 'Gorilla':
            return require('../sounds/gorilla.mp3');
        case 'Hippo':
            return require('../sounds/hippo.mp3');
        case 'Horse':
            return require('../sounds/horse.mp3');
        case 'Jaguar':
            return require('../sounds/jaguar.mp3');
        case 'Lamb':
            return require('../sounds/lamb.mp3');
        case 'Leopard':
            return require('../sounds/leopard.mp3');
        case 'Lion':
            return require('../sounds/lion.mp3');
        case 'Orca':
            return require('../sounds/orca.mp3');
        case 'Penguin':
            return require('../sounds/penguin.mp3');
        case 'Pig':
            return require('../sounds/pig.mp3');
        case 'Raccoon':
            return require('../sounds/raccoon.mp3');
        case 'Sea Lion':
            return require('../sounds/sea-lion.mp3');
        case 'Seal':
            return require('../sounds/seal.mp3');
        case 'Wolf':
            return require('../sounds/wolf.mp3');
        default:
            return { uri: sound };
        }
    }

    playSound(title, sound) {
        const soundObject = new Expo.Audio.Sound();
        const source = this.getSound(title, sound);
        soundObject.loadAsync(source)
            .then(() => {
                soundObject.playAsync();
            })
            .catch(e => {
                // disappoint a child and frustrate a parent with no sound.
            });
    }

    openURL(url) {
        Linking.openURL(url);
    }

    render() {
        const { title, image, sound } = this.props.animal;
        const { startingLetterContainerStyle, startingLetterStyle, headerContentStyle, headerTextStyle, animalImageStyle, animalImageWrapperStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={startingLetterContainerStyle}>
                        <Text style={startingLetterStyle}>
                            {title[0]}
                        </Text>
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <TouchableOpacity
                        style={animalImageWrapperStyle}
                        onPress={() => this.playSound(title, sound)}>
                        <Image
                            style={animalImageStyle}
                            source={{ uri: image }}
                        />
                    </TouchableOpacity>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around' // even space around the content
    },
    headerTextStyle: {
        fontSize: 24
    },
    startingLetterContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: 50,
        width: 50,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cecece',
    },
    startingLetterStyle: {
        fontSize: 40
    },
    animalImageWrapperStyle: {
        justifyContent: 'center',
        alignItems:
            'center',
    },
    animalImageStyle: {
        height: 350,
        // flex: 1, width: null // to make sure the image always takes up the full width => only with no TouchableOpacity/TouchableHighlight
        width: Dimensions.get('window').width - 22,
    }
};

export default AnimalDetail;
