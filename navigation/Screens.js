import React from 'react';
import { Easing, Animated, Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import LandingPage from '../screens/LandingPage'
import LoadingPage from '../screens/LoadingPage'
import ParticipantPage from '../screens/ParticipantPage'
import ProfilePage from '../screens/ProfilePage'
import RealTimePage from '../screens/RealTimePage'
import SettingsPage from '../screens/SettingsPage'
import VoteAirshowPageScreen from '../screens/VoteAirshowPage'


import Menu from './Menu';
import Header from '../components/Header';
import { Drawer } from '../components/';

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index
    const width = layout.initWidth
    
    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    })
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1],
    })
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    })

    const scaleWithOpacity = { opacity }
    const screenName = "Search"

    if (screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] }
  }
})

const LandingPageStack = createStackNavigator({
  Landing: {
    screen: LandingPage,
    navigationOptions: ({ navigation }) => ({
      //header: <Header white transparent title="LandingPage" navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const LoadingPageStack = createStackNavigator({
  Loading: {
    screen: LoadingPage,
    navigationOptions: ({ navigation }) => ({
      //header: <Header back title="LoadingPage" navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const ParticipantPageStack = createStackNavigator({
  Participant: {
    screen: ParticipantPage,
    navigationOptions: ({ navigation }) => ({
      header: <Header back title="ParticipantPage" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});


const ProfilePageStack = createStackNavigator({
  Profile: {
    screen: ProfilePage,
    navigationOptions: ({ navigation }) => ({
      header: <Header back title="ProfilePage" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});


const RealTimePageStack = createStackNavigator({
  RealTime: {
    screen: RealTimePage,
    navigationOptions: ({ navigation }) => ({
      header: <Header back title="Ce que se passe Maintenant à l'AERODAY" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});


const SettingsPageStack = createStackNavigator({
  Settings: {
    screen: SettingsPage,
    navigationOptions: ({ navigation }) => ({
      header: <Header back title="SettingsPage" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});


const VoteAirshowPageStack = createStackNavigator({
  VoteAirshow: {
    screen: VoteAirshowPageScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header back title="VoteAirshow" navigation={navigation} />,
    })
  }
},
{
  cardStyle: { 
    backgroundColor: '#EEEEEE', //this is the backgroundColor for the app
  },
  transitionConfig,
});

const AppStack = createDrawerNavigator(
  {
    LandingPage: {
      screen: LandingPageStack,
      navigationOptions: {
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Home" title="LandingPage" />
        ),
      },
    },
    LoadingPage: {
      screen: LoadingPageStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Home" title="LoadingPage" />
        ),
      }),
    },
    ParticipantPage: {
      screen: ParticipantPageStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="ParticipantPage" />
        ),
      }),
    },
    ProfilePage: {
      screen: ProfilePageStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="ProfilePage" />
        ),
      }),
    },
    SettingsPage: {
      screen: SettingsPageStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Settings" />
        ),
      }),
    },
    VoteAirshowPage: {
      screen: VoteAirshowPageStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="VoteAirshow" />
        ),
      }),
    },
    
    RealTimePage: {
      screen: RealTimePageStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="RealTime" />
        ),
      }),
    },
  },
  Menu
);

export default createSwitchNavigator(
  {
    App: AppStack,
    VoteAirshow: VoteAirshowPageStack,
    Landing: LandingPageStack,
    Loading: LoadingPageStack,
    Participant: ParticipantPageStack,
    Profile: ProfilePageStack,
    RealTime: RealTimePageStack,
    Settings: SettingsPageStack,
    
  },
  {
    initialRouteName: 'App',
  }
);