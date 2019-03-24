import React,{component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerForPushNodificationsAsync} from '../screens'


export default class ParticipantPage extends React.Component {
componentWillMount(){
  registerForPushNodificationsAsync() ;
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
