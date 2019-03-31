import React,{component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Notifications} from 'expo';
import { registerForPushNotificationsAsync} from '../services'
import { db } from '../config';


let ParticipantsRef= db.ref('/AirshowParticipants')



export default class ParticipantPage extends React.Component {
  state = {
    notification: {},
  };

componentWillMount(){
  registerForPushNotificationsAsync() ;
 }
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Participant Page works</Text>
      </View>
    );
  }
}


  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
