import React, {Component } from 'react';
import { Card, CardSection } from './common';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';



class CoinList extends Component {
    render() {
        return (
            <Card>
                <TouchableHighlight onPress={() => Actions.btc()}>
                <CardSection>
                    <View >
                        <Text>
                            BTC
                        </Text>
                    </View>
                </CardSection>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => Actions.eth()}>
                <CardSection>
                    <View >
                        <Text>
                            ETH
                        </Text>
                    </View>
                </CardSection>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => Actions.xrp()}>
                <CardSection>
                    <View >
                        <Text>
                            XRP
                        </Text>
                    </View>
                </CardSection>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => Actions.ltc()}>
                <CardSection>
                    <View >
                        <Text>
                            LTC
                        </Text>
                    </View>
                </CardSection>
                </TouchableHighlight>
            </Card>
        )
    }
}
export default CoinList