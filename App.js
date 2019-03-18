import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {LandingPage} from './screens/LandingPage'
import {LoadingPage} from './screens/LoadingPage'
import {ParticipantPage} from './screens/ParticipantPage'
import {ProfilePage} from './screens/ProfilePage'
import {RealTimePage} from './screens/RealTimePage'
import {SettingsPage} from './screens/SettingsPage'
import {VoteAirshowPage} from './screens/VoteAirshowPage'

const MainNavigator = createStackNavigator({
landingPage: {screen: LandingPage},
loadingPage: {screen: LoadingPage},
participantPage: {screen: ParticipantPage},
profilePage: {screen: ProfilePage},
realTimePage: {screen: RealTimePage},
settingsPage: {screen: SettingsPage},
voteAirshowPage: {screen: VoteAirshowPage}
},
{
  initialRouteName: "landingPage"
});

const AppNavigator = createAppContainer(MainNavigator);
export default class App extends React.Component {
  render() {
    return <AppNavigator />;
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
