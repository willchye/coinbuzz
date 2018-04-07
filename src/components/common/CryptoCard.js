import React, {Component} from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ImageMap from './ImageMap';
import axios from 'axios';


class CryptoCard extends Component {

    state = {price:[]}

    componentDidMount() {

        console.log('price', this.props.crypto.SYMBOL);

        axios.get('https://min-api.cryptocompare.com/data/price?fsym=' + this.props.crypto.SYMBOL + '&tsyms=USD')
            .then(response => this.setState({ price: response.data, loading: false }))
            .catch((error) => console.log(error));  

    }
    
   render() { 
    console.log('price', this.state.price.USD);

    if(this.props.crypto.SYMBOL === 'ETH'){
        var imgSource = require('../../assets/topCoins/eth.png');
    }
    if(this.props.crypto.SYMBOL === 'TRX'){
        imgSource = require('../../assets/topCoins/trx.png');
    }
    if(this.props.crypto.SYMBOL === 'BCH'){
        imgSource = require('../../assets/topCoins/bch.png');
    }
    if(this.props.crypto.SYMBOL === 'VEN'){
        imgSource = require('../../assets/topCoins/ven.png');
    }
    if(this.props.crypto.SYMBOL === 'LTC'){
        imgSource = require('../../assets/topCoins/ltc.png');
    }
    if(this.props.crypto.SYMBOL === 'EOS'){
        imgSource = require('../../assets/topCoins/eos.png');
    }
    if(this.props.crypto.SYMBOL === 'XVG'){
        imgSource = require('../../assets/topCoins/xvg.png');
    }
    if(this.props.crypto.SYMBOL === 'XLM'){
        imgSource = require('../../assets/topCoins/xlm.png');
    }
    if(this.props.crypto.SYMBOL === 'XRP'){
        imgSource = require('../../assets/topCoins/xrp.png');
    }

    
    return (
        <ImageBackground source={require('../../assets/bg4.png')} style={styles.backgroundImage}>
        <Card>
            <CardSection>
                <View>
                <Image 
                        style={styles.thumbnailStyle}
                        source={imgSource}/>
                </View>
          
                <View style={styles.headerContentStyle}>
                    <Text style={{fontSize: 20}}>{this.props.crypto.SYMBOL}</Text>
                </View>

                <View style={styles.priceStyle}>
                    <Text>${this.state.price.USD}</Text>
                </View>
            </CardSection>
            
        </Card>
        </ImageBackground>
        );
    };
}

const styles = {
    headerContentStyle: {
        // do the space around content (2 <text> tags) in vertical (column)
        flexDirection:'column',
        justifyContent:'space-around',
        marginLeft:35,
    },
    priceStyle: {
        justifyContent:'center',
        flexDirection:'column',
        justifyContent:'space-around',
        marginLeft:50
    },
    backgroundImage: {

    },
    thumbnailStyle : {
        height:50,
        width:50
    }
}

export default CryptoCard;