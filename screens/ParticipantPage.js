import React,{component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Notifications} from 'expo';
import { registerForPushNotificationsAsync} from '../services'


export default class ParticipantPage extends React.Component {
  state = {
    notification: {},
  };

componentWillMount(){
  registerForPushNotificationsAsync() ;
  //this.notificationSubscription = Notifications.addListener(this._handleNotifications) ;
  //console.log('hoooo');
  //console.log(this.notificationSubscription);
}
_handleNotification = (notification) => 
{
  this.setState({notification: notification});
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
