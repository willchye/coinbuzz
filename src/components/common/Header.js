//IMPORT LIBRARIES FOR MAKING A COMPONENT
import React from 'react';
import { Text, View, Image } from 'react-native';

//MAKE A COMPONENT
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}
      ><Image
        style={{ alignSelf: 'center',
        height: 150,
        width: 250,
        borderWidth: 1,
        borderRadius: 75}}
         source={require('../../assets/blandy.png')}
         resizeMode="contain"
        /></Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position:'relative'
    },
    textStyle: {
        fontSize: 30
    }
}

//MAKE THE COMPONENT AVAILABLE TO OTHER PARTS OF THE APP
export default Header;