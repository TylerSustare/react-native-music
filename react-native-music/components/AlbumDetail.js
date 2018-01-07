import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            thumbnail_image,
            title,
            artist,
            image
        } = this.props.album;
        const {
            thumbnailContainerStyle,
            thumbnailStyle,
            headerContentStyle,
            headerTextStyle,
            albumImageStyle
        } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            style={thumbnailStyle}
                            source={{uri: thumbnail_image}}
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                        style={albumImageStyle}
                        source={{uri: image}}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={() => console.log(title)}/>
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
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImageStyle: {
        height: 375,
        flex: 1, width: null// to make sure the image always takes up the full width
    }
};

export default AlbumDetail;
