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
  //this.notificationSubscription = Notifications.addListener(this._handleNotifications) ;
  //console.log('hoooo');
  //console.log(this.notificationSubscription);
}
componentDidMount() 
{
  ParticipantsRef.on('value', snapshot => {
    let data = snapshot.val();
    let items = Object.values(data);
    this.setState({ items });
  });
}
render() {
  console.log(this.state.items);
  return (
    <View style={styles.container}>
    {this.state.items.length > 0 ? (
        <Text>there are items</Text>
      ) : (
        <Text>No items</Text>
      )}
      <Text>Participant Page works</Text>
    </View>
  );
}

handleNotification  (notification)
{
  this.setState({notification: notification});
  console.log('hey');
  console.log(notification);


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

  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
