import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// wrapper for styling without stylesheets
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {/* component nested inside Card components */}
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;