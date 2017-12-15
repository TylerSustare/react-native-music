import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

// the following are equivalent 
/*
class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
*/