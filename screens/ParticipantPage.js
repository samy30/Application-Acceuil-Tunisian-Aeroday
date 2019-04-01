import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerForPushNotificationsAsync} from '../services'
import { db } from '../config';


let ParticipantsRef= db.ref('/participants')



export default class ParticipantPage extends React.Component {
  state = {
    notification: {},
    tokens: []
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
