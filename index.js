//Import libaries to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

//  Create a component
const App = () => {
    return (
        <Header headerText={ 'Home Header' } />
    )
}

//  Render it to the device
AppRegistry.registerComponent('coinbuzz', () => App);
