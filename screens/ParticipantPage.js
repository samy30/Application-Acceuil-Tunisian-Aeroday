import React from 'react';
import {ScrollView,View,TextInput,Alert,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions, } from 'react-native';
import {  Block, Text, Input, theme } from 'galio-framework';
import { materialTheme, products, Images } from '../constants/';
import { Select, Icon, Header, Product, Switch,Button } from '../components/';

import { registerForPushNotificationsAsync} from '../services'
import{ db } from '../config';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('window');

const thumbMeasure = (width - 48 - 32) / 3;


let ParticipantsRef= db.ref('/participants')




export default class ParticipantPage extends React.Component {
  state = {
    notification: {},
    tokens: [],
      screenHeight: 0,
      login: '',
      mdp: '',
      email: '',
      nom_equipe: 'the black pearl',
      members: ['jack', 'hector', 'elizabeth', 'william'],
      img: require('../assets/images/icon.png')

  };

componentWillMount(){
  registerForPushNotificationsAsync() ;
 }

componentDidMount() {
  ParticipantsRef.on('value', snapshot => {
    let data = snapshot.val();
    let items = Object.values(data);
    let tokens = [];
    this.setState({ items });
    console.log(items);
    items.forEach(element => {
      tokens.push(element.token)
    });
    this.setState({tokens});
    console.log(tokens);
  });
 }

    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };



    render() {
        const scrollEnabled = this.state.screenHeight > height;


        var Members = [];
        for (let i = 0 ;  i < this.state.members.length ;i++)
        {
            Members.push(<Text h2 style={{marginBottom: theme.SIZES.BASE / 2}}>{this.state.members[i]}</Text>);
        }
        return (
            <ScrollView style={styles.container} column scrollEnabled={scrollEnabled} >

                <View style={{position:'absolute', top:0}}>
                    <View style={{alignItems: 'stretch', height: 80, backgroundColor: 'blue',  marginBottom: 10}}>
                        <Text h1 style={{marginBottom: theme.SIZES.BASE / 2}}>{this.state.nom_equipe}</Text>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        {Members}
                    </View>
                    <Image style={{alignItems: 'center', width: 200, height: 200,    justifyContent: 'center'}}
                           source={this.state.img}/>
                    <Text> blabla {'\n'} hahaha </Text>

                </View>
            </ScrollView>
        );




        {/* cette partie est pour le test login

        <Text>Participant Page works</Text>



          <Block flex style={styles.group}>
              <Text bold size={16} style={styles.title}>Inputs</Text>
              <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                  <Input
                      right
                      placeholder="icon right"
                      placeholderTextColor={materialTheme.COLORS.DEFAULT}
                      style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                      onChangeText={(text)=>this.setState( {login:text})}
                      iconContent={<Icon size={16} color={theme.COLORS.INPUT} name="camera-18" family="GalioExtra"/>}
                  />
              </Block>
          </Block>

          <Text>{this.state.login} {'\n'} {this.state.mdp}</Text>


          <Block flex center>
              <Button
                  center
                  shadowless
                  color={materialTheme.COLORS.DEFAULT}
                  //textStyle={styles.optionsText}
                  //style={[styles.optionsButton, styles.shadow]}
                  >
                  DELETE
              </Button>
          </Block>


          <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({login: text})}
              placeholder="login"
              value={"Admin"}
          />

          <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({mdp:text})}
              secureTextEntry={true}
              placeholder="Password"
              value={"Admin"}
          />
          <Text>
              {this.state.login} {`\n`}
              {this.state.mdp} {`\n`}
          </Text>
          <Button
              onPress={()=>this.submit.bind(this)}
              title="Sub"
              color="#841584"
          />

          <Button shadowless style={[styles.button, styles.shadow]}
                  onPress={this.submit.bind(this)} >
            Submit
          </Button>*/}

    }



    submit() {
        //Do Something
        (((this.state.login).toString() === 'Admin')&&((this.state.mdp).toString() === 'Admin'))?
            Alert.alert("Access granted", "vous avez l'access"): Alert.alert("Access denied"+(this.state.login.toLocaleLowerCase() === 'admin').toLocaleString(), "vous n'avez pas l'acces"),console.log(this.state.login);

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
    }
});
