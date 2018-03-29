import React from 'react';
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import CoinList from './components/CoinList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={ LoginForm } title="Login" initial/>
                <Scene key="coinList" component={ CoinList } title="Coins" />
            </Scene>
        </Router>
    );
}

export default RouterComponent