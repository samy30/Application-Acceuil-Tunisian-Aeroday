import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

 export class LandingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LandingPageWorks!</Text>
        <Button
          title="Go to LoadingPage"
          onPress={() => this.props.navigation.navigate('loadingPage')}
        />
        <Button
          title="Go to ParticipantPage"
          onPress={() => this.props.navigation.navigate('participantPage')}
        />
        <Button
          title="Go to ProfilePage"
          onPress={() => this.props.navigation.navigate('profilePage')}
        />
        <Button
          title="Go to realTimePage"
          onPress={() => this.props.navigation.navigate('realTimePage')}
        />
        <Button
          title="Go to SettingsPage"
          onPress={() => this.props.navigation.navigate('settingsPage')}
        />
        <Button
          title="Go to voteAirshowPage"
          onPress={() => this.props.navigation.navigate('voteAirshowPage')}
        />
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