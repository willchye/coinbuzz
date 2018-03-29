import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCVkBuPkDytFG8445avNz121zvddwRn5BM",
            authDomain: "blandy-96cee.firebaseapp.com",
            databaseURL: "https://blandy-96cee.firebaseio.com",
            projectId: "blandy-96cee",
            storageBucket: "",
            messagingSenderId: "758719429926"
          };

        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App;
