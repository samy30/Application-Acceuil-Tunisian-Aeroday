import React from 'react';
import {
    ScrollView,View,TextInput,Alert,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions,
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


        return ( //cette partie est pour le test login
            <View style={styles.card}>




                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({login: text})}
                    placeholder="Email"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({mdp: text})}
                    secureTextEntry={true}
                    placeholder="Tel"
                />

                /* <Button
                     onPress={()=>this.submit.bind(this)}
                     title="Sub"
                     color="#841584"
                 />*/

                <Button shadowless style={[styles.button, styles.shadow]}
                        onPress={this.submit.bind(this)}>
                    Login
                </Button>
            </View>

        );
    }

    submit() {
        //Do Something
        let m;
        for(member in this.state.items.members) {
            if ((this.state.login.toString() === member.email) && (this.state.mdp.toString() === member.tel)) {
                //redirection vers ParticipantPage.js
                m = member;
                break;
            }
        }
            if (m.isNull())
                 Alert.alert("Access denied" , "Veuillez verifier l'email et le tel");

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
  }
      

});
