import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default class App extends React.Component {
    render() {
        return (
            // have to return a single top level tag
            // view style of 1 for scrolling all the way to the bottom
            <View style={{flex:1}}>
                <Header headerText={'Albums'} />
                <AlbumList />
            </View>
        );
    }
}
