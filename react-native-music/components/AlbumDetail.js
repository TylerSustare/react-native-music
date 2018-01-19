import React, { Component } from 'react';
import { View, Text, Image, Linking, Dimensions, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Expo from 'expo';

class AlbumDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getSound(animal, sound) {
        console.log(animal);
        console.log(sound);
        switch (animal) {
        case 'Bear':
            return require('../sounds/bear.mp3');
        default:
            return { uri: sound };
        }
    }

    playSound(title, sound) {
        const soundObject = new Expo.Audio.Sound();
        const source = this.getSound(title, sound);
        soundObject.loadAsync(source)
            .then(() => {
                console.log(source);
                soundObject.playAsync();
            })
            .catch(e => {
                // disappoint a child and frustrate a parent with no sound.
                console.log(e);
            });
    }

    openURL(url) {
        Linking.openURL(url);
    }

    render() {
        const { title, image, sound } = this.props.album;
        const { startingLetterContainerStyle, startingLetterStyle, headerContentStyle, headerTextStyle, albumImageStyle, albumImageWrapperStyle } = styles;
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
                        style={albumImageWrapperStyle}
                        onPress={() => this.playSound(title, sound)}>
                        <Image
                            style={albumImageStyle}
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
    albumImageWrapperStyle: {
        justifyContent: 'center',
        alignItems:
            'center',
    },
    albumImageStyle: {
        height: 350,
        // flex: 1, width: null // to make sure the image always takes up the full width => only with no TouchableOpacity/TouchableHighlight
        width: Dimensions.get('window').width - 22,
    }
};

export default AlbumDetail;
