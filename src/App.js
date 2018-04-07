import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import axios from 'axios';
import Header from './components/common/Header';
import CryptoCard from './components/common/CryptoCard';

class App extends Component {
    // Will added state
    state = { cryptos:[] };

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

          //Will added
        axios.get('https://min-api.cryptocompare.com/data/top/volumes?tsym=BTC')
        .then(response => this.setState({cryptos: response.data.Data}));
    }

        // Will added
    renderCrypto() {
        console.log(this.state.cryptos);

        return this.state.cryptos.map(crypto=>
        <CryptoCard key={crypto.ID} crypto={crypto}/>
        );
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            // <Provider store={store}>
            //     <Router />
            // </Provider>

            //Will added below
            
            <View>
                <Header/>
                {this.renderCrypto()}
            </View>
        );
    }
}

export default App;
