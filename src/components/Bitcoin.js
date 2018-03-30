import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import { Spinner, CardSection, Card } from './common'


class Bitcoin extends Component {
    state = { prices: [], loading: true };

    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
            .then(response => this.setState({ prices: response.data, loading: false }))
            .catch((error) => console.log(error));            
    }
    renderData() {
        if(this.state.loading) {
            return <Spinner size='large' />
        }
        return (
            <Text>
               Current Price: ${this.state.prices.USD} USD
            </Text>
        );
    }
    render() {
        console.log("this.state", this.state)
        return (
            <Card>
            <CardSection>
            <Text>
                {this.renderData()}
            </Text>
            </CardSection>
            </Card>
        )
    }
}

export default Bitcoin