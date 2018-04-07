import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity> 
                {props.children}
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20
    }
}

export default Card;