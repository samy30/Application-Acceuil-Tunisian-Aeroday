import React from 'react';
import {
    ScrollView,View,TextInput,Alert,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {  Block, Text, Input, theme } from 'galio-framework';
import { registerForPushNotificationsAsync} from '../services'

import { materialTheme, products, Images } from '../constants/';
import { Select, Icon, Header, Product, Switch,Button } from '../components/';
import { db } from '../config';

let ParticipantsRef= db.ref('/AirshowParticipants');
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('window');

const thumbMeasure = (width - 48 - 32) / 3;


export default class ParticipantPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screenHeight: 0,
            login: '',
            mdp: '',
            email: '',
            nom_equipe: 'the black pearl',
            members: ['jack', 'hector', 'elizabeth', 'william'],
            img: require('../assets/images/icon.png'),
            items: []

        }


    }

    componentWillMount(){
        registerForPushNotificationsAsync() ;
    }

    componentDidMount() {
        ParticipantsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }





  render() {
      const scrollEnabled = this.state.screenHeight > height;


      var Members = [];
      for (let i = 0 ;  i < this.state.members.length ;i++)
      {
          Members.push(<Text h2 style={styles.cardText}>{this.state.members[i]}</Text>);
      }
    return (
      <ScrollView style={styles.container} column scrollEnabled={scrollEnabled} >

          <TouchableOpacity  style={styles.card}>
            <View style={{alignItems: 'stretch', height: 80, padding:10 ,  marginBottom: 10}}>
              <Text h1 style={{marginBottom: theme.SIZES.BASE / 2}}>{this.state.nom_equipe}</Text>
            </View>

            <View style={{alignItems: 'center'}} >
              {Members}
            </View>
            <Image style={styles.cardImage}
                   source={this.state.img}/>

          </TouchableOpacity>
      </ScrollView>
    );





  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      flexDirection: 'column',

  },
    input: {
        width: 250,
        margin: 5
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft : '2%',
        width: '90%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset:{
            width:3,
            height:3
        }
    },
    cardImage:{
        widht: '90%',
        height: 200,
        resizeMode: 'cover'
    },
    cardText: {
      padding: 10,
        fontSize: 16
    }
});
