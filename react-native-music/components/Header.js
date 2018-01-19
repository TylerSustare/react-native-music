import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}


const styles = {
    viewStyle: {
        backgroundColor: '#E8E8E8',
        height: 60,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};


// the following are equivalent 
/*
// class component
class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}
// export default Header; 
// export default means you don't have to deconstruct the import statement
//      import Header from '' // export default
//      import {Header} from '' // just export


// functional component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};
export default Header;
*/