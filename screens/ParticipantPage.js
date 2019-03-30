import React,{component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Notifications} from 'expo';
import { registerForPushNotificationsAsync} from '../services'


export default class ParticipantPage extends React.Component {
componentWillMount(){
  registerForPushNotificationsAsync() ;
  Notifications.addListener(this.handleNotifications) ;
  console.log('hoooo');
}
handleNotification  (notification) 

{
  console.log('hey');
  console.log(notification);
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
